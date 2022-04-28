const express = require("express");
const meetingsController = require("../../controllers/MeetingsController");
const validator = require("express-joi-validation").createValidator({
  passError: true,
});
const { handleRequest } = require("../../helpers/requestHandler");
const {
  scheduleMeeting,
  getMeetingsByUser,
} = require("../../validations/meetings");

const router = express.Router();

router
  .route("/")
  .post(
    validator.body(scheduleMeeting),
    handleRequest(meetingsController.create)
  );

router
  .route("/:id")
  .get(
    validator.params(getMeetingsByUser),
    handleRequest(meetingsController.get)
  );

module.exports = router;
