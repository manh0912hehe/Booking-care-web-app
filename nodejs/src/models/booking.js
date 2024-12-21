"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Booking extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         Booking.belongsTo(models.User, {
            foreignKey: "patientID",
            targetKey: "id",
            as: "patientData",
         });
      }
   }
   Booking.init(
      {
         statusId: DataTypes.STRING,
         doctorId: DataTypes.INTEGER,
         patientID: DataTypes.INTEGER,
         date: DataTypes.STRING,
         timeType: DataTypes.STRING,
         token: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Booking",
      }
   );
   return Booking;
};
