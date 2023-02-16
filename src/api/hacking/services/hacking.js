'use strict';

/**
 * hacking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hacking.hacking');
