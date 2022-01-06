'use strict';

/**
 * request-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request-type.request-type');
