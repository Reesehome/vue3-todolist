import axios from '@/assets/intercept';
export const getJoke = () => {
    return axios.get('/getSingleJoke?sid=28654780')
}