import axios from "axios";
import auth from "./public/auth";
import items from "./public/items";
import session from "./session";
import guests from "./public/guests";
import { Config, Root, Auth } from "./interfaces";
import settings from "./public/settings";
import invoices from "./public/invoices";
import cities from "./public/cities";
import provinces from "./public/provinces";

export default function store(config: Config) {
  const root: Root = {
    http: axios.create({ baseURL: config.baseUrl }),
    config,
  };

  return {
    items: items(root.http),
    guests: guests(root.http),
    settings: settings(root.http),
    invoices: invoices(root.http),
    cities: cities(root.http),
    provinces: provinces(root.http),
    session: (auth: Auth) => session({ auth, config }),
    ...auth(root),
  };
}
