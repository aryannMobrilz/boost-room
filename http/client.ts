import getConfig from 'next/config';
import axios, { AxiosInstance } from 'axios';
import axiosBetterStacktrace from 'axios-better-stacktrace';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/client';

// when target is servless turn off config
// const { publicRuntimeConfig } = getConfig();

let apiClient: AxiosInstance;

function createApiClient() {
  const client = axios.create({
    baseURL: process.env.BACKEND_API_HOST
  });

  axiosBetterStacktrace(client);

  return client;
}

export function getApiClient(ctx?: NextPageContext): AxiosInstance {
  if (ctx?.req) {
    apiClient = createApiClient();

    apiClient.interceptors.request.use(
      async (config) => {
        const session = await getSession({ req: ctx.req });

        config.headers = {
          Authorization: `Bearer ${session?.accessToken}`,
          // Accept: '*/*',
          Accept: 'application/json',
          'Content-Type': 'application/json'
        };

        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  } else {
    apiClient = createApiClient();
  }

  return apiClient;
}
