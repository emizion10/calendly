const meetingService = require("../services/MeetingsService");

exports.create = async (req, res, next) => {
  const meeting = await meetingService.scheduleMeeting(req.body);
  // If there is a conflicting meeting during given time frame conflict error is thrown
  if (!meeting) {
    next(new Error("Conflict Error"));
  } else {
    res.json(meeting);
  }
};

exports.get = async (req, res, next) => {
  const meetings = await meetingService.getMeetingsById(req.params.id);
  res.json(meetings);
};
