'use strict';

/**
 * hacking controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hacking.hacking');
