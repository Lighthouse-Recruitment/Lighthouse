const router = require("express").Router();
const lhcontroller = require("../../controllers/lhController");

// Matches with "/api/books"
router.route("/")
  .get(lhcontroller.findAll)
  .post(lhcontroller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(lhcontroller.findById)
  .put(lhcontroller.update)
  .delete(lhcontroller.remove);

module.exports = router;
