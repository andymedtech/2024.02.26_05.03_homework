const { Router } = require("express");
const router = new Router();

const routerNews = require("./news.route");
const categoriesComments = require("./categories.route");
const routerComments = require("./comments.route");
const addComments = require("./add.route");
const userComments = require("./user.route");

router.use("/news", routerNews);
router.use("/categories", categoriesComments);
router.use("/comments", routerComments);
router.use("/add", addComments);
router.use("/user", userComments);

module.exports = router;
