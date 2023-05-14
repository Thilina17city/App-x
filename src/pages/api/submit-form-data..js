// pages/api/submit-form-data.js
const db = require("../../lib/db");
const { v4: uuidv4 } = require('uuid');

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { firstName, lastName, idNumber, age, address, crid, Icb } = req.body;

        // Generate UUID for the entry
        const entryId = uuidv4();

        const query = `INSERT INTO form_data (id, first_name, last_name, id_number, age, address, crid, icb)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        // INSERT INTO form_data (id, first_name, last_name, id_number, age, address, crid, icb, qr_hash)
        // VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);


        db.query(query, [entryId, firstName, lastName, idNumber, age, address, crid, Icb], (err, result) => {
            if (err) throw err;
            console.log(`Inserted new data with ID: ${entryId}`);
        });

        return res.status(200).json({ message: "Form data submitted successfully." });
    }

    return res.status(400).json({ message: "Invalid request method." });
}
