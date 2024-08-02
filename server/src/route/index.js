const Router = require("express").Router;
const UserController = require("../controllers/user-controller");
const routerGenerate = require("./appeal-generate/appeal-generate");
const router = new Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/refresh", UserController.refresh);
router.get("/user", UserController.getUsers);

router.use("/generate", routerGenerate);

module.exports = router;
