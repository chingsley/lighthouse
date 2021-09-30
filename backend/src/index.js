import server from './server';
import db from './db/models';

const PORT = process.env.PORT || 4000;

db.sequelize
  .authenticate()
  .then(() => {
    server.listen(PORT, () => {
      console.log('Server started on port: ', PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
