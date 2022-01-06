'use strict';

/**
 * review-status service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review-status.review-status');
