export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Here, you can perform registration logic, such as adding the user to a database
      // and potentially hashing the password for security.
  
      // For example, you can add the user to a database (replace this with your database logic):
      // db.addUser(email, hashedPassword); 
  
      // Respond with a successful registration message
      res.status(200).json({ message: 'Registration successful' });
    } else {
      // Only handle POST requests for registration
      res.status(405).end();
    }
  }