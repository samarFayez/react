const { ORGANIZATIONS_TABLE_NAME,ORGANIZATIONTYPES_TABLE_NAME } = require("../tableNames");

const organizations = () => require("../knex")(ORGANIZATIONS_TABLE_NAME);

const getAllOrganizations = () =>
    organizations()
    .join('organizationTypes','organizationTypes.id','=','organizations.organizationTypes_id')
    .select('organizationTypes.name','organizations.*')

module.exports = {
  getAllOrganizations
};
