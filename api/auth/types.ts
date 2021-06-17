export type RegisterRequest = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
  username: string;
};

export type LoginRequest = {
  grant_type: string;
  client_id: string | undefined;
  client_secret: string | undefined;
  username: string;
  password: string;
};

export type RegisterResponse = {
  success: string;
};

export type LoginResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
};
