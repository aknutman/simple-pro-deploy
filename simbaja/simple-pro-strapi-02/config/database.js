module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'simbaja_postgres_1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'simple-pro-strapi-02'),
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', 'alohomora'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});


/**
 * host: env('DATABASE_HOST', '193.168.0.157'),
 */
