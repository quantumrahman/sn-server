import 'dotenv/config';

const configure = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
    database_uri: process.env.DATABASE_URI,
};

const config = Object.freeze(configure);

export default config;
