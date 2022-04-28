const meetingsRepository = require("../repositories/MeetingsRepository");

exports.scheduleMeeting = async (meetingsInputData) => {
  return meetingsRepository.scheduleMeeting(meetingsInputData);
};

exports.getMeetingsByUser = async (id) => {
  return meetingsRepository.getMeetingsByUser(id);
};
