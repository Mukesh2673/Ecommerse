    import { initializeApp } from 'firebase/app';
    import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
    import firebaseConfig from './firebaseConfig';

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    export { auth, googleProvider, signInWithPopup };