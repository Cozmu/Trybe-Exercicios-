const app = require('./app');
// const connection = require('./db/connection');
require('dotenv').config();

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);

  // const [result] = await connection.execute('SELECT 1');
  // if (result) {
  //   console.log('MySQL connection OK');
  // }
});