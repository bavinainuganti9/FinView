const AWS = require('aws-sdk');
const pool = require('./db');

const s3 = new AWS.S3();

async function saveTransaction(data) {
  try {
    const [result] = await pool.execute('INSERT INTO transactions (amount, category) VALUES (?, ?)', [data.amount, data.category]);
    return result.insertId;
  } catch (error) {
    console.error(error);
    throw new Error('Database Error');
  }
}

async function uploadTransactionFile(fileBuffer, fileName) {
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: `transactions/${fileName}`,
    Body: fileBuffer,
    ContentType: 'application/json'
  };
  return s3.upload(params).promise();
}

module.exports = { saveTransaction, uploadTransactionFile };
