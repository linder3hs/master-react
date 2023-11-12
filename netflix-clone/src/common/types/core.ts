import { Provider } from "react-redux";
export type Variant =
  | "primary"
  | "default"
  | "secondary"
  | "danger"
  | "warning"
  | "success"
  | "info"
  | "light"
  | "transparent"
  | "dark";

export type TextVariant =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type Size = "small" | "medium" | "large";

export type ButtonVariant = "submit" | "reset" | "button";

export type Theme = "dark" | "light" | "transparent";

export interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface AppMetaData {
  provider: string;
  Provider: string[];
}

interface Identities {
  id: string;
  user_id: string;
  identity_data: any;
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
}

export interface UserSupabase {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone?: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: AppMetaData;
  user_metadata: object;
  identities: Identities[];
  created_at: string;
  updated_at: string;
}

export interface ProfileSupabase {
  id: number;
  name: string;
  language: string;
  avatar: string;
  is_child: boolean;
  user_id: string;
  created_at: string;
}
