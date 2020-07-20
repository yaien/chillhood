import { AxiosInstance } from "axios";
import session from "./session";

export interface Root {
  config: Config;
  http: AxiosInstance;
}

export interface Config {
  baseUrl: string;
  key: string;
}

export interface Auth {
  access_token: string;
  token_type?: string;
  expires_in?: number;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin";
}

export interface Picture {
  reference: string;
}

export interface Item {
  id: string;
  name: string;
  price: number;
  slug: string;
  active: boolean;
  sizes: Size[];
  tags?: string[];
  pictures?: Picture[];
  description: string;
  createdAt: number;
}

export interface Size {
  label: string;
  existence: number;
}

export interface CloudinarySettings {
  cloud: string;
  preset: string;
}

export interface EpaycoSettings {
  key: string;
  test: boolean;
  response: string;
  confirmation: string;
}

export interface Guest {
  id: string;
  cart: Cart | null;
}

export interface Cart {
  shipping: number;
  subtotal: number;
  total: number;
  items: CartItem[];
}

export interface CartItemBase {
  id: string;
  quantity: number;
  size: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  picture: Picture;
}

export interface Transport {
  provider: string
  guide: string
}

export enum ShippingStatus {
  Preparing = "preparing",
  Sended = "sended"
}

export interface ShippingBase {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  status: ShippingStatus
}

export interface ShippingPrepared extends ShippingBase {
  status: ShippingStatus.Preparing
}

export interface ShippingSended extends ShippingBase {
  status: ShippingStatus.Sended
  transport: Transport
}


export type Shipping = ShippingBase | ShippingSended | ShippingPrepared

export enum InvoiceStatus {
  Created = "created",
  Accepted = "accepted",
  Rejected = "rejected",
  Pending = "pending",
}

export interface Invoice {
  id: string;
  ref: string;
  cart: Cart;
  shipping: Shipping;
  status: InvoiceStatus;
  createdAt: number;
}

export type Session = ReturnType<typeof session>;
