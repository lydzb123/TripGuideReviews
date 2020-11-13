const express = require('express');
const app = express();
const {getAllAttractionReviews} = require('./apiFuncs.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());





app.get('/api/attractions/:attractionid/reviews', (req, res) => {

  var attractionID = req.params.attractionid;
  getAllAttractionReviews(attractionID, (err, reviews) => {
    if(err) {
      console.log('serverside error---------------', err);
      res.status(404).send(err);
    } else {
      console.log('serverside success---------------', reviews);
      res.status(200).send(reviews);
    }
  });

  //i want to get my seeded data for my correlating attraction ID
  //get reviews for the same attraction id
  //show a list of first 5 reviews by order of date descending

  // eventually send metrics too!
  // res.send('hey this is working');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening at ', port);
})