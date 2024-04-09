import axios from "axios";

const baseUrl =  'http://localhost:3000';
const apiClient = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
})

export default {
    getTeams () {
        return apiClient.get('/teams');
    },
    getSchedule () {
         return apiClient.get('/schedules');
    },
    setSechedule (payload) {
         return apiClient.post('/schedules', payload);
    },
    setGame (payload, id) {
         return apiClient.put('/schedules/' + id, payload);
    }
}