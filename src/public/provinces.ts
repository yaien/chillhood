import { AxiosInstance } from "axios";
import { Province } from "../interfaces";

export interface FindProvinceOptions {
    name?: string
    skip?: number 
    limit?: number
}

export default (http: AxiosInstance) => ({
    async find(options: FindProvinceOptions): Promise<Province[]> {
        const res = await http.get("/api/v1/public/provinces", { params: options })
        return res.data
    }
})