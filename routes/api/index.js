const router = require("express").Router();
const userRoutes = require("./users");

// Book routes
router.use("/users", userRoutes);

module.exports = router;

// const router = require("express").Router();
// const bookRoutes = require("./books");
//
// // Book routes
// router.use("/books", bookRoutes);
//
// module.exports = router;
