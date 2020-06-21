import { AxiosInstance } from "axios";
import { Guest, Cart, CartItemBase, Shipping, Invoice } from "../interfaces";

export default (http: AxiosInstance) => ({
  async get(id: string): Promise<Guest> {
    const res = await http.get("/api/v1/public/guests/" + id);
    return res.data;
  },

  async create(): Promise<Guest> {
    const res = await http.post("/api/v1/public/guests");
    return res.data;
  },

  items: {
    async add(guestId: string, item: CartItemBase): Promise<Cart> {
      let url = `/api/v1/public/guests/${guestId}/items`;
      let res = await http.post(url, item);
      return res.data;
    },
    async remove(guestId: string, itemId: string): Promise<Cart> {
      let url = `/api/v1/public/guests/${guestId}/items/${itemId}`;
      let res = await http.delete(url);
      return res.data;
    },
  },
  invoices: {
    async create(guestId: string, shipping: Shipping, items: CartItemBase[]) {
      const url = `/api/v1/public/guests/${guestId}/invoices`;
      const res = await http.post<Invoice>(url, { shipping, items });
      return res.data;
    },
  },
});
