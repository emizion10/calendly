const meetingsRepository = require("../repositories/MeetingsRepository");

exports.scheduleMeeting = async (props) => {
  return meetingsRepository.scheduleMeeting(props);
};

exports.getMeetingsByHost = async (hostId) => {
  return meetingsRepository.getMeetingsByHost(hostId);
};
