import { FIREBASE_URL } from "../../helpers/api_urls";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        await fetch(FIREBASE_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response = await fetch(FIREBASE_URL)
        const meetups = await response.json();
        res.status(201).json({message: 'inserted', meetups})
    }
}

export default handler;