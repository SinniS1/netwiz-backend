'use strict';

/**
 * coding service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coding.coding');
