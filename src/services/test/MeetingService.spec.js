const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const MeetingsRepository = require("../../repositories/MeetingsRepository");
const meetingsService = require("../MeetingsService");
describe("MeetingsService", function () {
  beforeEach(() => {
    sinon.restore();
  });
  const stubValue = {
    hostId: "d6e8c158-6abc-4e11-9771-1bbb1d18cc0e",
    participantId: "7e017974-7657-46a1-bfec-0ce08e365686",
    startDate: "2022-05-17T01:38:12.000Z",
    endDate: "2022-05-17T02:38:12.000Z",
  };
  describe("scheduleMeeting", function () {
    it("should schedule a new meeting", async function () {
      const stub = sinon
        .stub(MeetingsRepository, "scheduleMeeting")
        .returns(stubValue);

      const meeting = await meetingsService.scheduleMeeting({
        hostId: stubValue.hostId,
        participantId: stubValue.participantId,
        startDate: stubValue.startDate,
        endDate: stubValue.endDate,
      });
      expect(stub.calledOnce).to.be.true;
      expect(meeting.hostId).to.equal(stubValue.hostId);
      expect(meeting.participantId).to.equal(stubValue.participantId);
    });
  });

  describe("getMeetingsById", function () {
    it("should get meetings of a user by id", async function () {
      const stub = sinon
        .stub(MeetingsRepository, "getMeetingsById")
        .returns([stubValue]);
      const meetings = await meetingsService.getMeetingsById({
        id: stubValue.hostId,
      });

      expect(stub.calledOnce).to.be.true;
      expect(meetings.some((meeting) => meeting.hostId === stubValue.hostId)).to
        .be.true;
    });
  });
});
