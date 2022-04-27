const Meetings = require("../entities/Meetings");

module.exports.scheduleMeeting = async ({
  hostId,
  participantId,
  startDate,
  endDate
}) => {
    console.log('control');
  return Meetings.create({
    hostId,
    participantId,
    startDate,
    endDate,
  });
};

module.exports.getMeetingsByHost = async (hostId) => {
  return Meetings.findAll({
    where: {
      hostId: hostId,
      isDeleted: false,
    },
  });
};




