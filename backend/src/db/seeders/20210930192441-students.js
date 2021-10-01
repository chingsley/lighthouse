const { v4: uuidv4 } = require("uuid");
const faker = require("faker");

const programs = [
  "Software Engineering",
  "Data Science",
  "Engineering Manager",
  "Devops Engineering",
  "Data Analyst",
];

const countryFlags = {
  canada: "https://tappage.theaccessplatform.com/static/media/ca.5916ba94.svg",
  belgium: "https://lipis.github.io/flag-icon-css/flags/4x3/be.svg",
  croatia: "https://lipis.github.io/flag-icon-css/flags/4x3/hr.svg",
  finland: "https://lipis.github.io/flag-icon-css/flags/4x3/fi.svg",
  france: "https://lipis.github.io/flag-icon-css/flags/4x3/fr.svg",
  germany: "https://lipis.github.io/flag-icon-css/flags/4x3/de.svg",
  greece: "https://lipis.github.io/flag-icon-css/flags/4x3/gr.svg",
  iceland: "https://lipis.github.io/flag-icon-css/flags/4x3/is.svg",
  ireland: "https://lipis.github.io/flag-icon-css/flags/4x3/ie.svg",
  italy: "https://lipis.github.io/flag-icon-css/flags/4x3/it.svg",
  malta: "https://lipis.github.io/flag-icon-css/flags/4x3/mt.svg",
  portugal: "https://lipis.github.io/flag-icon-css/flags/4x3/pt.svg",
  spain: "https://lipis.github.io/flag-icon-css/flags/4x3/es.svg",
  "united kingdom": "https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg",
  wales: "https://lipis.github.io/flag-icon-css/flags/4x3/gb-wls.svg",
  ukraine: "https://lipis.github.io/flag-icon-css/flags/4x3/ua.svg",
  sweden: "https://lipis.github.io/flag-icon-css/flags/4x3/se.svg",
  switzerland: "https://lipis.github.io/flag-icon-css/flags/4x3/ch.svg",
  netherlands: "https://lipis.github.io/flag-icon-css/flags/4x3/nl.svg",
};

const students = Array.from(Array(4)).map((_) => {
  const name = faker.name.findName();
  return {
    name,
    program: faker.random.arrayElement(programs),
    id: uuidv4(),
    country: faker.random.arrayElement(Object.keys(countryFlags)),
    status: "student",
  };
});

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Students", students);
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
