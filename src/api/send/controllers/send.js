'use strict';

/**
 * send controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::send.send');
