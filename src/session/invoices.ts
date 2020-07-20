import { AxiosInstance } from "axios";
import { Invoice, Transport } from "../interfaces";
export interface FindParams {
    search?: string
    status?: string
}

export default (http: AxiosInstance) => ({
    async find(params?: FindParams): Promise<Invoice[]> {
        const res = await http.get<Invoice[]>("/api/v1/invoices", { params })
        return res.data
    },
    async get(id: string): Promise<Invoice> {
        const res = await http.get<Invoice>("/api/v1/invoices/" + id)
        return res.data
    },
    async setTransport(id: string, transport: Transport): Promise<Invoice> {
        const res = await http.patch<Invoice>(`/api/v1/invoices/${id}/transport`, transport)
        return res.data;
    }
})