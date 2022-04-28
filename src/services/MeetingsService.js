const meetingsRepository = require("../repositories/MeetingsRepository");

exports.scheduleMeeting = async (meetingsInputData) => {
  return meetingsRepository.scheduleMeeting(meetingsInputData);
};

exports.getMeetingsById = async (id) => {
  return meetingsRepository.getMeetingsById(id);
};
