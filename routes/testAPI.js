var express = require("express");
var router = express.Router();
const request = require("request");

router.get("/", function (req, res, next) {
  let apiKey = "7bb148079433d1609cd7efb8e42997195d71e2d3c275cb6e47a4ea75";
  const url = `https://api.ipdata.co?api-key=${apiKey}`;
  request({ url: url, json: false }, (error, response) => {
    if (error) {
      console.log("Unable to connect");
    } else {
      res.send(response.body);
    }
  });
});

module.exports = router;
