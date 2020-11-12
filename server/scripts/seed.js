const faker = require("faker");
const Seeder = require("mysql-db-seed").Seeder;
const mysql = require('mysql');




const dbConnection = mysql.createConnection({
  user: 'root',
  database: 'tripAdvisor'
});

dbConnection.connect();


var maxUserID = 0;
var maxAttractionID = 0;

dbConnection.query('SELECT * FROM users ORDER BY userID DESC LIMIT 0, 1', (err, results) => {
  if(err) {
    console.log('db error' , err);
  } else {
    maxUserId = results;
  }
});

dbConnection.query('SELECT * FROM attractions ORDER BY attractionID DESC LIMIT 0, 1', (err, results) => {
  if(err) {
    console.log('db error' , err);
  } else {
    maxAttractionID = results;
  }
});



const seed = new Seeder(
  5,
  "localhost",
  "root",
  "",
  "tripAdvisor"
);


let attraction = faker.address.city();

(async () => {
  await seed.seed(
    1,
    "attractions",
    {
          attractionName: attraction
    },
  )
  seed.exit();
  process.exit();
})();



for(let i = 0; i < 5; i++) {
  (async () => {
    await seed.seed(
      1,
      "users",
      {
            username: faker.internet.userName,
            userLocation: faker.address.city() + ', ' + faker.address.stateAbbr(),
            contributions: faker.random.number({min: 1, max: 100}),
            profilePhoto: faker.image.people

      },
    )
    seed.exit();
    process.exit();
  })();


  (async () => {
    var travelerTypes = ["Families", "Couples", "Solo", "Business", "Friends"];
    var reviewLanguages = ["English", "Chinese", "Japanese", "Spanish", "Dutch", "Korean", "Hebrew"];
    var years = ["2012", "2014", "2015", "2017", "2018", "2019", "2020"]

    await seed.seed(
      1,
      "reviews",
      {
        attractionID: faker.random.number({min: 1, max: maxAttractionID}),
        userID: faker.random.number({min: 1, max: maxUserID}),
        title: faker.lorem.sentence,
        reviewText: faker.lorem.paragraph,
        dateOfExperience: faker.date.month() + ' ' + years[faker.random.number({min: 0, max: 6})],
        dateOfReview: faker.date.month() + ' ' + years[faker.random.number({min: 0, max: 6})],
        travelerRating: faker.random.number({min: 1, max: 5}),
        travelerType: travelerTypes[faker.random.number({min: 0, max: 4})],
        reviewLanguage: reviewLanguages[faker.random.number({min: 0, max: 6})],
        photos: faker.image.city
      }
    )
    seed.exit();
    process.exit();
  })();



}









//node seed.js