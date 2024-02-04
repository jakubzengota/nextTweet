import FacebookIcon from '../assets/icons/facebook.png'
import GoogleIcon from '../assets/icons/google.png'
import Image from 'next/image';

function LoginPage() {
    const handleSubmit = async (event) => {
      event.preventDefault(); // Zapobiegaj domyślnemu przesyłaniu formularza
  
      const formData = new FormData(event.target);
      const username = formData.get('username');
      const password = formData.get('password');
  
      // Wyślij żądanie do endpointu API
      const response = await fetch('/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Zalogowano pomyślnie: ' + data.message);
        // Możesz przekierować użytkownika lub wykonać inną akcję
      } else {
        alert('Błąd logowania: ' + data.message);
      }
    };
  
    return (
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        <form>
            <h3>Login Here</h3>
    
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" />
    
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            
    
            <button type="button" onClick={handleSubmit()} >Log In</button>
            <div className="social">
              <div className="go"><Image src={GoogleIcon} alt="Facebook" width={40} height={40} /> Google</div>
              <div className="fb"><Image src={FacebookIcon} alt="Facebook" width={40} height={40} /> Facebook</div>
            </div>
        </form>
    </div>
    );
  }
  
  export default LoginPage;