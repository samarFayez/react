const initOrganizations = require('./organizations');
const initOrganizationTypes = require('./organizationTypes');

module.exports = {
  initDb: () =>
    initOrganizationTypes()
      .then(() => initOrganizations())
      .then(() => {})
      .catch(err => console.log(err))
};
