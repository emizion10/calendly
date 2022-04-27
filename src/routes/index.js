const express = require("express");

const meetingsRoute = require("./meetings/index");

const router = express.Router();

router.get("/status", (req, res) => res.send("OK!"));

router.use("/meetings", meetingsRoute);

module.exports = router;
