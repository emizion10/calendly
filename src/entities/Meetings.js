const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");

class Meetings extends Model {}

Meetings.init(
  {
    hostId: DataTypes.STRING,
    participantId: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      field: "is_deleted",
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Meetings",
  }
);

module.exports = Meetings;
