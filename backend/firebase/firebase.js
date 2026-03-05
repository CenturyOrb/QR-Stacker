import admin from 'firebase-admin';
import serviceAccount from './tagify-f19c3-firebase-adminsdk-fbsvc-c497c950fd.json' with { type: "json"};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin
