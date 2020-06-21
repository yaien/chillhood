import { AxiosInstance } from "axios";
import { Invoice } from "../interfaces";

export default (http: AxiosInstance) => ({
  async get(ref: string) {
    const url = `/api/v1/public/invoices/${ref}`;
    const res = await http.get<Invoice>(url);
    return res.data;
  },
});
