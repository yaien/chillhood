import { AxiosInstance } from "axios";
import { CloudinarySettings, EpaycoSettings } from "../interfaces";

export default (http: AxiosInstance) => ({
  async cloudinary() {
    const res = await http.get<CloudinarySettings>("/api/v1/public/config/cloudinary");
    return res.data;
  },
  async epayco() {
    const res = await http.get<EpaycoSettings>("/api/v1/public/config/epayco");
    return res.data;
  }
});
