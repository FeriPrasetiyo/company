var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("menu/index", { title: "Express" });
});

router.get("/contact", function (req, res, next) {
  res.render("menu/contact", { title: "Express" });
});

router.get("/product", function (req, res, next) {
  res.render("menu/product", { title: "Express" });
});

router.get("/specification", function (req, res, next) {
  res.render("menu/specification", { title: "Express" });
});

router.get("/about", function (req, res, next) {
  res.render("menu/about", { title: "Express" });
});

module.exports = router;
