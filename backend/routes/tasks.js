const express = require("express");
const router = express.Router();

const userTasks = require("../controllers/userTasks");

router.get("/", userTasks.getAllTasks);
router.get("/:id", userTasks.getTask);

router.post("/", userTasks.createTask);
router.post("/update/:id", userTasks.updateTask);
router.post("/delete/:id", userTasks.deleteTask);

module.exports = router;
