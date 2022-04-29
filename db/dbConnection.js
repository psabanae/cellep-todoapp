const { Pool } = require('pg');

const client = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://wqruqoxlgxnalf:d805a7261ba9e866254beb5ab52b1adb73380bec3a7fdf6f6b6482ce91f4cd33@ec2-3-224-125-117.compute-1.amazonaws.com:5432/db7vfj1mspa2cf',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = client;