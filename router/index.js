const express = require("express");
const dashboardController = require("../controllers/dashboardController");
const loginController = require("../controllers/loginController");
const userGameController = require("../controllers/userGameController");
const userGameEditController = require("../controllers/userGameEditController");
const router = express.Router();

router.get("/", loginController.index);
router.get("/admin", dashboardController.index);
router.get("/admin/create", userGameController.create);
router.get("/admin/user", userGameController.index);
router.get("/admin/:id", userGameController.show);
router.get("/admin/:id/edit", userGameEditController.show);
router.put("/admin/edit/:id", userGameController.update);
router.post("/admin/create", userGameController.store);
router.delete("/admin/:id", userGameController.destroy);
router.post("/login", loginController.create);

module.exports = router;
