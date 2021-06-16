import getConfig from 'next/config';
import axios, { AxiosInstance } from 'axios';
import axiosBetterStacktrace from 'axios-better-stacktrace';
import { NextPageContext } from 'next';

const { publicRuntimeConfig } = getConfig();

let apiClient: AxiosInstance;

function createApiClient() {
  const client = axios.create({
    baseURL: publicRuntimeConfig.backendApiHost
  });

  axiosBetterStacktrace(client);

  return client;
}

export function getApiClient(ctx?: NextPageContext): AxiosInstance {
  if (ctx?.req) {
    apiClient = createApiClient();

    apiClient.interceptors.request.use(
      async (config) => {
        // const token = await getCookie(PAYOUTS_TOKEN);

        config.headers = {
          // Authorization: `Bearer ${token}`,
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
