const Joi = require("joi");
// Validation for schedule meeting
module.exports.scheduleMeeting = Joi.object({
  hostId: Joi.string().guid().required(),
  participantId: Joi.string().guid().required(),
  startDate: Joi.date().required().greater(Date.now()),
  endDate: Joi.date().min(Joi.ref("startDate")).required(),
});

// Validation for get all meetings
module.exports.getMeetingsByUser = Joi.object({
  id: Joi.string().guid().required(),
});
