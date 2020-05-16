import { AxiosInstance } from "axios";
import { Guest, CartItem, Cart } from "../interfaces";

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
    async add(guestId: string, item: CartItem): Promise<Cart> {
      let url = `/api/v1/public/guest/${guestId}/items`;
      let res = await http.post(url, item);
      return res.data;
    },
    async remove(guestId: string, itemId: string): Promise<Cart> {
      let url = `/api/vi/public/guest/${guestId}/items/${itemId}`;
      let res = await http.delete(url);
      return res.data;
    },
  },
});
