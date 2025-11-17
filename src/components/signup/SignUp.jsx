import axios from 'axios'
import { FirebaeAuth } from '../../firebase/firebase-config.js'
import { 
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged	
} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();

// google id provider
export default function SignUp() { 
	const handleLogin = async () => { 
		try { 
			const userGoogleCred = await signInWithPopup(FirebaeAuth, googleProvider);
			const idToken = await userGoogleCred.user.getIdToken();
			console.log(idToken);
		
			// send token to the backend where it will verify the token
			await axios.get('http://localhost:3000/api/auth/login', {
				headers: { 
					authorization: `Bearer ${idToken}`,
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

