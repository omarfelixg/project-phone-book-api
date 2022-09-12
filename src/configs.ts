import dotenv from 'dotenv'
dotenv.config()

const config = () => {
    return {
        server: {
            url: process.env.API_URL || 'localhost',
            port: process.env.API_PORT || 3010
        },
        db: {
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || '5432',
            username: process.env.DB_USERNAME || 'postgres',
            password: process.env.DB_PASSWORD || '12345',
            database: process.env.DB_NAME || 'postgres',
        }
    }
}

export { config }