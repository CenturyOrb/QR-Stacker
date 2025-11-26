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
			const idToken = await userGoogleCred.user.getIdToken();
		
			// send token to the backend where it will verify the token
			const res = await axios.get('http://localhost:3000/api/auth/login', {
				headers: { 
					Authorization: `Bearer ${idToken}`,
				}
			})
		} catch (err) { console.error(err) }
	}

	
	return(
		<>
			<button onClick={handleLogin}>google</button>
		</>
	);
}

