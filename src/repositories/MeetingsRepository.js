const { Op } = require("sequelize");
const Meetings = require("../entities/Meetings");

module.exports.scheduleMeeting = async ({
  hostId,
  participantId,
  startDate,
  endDate,
}) => {
  // Checking whether the host is scheduled for another meeting as a participant or host during this time period
  const meetingExistsForHost = await Meetings.findOne({
    where: {
      [Op.and]: [
        { [Op.or]: { hostId: hostId, participantId: hostId } },
        {
          [Op.or]: [
            { startDate: { [Op.between]: [startDate, endDate] } },
            { endDate: { [Op.between]: [startDate, endDate] } },
          ],
        },
      ],
    },
  });

  // Checking whether the participant is scheduled for another meeting as a participant or host during this time period
  const meetingExistsForParticipant = await Meetings.findOne({
    where: {
      [Op.and]: [
        { [Op.or]: { hostId: participantId, participantId: participantId } },
        {
          [Op.or]: [
            { startDate: { [Op.between]: [startDate, endDate] } },
            { endDate: { [Op.between]: [startDate, endDate] } },
          ],
        },
      ],
    },
  });
  if (meetingExistsForHost || meetingExistsForParticipant) {
    return false;
  }

  return Meetings.create({
    hostId,
    participantId,
    startDate,
    endDate,
  });
};

module.exports.getMeetingsByUser = async (id) => {
  return Meetings.findAll({
    where: {
      [Op.or]: { hostId: id, participantId: id },
    },
  });
};
