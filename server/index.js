const express = require('express');
const app = express();
const {getReviews, getMetrics, getPopularMentions} = require('./apiFuncs.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/* GET POPULAR MENTIONS */
app.get('/api/attractions/:attractionid/reviews/keywords', (req, res) => {
  var attractionID = req.params.attractionid;

  getPopularMentions(attractionID, (err, keywords) => {
    if (err) {
      console.log('serverside error---------------', err);
      res.status(404).send(err);
    } else {
      console.log('serverside success---------------', keywords);
      res.send(keywords);
    }
  });

});

/* GET REVIEWS */
app.get('/api/attractions/:attractionid/reviews', (req, res) => {
  var attractionID = req.params.attractionid;

  getReviews(attractionID, (err, reviews) => {
    if(err) {
      console.log('serverside error---------------', err);
      res.status(404).send(err);
    } else {
      console.log('serverside success---------------', reviews);
      res.status(200).send(reviews);
    }
  });
});


/* GET REVIEWS METRICS */
app.get('/api/attractions/:attractionid/reviews/metrics', (req, res) => {
  var attractionID = req.params.attractionid;

  getMetrics(attractionID, (err, metrics) => {
    if(err) {
      console.log('serverside error---------------', err);
      res.status(404).send(err);
    } else {
      console.log('serverside success---------------', metrics);
      res.status(200).send(metrics);
    }
  });

});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening at ', port);
})