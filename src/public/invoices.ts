import { AxiosInstance } from "axios";
import { Invoice } from "../interfaces";

export default (http: AxiosInstance) => ({
  async get(ref: string) {
    const url = `/api/v1/public/invoices/${ref}`;
    const res = await http.get<Invoice>(url);
    return res.data;
  },
  async check(epaycoRef: string) {
    const res = await http.get<Invoice>("/api/v1/public/epayco/response", {
      params: { ref_epayco: epaycoRef },
    });
    return res.data;
  },
});
