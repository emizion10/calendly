const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const meetingsController = require("../MeetingsController");
const meetingsService = require("../../services/MeetingsService");

describe("Meetings Controller", function () {
  beforeEach(() => {
    sinon.restore();
  });
  describe("get", function () {
    let res, req;
    beforeEach(() => {
      req = { params: { id: "d6e8c158-6abc-4e11-9771-1bbb1d18cc0e" } };
      res = { json: function () {} };
    });
    it("should return meetings of a user", async function () {
      const stubValue = {
        hostId: "d6e8c158-6abc-4e11-9771-1bbb1d18cc0e",
        participantId: "7e017974-7657-46a1-bfec-0ce08e365686",
        startDate: "2022-05-17T01:38:12.000Z",
        endDate: "2022-05-17T02:38:12.000Z",
      };
      const mock = sinon.mock(res);
      mock.expects("json").once().withExactArgs([stubValue]);
      const stub = sinon
        .stub(meetingsService, "getMeetingsByUser")
        .returns([stubValue]);
      await meetingsController.get(req, res);
      expect(stub.calledOnce).to.be.true;
      mock.verify();
    });
    it("should return empty array when there is no meeting scheduled", async function () {
      const mock = sinon.mock(res);
      mock.expects("json").once().withExactArgs([]);
      const stub = sinon.stub(meetingsService, "getMeetingsByUser").returns([]);
      await meetingsController.get(req, res);
      expect(stub.calledOnce).to.be.true;
      mock.verify();
    });
  });
});
