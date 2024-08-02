const Router = require("express").Router;
const appealGenerateController = require("../../controllers/appeal-generate-controller");
const router = new Router();

router.post("/new", appealGenerateController.generateNew);
router.get("/appeals", appealGenerateController.getAllAppeals);
router.get("/appeal", appealGenerateController.getAppeal);

module.exports = router;
