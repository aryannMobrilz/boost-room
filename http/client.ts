import { NextPageContext } from 'next';
import axios, { AxiosInstance } from 'axios';
import cookies from 'next-cookies';

let apiClient: AxiosInstance;

export const baseURL = process.env.NEXT_PUBLIC_API_HOST;

export const createApiClient = (): AxiosInstance =>
  axios.create({
    baseURL,
    withCredentials: true,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken'
  });

export function getApiClient(ctx: NextPageContext | undefined): AxiosInstance {
  if (ctx && ctx.req) {
    // eslint-disable-next-line no-shadow,@typescript-eslint/no-shadow
    const apiClient = createApiClient();
    apiClient.interceptors.request.use(
      (request) => {
        request.headers.Cookie = ctx.req?.headers.cookie;
        const csrfCookie = cookies(ctx).csrftoken;
        if (csrfCookie) {
          request.headers['X-CSRFToken'] = csrfCookie;
        }
        return request;
      },
      (error) => {
        log(error);
        throw error;
      }
    );
    apiClient.interceptors.response.use(
      (response) => {
        if (response.headers['Set-Cookie']) {
          ctx.res?.setHeader('Set-Cookie', response.headers['Set-Cookie']);
        }
        return response;
      },
      (error) => {
        log(`HTTP Failed: ${error.request.method} ${error.request.path}`);
        if (error.response) {
          log(error.response.data);
        } else {
          log(error);
        }
        throw error;
      }
    );
    return apiClient;
  }
  if (!apiClient) {
    apiClient = createApiClient();
  }
  return apiClient;
}

function log(message: string) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}
