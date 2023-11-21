'use strict';

/**
 * send service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::send.send');
