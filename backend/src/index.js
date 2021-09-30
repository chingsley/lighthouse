import { server, db } from './server';

const PORT = process.env.PORT || 4000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('successfully connected to db');
    server.listen(PORT, () => {
      console.log('Server started on port: ', PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
