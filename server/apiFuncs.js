const mysql = require('mysql');
const keyword_extractor = require("keyword-extractor");

const dbConnection = mysql.createConnection({
  user: 'root',
  database: 'tripAdvisor',
  multipleStatements: true
});

dbConnection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + dbConnection.threadId);
});


const buildFilterQuery = (filters) => {

}

module.exports = {
  getPopularMentions: (attractionID, callback) => {
    const keywordList = [];
    const reviewTextQ =  `SELECT reviewText AS review FROM reviews WHERE attractionID=${attractionID}`;
    dbConnection.query(reviewTextQ, (err, results) => {
      if(err) {
        callback(error);
      } else {
        for(let i=0; i < results.length; i++) {
          var sentence = results[i].review;
          var extraction_result = keyword_extractor.extract(sentence,{
            language:"english",
            remove_digits: true,
            return_changed_case:true,
            remove_duplicates: true
          });
            keywordList.push(...extraction_result);
        }
        var allKeywordString = keywordList.join(' ');
        var extraction = keyword_extractor.extract(allKeywordString,{
          language:"english",
          remove_digits: true,
          return_changed_case:true,
          remove_duplicates: true
        });
        var first20Keywords = {keywords: extraction.splice(0, 20)};

        //insert into attraction DB to cache the keywords?
        //if another review is added, clearcache and run query again
        callback(null, first20Keywords);
      }
    })
  //potentially use npm libary to find keywords from review text bodies
  },


  getMetrics: (attractionID, callback) => {
    const metricQ = {
      totalReviews: `SELECT COUNT(*) AS totalReviews FROM reviews WHERE attractionID=${attractionID}`,
      travelerRatings: `SELECT travelerRating AS rating, COUNT(*) AS total FROM reviews WHERE attractionID=${attractionID} GROUP BY travelerRating`,
      languages: `SELECT reviewLanguage AS language, COUNT(*) AS total FROM reviews WHERE attractionID=${attractionID} GROUP BY reviewLanguage`,
    }
    dbConnection.query(`${metricQ.totalReviews}; ${metricQ.travelerRatings}; ${metricQ.languages}`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result)
      }
    });
  },

  getReviews: (attractionID, filters, callback) => {

// {
//   travelerRating: [ 'Excellent', 'Very Good' ],
//   travelerType: [ 'Solo' ],
//   timeOfYearFilter: [ 'Mar–May', 'Jun–Aug', 'Sep–Nov', 'Dec–Feb' ],
//   reviewLanguage: [ 'allLanguages' ],
//   reviewText: [ 'allReviews' ] }



    const reviewQ = {
      all: `
      SELECT
        r.attractionID, u.username, u.userLocation, u.contributions, u.profilePhoto,
        r.title, r.dateOfReview, r.reviewText, r.reviewLanguage, r.travelerRating, r.dateOfExperience
      FROM reviews r
      INNER JOIN users u
      WHERE attractionID=${attractionID}
      ORDER BY dateOfReview DESC
      LIMIT 5`,
      users: `SELECT * FROM users u INNER JOIN reviews r WHERE r.attractionID=${attractionID} ORDER BY r.dateOfReview DESC LIMIT 5`
      //chose one query
    }

    if (Object.keys(filters).length === 0) {
      dbConnection.query(`${reviewQ.all}`,
      (err, results) => {
        if (err) {
          console.log('----went into getReviews ERROR statement')
          throw err;
        } else {
          console.log('----went into getReviews SUCCESS statement');
          // console.log('RESULTS from SQL', results);
          callback(null, results);
        }
      });
    } else {

    const masterQuery = [];

    // TRAVELER RATING QUERY
       if (filters.travelerRating) {
        const ratingOptions = {"Terrible": 1, "Poor": 2, "Average": 3, "Very Good": 4, "Excellent": 5}
        const ratingArr = filters.travelerRating.map(rating => {
          return `travelerRating = ${ratingOptions[rating]}`
        })
        let ratingQuery = ratingArr.join(' OR ');
        masterQuery.push(ratingQuery);
       }

    // TRAVELER TYPE QUERY
      if (filters.travelerType) {
        const typeArr = filters.travelerType.map(type => {
          return `travelerType = "${type}"`
        })
        let typeQuery = typeArr.join(' OR ');
        masterQuery.push(typeQuery);
      }

    // TIME OF YEAR QUERY
      if (filters.timeOfYearFilter) {
        const timeOptions = {["Mar–May"]: [3, 4, 5], ["Jun-Aug"]: [6, 7, 8], ["Sep–Nov"]: [9, 10, 11], ["Dec-Feb"]: [12, 1, 2]};
        const timeArr = filters.timeOfYearFilter.map(time => {
          return timeOptions[time].map(month => {
            return `MONTH(dateOfExperience) = ${month}`
          })
        });
        let timeQuery = timeArr.join(' OR ').split(',').join(' OR ');
        masterQuery.push(timeQuery);
      }


    // REVIEW LANGUAGE QUERY

      if (filters.reviewLanguage && filters.reviewLanguage[0] !== "allLanguages") {
        let languageQuery = `reviewLanguage = "${filters.reviewLanguage[0]}"`
        masterQuery.push(languageQuery);
      }

      masterQueryString = `WHERE attractionID=${attractionID} AND ` + masterQuery.join(' AND ');

      dbConnection.query(`SELECT
        r.attractionID, u.username, u.userLocation, u.contributions, u.profilePhoto,
        r.title, r.dateOfReview, r.reviewText, r.reviewLanguage, r.travelerRating, r.dateOfExperience
      FROM reviews r
      INNER JOIN users u
      ${masterQueryString}
      ORDER BY dateOfReview DESC
      LIMIT 5
      `,
      (err, results) => {
        if (err) {
          console.log('----went into getQUERIESReviews ERROR statement')
          throw err;
        } else {
          console.log('----went into getQUERIEDReviews SUCCESS statement');
          // console.log('RESULTS from SQL', results);
          callback(null, results);
        }
      });

    }
  }
  }

  // SELECT * FROM reviews WHERE travelerType = "Solo" OR travelerType = "Friends" AND travelerRating = 4 OR travelerRating = 3 OR travelerRating = 2;

    // if (filters.timeOfYearFilter)

    // }


// key = "Solo"
// {
//   travelerRating: [ 'Excellent', 'Very Good' ],
//   travelerType: [ 'Solo' ],
//   timeOfYearFilter: [ 'Mar–May', 'Jun–Aug', 'Sep–Nov', 'Dec–Feb' ],
//   reviewLanguage: [ 'allLanguages' ],
//   reviewText: [ 'allReviews' ] }




// dateOfExperience AS DatePartString (month, '2017/08/25') AS
// SELECT DATENAME(month, '2017/08/25') AS DatePartString;
// SELECT DATENAME(yy, '2017/08/25') AS DatePartString;


