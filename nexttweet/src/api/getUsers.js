const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function getUsers(client) {
    try {
        const result = await client.sql`SELECT * FROM Users`;
        return result; 
    } catch (error) {
        console.error('Error retrieving users:', error);
        throw error;
    }
}