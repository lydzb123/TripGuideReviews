const mysql = require('mysql');


const dbConnection = mysql.createConnection({
  user: 'root',
  database: 'tripAdvisor'
});

dbConnection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + dbConnection.threadId);
});


module.exports = {



  getAllAttractionReviews: (attractionID, callback) => {
    // make queries for metrics object to add to response
    // var metrics;
    // dbConnection.query('SELECT COUNT(*) FROM reviews WHERE reviewLanguage="Spanish"', (res) => {
    //   metrics = res;
    //   console.log('-------METRICXS!!!!!!!--------', res);
    // });

    dbConnection.query(`
    SELECT
      username, userLocation, contributions, profilePhoto,
      title, dateOfReview, reviewText, reviewLanguage, travelerRating, dateOfExperience
    FROM
      reviews r
    INNER JOIN users u
    WHERE attractionID=${attractionID}
    ORDER BY dateOfReview
    LIMIT 5
    `,
    (err, results) => {
      if(err) {
        console.log('----went into getAllAttractionReviews ERROR statement')
        throw err;
      } else {
        console.log('----went into getAllAttractionReviews SUCCESS statement');
        // console.log('RESULTS from SQL', results);

        callback(results);
      }
    });
  }
}


// dateOfExperience AS DatePartString (month, '2017/08/25') AS
// SELECT DATENAME(month, '2017/08/25') AS DatePartString;
// SELECT DATENAME(yy, '2017/08/25') AS DatePartString;


