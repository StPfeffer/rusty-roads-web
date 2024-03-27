import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api"
})

export class CollaboratorService {

    get() {
        return axiosInstance.get("/v1/colaboradores")
    }

}