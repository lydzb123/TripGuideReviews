const faker = require("faker");
const Seeder = require("mysql-db-seed").Seeder;
const mysql = require('mysql');
const {db} = require('../database/index.js')
// const faker = require('faker/locale/ru');

db.connect();


var maxUserID = 1;
var maxAttractionID = 1;


const seed = new Seeder(
  1,
  "localhost",
  "root",
  "",
  "tripAdvisor"
);



let seedAttractions = async () => {
  for (let i = 0; i <50; i++) {
    (async () => {
      await seed.seed(
        1,
        "attractions",
        {
          attractionName: faker.address.city
        },
      )
      seed.exit();
      process.exit();
    })();

      (async () => {
        await seed.seed(
          1,
          "users",
          {
            username: faker.internet.userName(),
            userLocation: faker.address.city() + ', ' + faker.address.state(),
            contributions: faker.random.number({min: 1, max: 100}),
            profilePhoto: faker.image.people
          },
        )
        seed.exit();
        process.exit();
      })();

  }
}



seedAttractions();


