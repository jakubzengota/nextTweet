export default async function handler(req, res) {
    if (req.method === 'POST') {
        
      res.status(200).json({ message: 'Logout successful' });
    } else {

      res.status(405).end();
    }
  }