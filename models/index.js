const Sequelize = require('sequelize')
const sequelize = new Sequelize('diarybook', 'postgres', '2004' , {
    host: 'localhost',
    port: 5433,
    dialect:'postgres'
  });

  const db = {}
  db.Sequelize = Sequelize
  db.sequelize  = sequelize
  db.diary = require('./diary.model')(sequelize , Sequelize)
  module.exports = db