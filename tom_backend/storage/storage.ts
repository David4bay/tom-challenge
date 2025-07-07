require("dotenv").config()
const { Sequelize } = require("sequelize")

const POSTGRES_KEY = encodeURIComponent(process.env.POSTGRES_PASS!)

const POSTGRES_PORT = process.env.POSTGRES_PORT

const databaseURL = `postgresql://postgres:${POSTGRES_KEY}@db.bhzeahlukrfrgxljmgwk.supabase.co:${POSTGRES_PORT}/postgres`

const sequelize = new Sequelize(databaseURL)

const POSTGRES_DB = async () => {
    try {
        await sequelize.authenticate()
        console.log("connected to POSTGRES DB!")
    } catch(err) {
        console.log("failed to connect to POSTGRES DB!")
        return process.exit(1)
    }
    return null
}

export default {
    POSTGRES_DB, sequelize
}

