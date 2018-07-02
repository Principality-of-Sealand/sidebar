/******************************************************************************/
/* Sequelize ******************************************************************/
/******************************************************************************/
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
// const db = new Sequelize('sidebar', 'biosync', '', {
//   host: 'localhost',
//   dialect: 'postgres'
// })
//
// db.authenticate()
//   .then(() => {
//     console.log('connected to db');
//   })
//   .catch(err => console.log('failed to connect to db ', err));
//
// module.exports = {
//   db: db,
//   Op: Op
// };

/******************************************************************************/
/* PostgeSQL ******************************************************************/
/******************************************************************************/
// const { Client } = require('pg');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'biosync',
  host: 'localhost',
  database: 'restaurant',
  password: ''
});

// const client = new Client({
//   user: 'biosync',
//   host: 'localhost',
//   database: 'restaurant',
//   password: ''
// });

pool.on('error', (err, client) => {
  console.log('error on idle client', err);
  process.exit(-1);
});

pool.connect((err, client) => {
  if (err) {
    console.log('failed to connect to db ', err);
  } else {
    console.log('connected to database');
  }
});

// client.connect(err => {
//   if (err) {
//     console.log('failed to connect to db ', err);
//   } else {
//     console.log('connected to database');
//   }
// });

// module.exports = { client };
module.exports.client = pool;

/******************************************************************************/
/* MongoDB ********************************************************************/
/******************************************************************************/
// const MongoClient = require('mongodb').MongoClient;
// var mongodb = 'lol';
//
// MongoClient.connect('mongodb://localhost:27017/', function(err, client) {
//   if (err) {
//     console.log('Failed to connect to db ', err);
//   }
//
//   const db = client.db('sidebar');

  /* Create collection ********************************************************/
  // db.createCollection('details', function(err, data) {
  //   if (err) {
  //     console.log('Failed to create details collection ', err);
  //   }
  //   console.log('Created details collection');
  // });
  //
  // db.createCollection('hours', function(err, data) {
  //   if (err) {
  //     console.log('Failed to create hours collection ', err);
  //   }
  //   console.log('Created hours collection');
  // });
  //
  // db.createCollection('misc', function(err, data) {
  //   if (err) {
  //     console.log('Failed to create misc collection ', err);
  //   }
  //   console.log('Created misc collection');
  // });
  /* Insert entry *************************************************************/
  // const detailsEntry = { today: '', price_range: '$100-150', health_score: 'A'}
  //
  // db.collection('details').insertOne(detailsEntry, function(err, data) {
  //   if (err) {
  //     console.log('Failed to insert to details collection ', err);
  //   }
  //   console.log('Document inserted');
  // });

  /* Find entry ***************************************************************/
  // db.collection('details').findOne({}, function(err, data) {
  //   if (err) {
  //     console.log('Failed to find one ', err);
  //   }
  //   console.log('Data fetched from details collection:\n ', data);
  // });
// });

// module.exports = { mongodb: mongodb };
