import {firebase} from '../firebase/firebase';

export const startLogin = (email='xyz@abc.com', password='xyz') => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}