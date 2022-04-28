const Joi = require("joi");
module.exports.scheduleMeeting = Joi.object({
  hostId: Joi.string().guid().required(),
  participantId: Joi.string().guid().required(),
  startDate: Joi.date().required().greater(Date.now()),
  endDate: Joi.date().min(Joi.ref("startDate")).required(),
});

module.exports.getMeetingsByUser = Joi.object({
  id: Joi.string().guid().required(),
});
