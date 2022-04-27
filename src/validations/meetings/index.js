const Joi = require("joi");
module.exports.scheduleMeeting = Joi.object({
  hostId: Joi.string().required(),
  participantId: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().min(Joi.ref('startDate')).required(),
});
