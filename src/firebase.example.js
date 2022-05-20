import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'YOUR FIREBASE apiKey',
	authDomain: 'YOUR FIREBASE authDomain',
	projectId: 'YOUR FIREBASE projectId',
	storageBucket: 'YOUR FIREBASE storageBucket',
	messagingSenderId: 'YOUR FIREBASE messagingSenderId',
	appId: 'YOUR FIREBASE appId'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
