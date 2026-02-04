import axios from 'axios'
import { FirebaeAuth } from '../../firebase/firebase-config.js'
import { 
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged
} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();

// google id provider
// https://firebase.google.com/docs/auth/admin/verify-id-tokens
export default function SignUp() { 
	const handleLogin = async () => { 
		try { 
			const userGoogleCred = await signInWithPopup(FirebaeAuth, googleProvider);
			// JWT token grabbed from user logged in state
			const idToken = await userGoogleCred.user.getIdToken(); 
			console.log(idToken);
		
			// send token to the backend where it will verify the token
			const res = await axios.get('http://localhost:3000/api/auth/login', {
				headers: { 
					Authorization: `Bearer ${idToken}`,
				}
			})
		} catch (err) { console.error(err) }
	}

	const testRequest = async () => { 
		try { 
			const res = await axios.get('http://localhost:3000/api/test');
			console.log(res);
		} catch (err) { console.error(err); }
	}

	const styles =  { 
		display: 'flex',
		flexDirection: 'column',
	}
	
	return(
		<div style={styles}>
			return (
    <button
      onClick={handleLogin}
      style={{
        padding: "0.6rem 1rem",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#4285F4",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        alt="Google logo"
        style={{ width: "20px", height: "20px" }}
      />
      Sign in with Google
    </button>
  );
		</div>
	);
}
