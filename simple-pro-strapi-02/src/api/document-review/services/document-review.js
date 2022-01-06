'use strict';

/**
 * document-review service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::document-review.document-review');
