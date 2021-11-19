'use strict';

const { sanitizeEntity } = require("strapi-utils")

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
   async me(ctx) {
       const _user = strapi.query('user', 'users-permissions').findOne({ id: ctx.state.user.id })
       const model = strapi.plugins["users-permissions"].models.user
       console.log( strapi.plugins["users-permissions"].services );

       const user = sanitizeEntity( _user, { model } )
       console.log( user );
       return user
   }
};
