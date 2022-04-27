const meetingsRepository = require("../repositories/MeetingsRepository");

exports.scheduleMeeting = async (props) => {
  return meetingsRepository.scheduleMeeting(props);
};

exports.getMeetingsById = async (id) => {
  return meetingsRepository.getMeetingsById(id);
};
