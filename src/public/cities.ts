import { AxiosInstance } from "axios";
import { City } from "../interfaces";

export interface FindCityOptions {
    name?: string
    province?: string    
    skip?: number 
    limit?: number
}

export default (http: AxiosInstance) => ({
    async find(options: FindCityOptions): Promise<City[]> {
        const res = await http.get("/api/v1/public/cities", { params: options })
        return res.data
    }
})