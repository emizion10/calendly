const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");

class Meetings extends Model {}

Meetings.init(
  {
    hostId: DataTypes.UUID,
    participantId: DataTypes.UUID,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "Meetings",
  }
);

module.exports = Meetings;
