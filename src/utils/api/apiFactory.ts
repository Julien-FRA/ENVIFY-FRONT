import { NextAuthOptions, getServerSession } from 'next-auth';
import { getErrorMessage, isJSONString } from '../helpers';
import { getSession } from 'next-auth/react';
import { authOptions } from '../authOptions';

const responseStatusHandler = (status: number) => {
  if (status === 401) {
    return Promise.reject(new Error('Unauthorized'));
  }
};

const responseErrorHandler = (error: unknown) => {
  return Promise.reject(error);
};

type ServerType =
  | typeof getServerSession<NextAuthOptions>
  | typeof getSession
  | null;

const checkSessionType = async (serverType: ServerType) => {
  return serverType
    ? await serverType(
        typeof serverType === typeof getSession ? authOptions : undefined
      )
    : null;
};

const apiFactory = (baseUrl: string, serverType: ServerType) => ({
  get: async <TOutput>(
    path: string,
    options: RequestInit = {}
  ): Promise<TOutput> => {
    try {
      const session = await checkSessionType(serverType);

      const response = await fetch(`${baseUrl}${path}`, {
        ...options,
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          'ENVIFY-API-Key': `${process.env.NEXT_PUBLIC_ENVIFY_API_KEY}`,
          ...(session ? { Authorization: `Bearer ${session.jwtToken}` } : {}),
        },
      });

      responseStatusHandler(response.status);

      if (!response.ok) {
        const res = await response.text();
        const error = isJSONString(res) ? JSON.parse(res) : res;
        throw error;
      }

      return response.json() as Promise<TOutput>;
    } catch (error) {
      return responseErrorHandler(getErrorMessage(error));
    }
  },

  post: async <TInput, TOutput>(
    path: string,
    data: TInput,
    options: RequestInit = {}
  ): Promise<TOutput> => {
    try {
      const session = await checkSessionType(serverType);

      const response = await fetch(`${baseUrl}${path}`, {
        ...options,
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          'ENVIFY-API-Key': `${process.env.NEXT_PUBLIC_ENVIFY_API_KEY}`,
          ...(session ? { Authorization: `Bearer ${session.jwtToken}` } : {}),
        },
      });

      responseStatusHandler(response.status);

      return response.json() as Promise<TOutput>;
    } catch (error) {
      return responseErrorHandler(error);
    }
  },
  delete: async <TOutput>(
    path: string,
    options: RequestInit = {}
  ): Promise<TOutput> => {
    try {
      const session = await checkSessionType(serverType);

      const response = await fetch(`${baseUrl}${path}`, {
        ...options,
        method: 'DELETE',
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          'ENVIFY-API-Key': `${process.env.NEXT_PUBLIC_ENVIFY_API_KEY}`,
          Authorization: `Bearer ${session?.jwtToken}`,
        },
      });

      responseStatusHandler(response.status);

      return response.text() as Promise<TOutput>;
    } catch (error) {
      return responseErrorHandler(error);
    }
  },
});

export const apiClient = apiFactory(
  `${process.env.NEXT_PUBLIC_API_URL}`,
  getSession
);
export const apiServer = apiFactory(
  `${process.env.NEXT_PUBLIC_API_URL}`,
  getServerSession
);

export const apiAuthClient = apiFactory(
  `${process.env.NEXT_PUBLIC_AUTH_API_URL}`,
  null
);
