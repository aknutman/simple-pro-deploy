'use strict';

/**
 * step-progress service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::step-progress.step-progress');
