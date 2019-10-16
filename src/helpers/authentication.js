import { 
    getItem,
    setItem,
    removeItem
} from './localStorage';

export const isAuthenticated = () => {
    const token = getItem('token');
    console.log('token', token)
    if (token) {
        return true;
    }
    return false;
}

export const storeToken = (pass) => {
    setItem('token', pass);
    return true;
}
export const storeUser = (user) => {
    setItem('user', user);
    return true;
}
export const getUser = () => {
    return getItem('user');
}


export const removeToken = () => {
    removeItem('token');
    return true;
}
