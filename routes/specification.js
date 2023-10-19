var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/specification", function (req, res, next) {
  res.render("menu/specification", { title: "Express" });
});

module.exports = router;
