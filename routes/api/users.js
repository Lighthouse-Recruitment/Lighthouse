const router = require("express").Router();
const lhcontroller = require("../../controllers/lhController");

// Matches with "/api/users"
router.route("/")
  .get(lhcontroller.findAll)
  .post(lhcontroller.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(lhcontroller.findById)
  .put(lhcontroller.update)
  .delete(lhcontroller.remove);


module.exports = router;



// const router = require("express").Router();
// const booksController = require("../../controllers/booksController");
//
// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);
//
// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);
//
// module.exports = router;
