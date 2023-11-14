'use strict';

/**
 * marta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::marta.marta');
