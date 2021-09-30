const { v4: uuidv4 } = require('uuid');
const faker = require('faker');

const programs = [
  'Software Engineering',
  'Data Science',
  'Engineering Manager',
  'Devops Engineering',
  'Data Analyst',
];

const valid_status_list = ['alumni', 'student'];

const students = Array.from(Array(4)).map((_) => {
  const name = faker.name.findName();
  return {
    name,
    program: faker.random.arrayElement(programs),
    id: uuidv4(),
    email: faker.internet.email(name.split(' ')[1]),
    status: faker.random.arrayElement(valid_status_list),
  };
});

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', students);
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
