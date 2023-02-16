'use strict';

/**
 * hacking router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hacking.hacking');
