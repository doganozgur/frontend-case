const companies = require("./companies.json");
const items = require("./items.json");

module.exports = () => {
  return {
    companies,
    items,
  };
};
