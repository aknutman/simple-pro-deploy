'use strict';

/**
 * vendor-selection service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vendor-selection.vendor-selection');
