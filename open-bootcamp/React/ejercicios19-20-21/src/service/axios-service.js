import axios from 'axios'

export async function getUser() {

    try {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random`);
        return response;
    } catch (error) {
        console.error(error);
    }
}