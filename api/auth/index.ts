import { getApiClient } from '@/http/client';

import type { NextPageContext } from 'next';
import type { AxiosPromise } from 'axios';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse
} from '@/api/auth/types';

interface IAuthAPI {
  login: (data: LoginRequest) => AxiosPromise<LoginResponse>;
  register: (data: RegisterRequest) => AxiosPromise<RegisterResponse>;
}

function authAPI(ctx?: NextPageContext): IAuthAPI {
  return {
    register: (data: RegisterRequest): AxiosPromise<RegisterResponse> =>
      getApiClient(ctx).post('/create', data),
    login: (data: LoginRequest): AxiosPromise<LoginResponse> =>
      getApiClient(ctx).post('/auth/token', data)
  };
}

export default authAPI;
