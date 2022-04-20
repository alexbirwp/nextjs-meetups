async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        await fetch('https://next-project-b717b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response = await fetch('https://next-project-b717b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
        const meetups = await response.json();
        res.status(201).json({message: 'inserted', meetups})
    }
}

export default handler;