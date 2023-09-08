const express = require('express');
const { sequelize, DataTypes } = require('../db-config/db-connection');

const Employee = sequelize.define('employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  salary: DataTypes.INTEGER,
  deptID: DataTypes.INTEGER,
});

var router = express.Router();

router.get('/', function (req, res) {
  Employee.findAll()
    .then((recordArray) => {
      res.send(recordArray);
    })
    .catch((err) => {
      console.log('Error while fetching data.', err);
      res.status(500).send('Error while fetching data.');
    });
});

module.exports = router;
