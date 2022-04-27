const _ = require("lodash");
const meetingService = require("../services/MeetingsService");


exports.create = async (req, res, next) => {
  const meeting = await meetingService.scheduleMeeting(req.body);
  res.json(meeting);
};

exports.get = async (req, res, next) => {
  const meetings = await meetingService.getMeetingsByHost(
    req.params.hostId
  );
  res.json(meetings);
};
