'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    /**
   * Retrieve records.
   *
   * @return {Array}
   */


  async find(ctx) {
    let entities;
    const options = ["category", "cover", "gallery", "prouct_reviews", "prouct_reviews.user", "prouct_reviews.user.profile"]
    if (ctx.query._q) {
      entities = await strapi.services.products.search(ctx.query, options);
    } else {
      entities = await strapi.services.products.find(ctx.query, options);
    }

    return entities.map( entity => {
        const result = sanitizeEntity(entity, { model: strapi.models.products })
        result["prouct_reviews"] = result["prouct_reviews"].map( res => ({ 
            ...res, 
            user: {
                id: res.user.id,
                name: `${res.user.profile.first} ${res.user.profile.last}`,
            }  
        }) )
        return result
    })
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    const options = ["category", "cover", "gallery", "prouct_reviews", "prouct_reviews.user", "prouct_reviews.user.profile"]
    const entity = await strapi.services.products.findOne({ id }, options);
    const result = sanitizeEntity(entity, { model: strapi.models.products });
    result["prouct_reviews"] = result["prouct_reviews"].map( res => ({ 
        ...res, 
        user: {
            id: res.user.id,
            name: `${res.user.profile.first} ${res.user.profile.last}`,
        }  
    }) )

    return result
  },
};
