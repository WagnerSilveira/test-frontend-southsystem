import { toast } from 'react-toastify';

export const successNotification = (message) => {
    toast(message, { type: 'success' })
}
export const errorNotification = (message) => {
    toast(message, { type: 'error' })
}