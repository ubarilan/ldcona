import Ldcona from './ldcona';

// .env variables
const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASS,
    DATABASE_NAME,
} = process.env;

const app = new Ldcona(
    DATABASE_HOST,
    Number(DATABASE_PORT),
    DATABASE_USER,
    DATABASE_PASS,
    DATABASE_NAME,
    Number(process.env.PORT)
);
