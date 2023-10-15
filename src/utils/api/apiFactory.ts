import { getAuthSession } from '../authOptions';
import { getErrorMessage, isJSONString } from '../helpers';

const responseStatusHandler = (status: number) => {
  if (status === 401) {
    return Promise.reject(new Error('Unauthorized'));
  }
};

const responseErrorHandler = (error: unknown) => {
  return Promise.reject(error);
};

type ServerType = 'client' | 'server';

const apiFactory = (baseUrl: string, type: ServerType = 'server') => ({
  get: async <TOutput>(
    path: string,
    options: RequestInit = {}
  ): Promise<TOutput> => {
    try {
      const session = await getAuthSession(type);
      const response = await fetch(`${baseUrl}${path}`, {
        ...options,
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          'ENVIFY-API-Key': `${process.env.NEXT_PUBLIC_ENVIFY_API_KEY}`,
          Authorization: `Bearer ${session?.jwtToken}`,
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
      const session = path === '/login' ? null : await getAuthSession(type);
      const response = await fetch(`${baseUrl}${path}`, {
        ...options,
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          'ENVIFY-API-Key': `${process.env.NEXT_PUBLIC_ENVIFY_API_KEY}`,
          Authorization: session ? `Bearer ${session.jwtToken}` : '',
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
      const session = await getAuthSession(type);
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
  'client'
);
export const apiServer = apiFactory(`${process.env.NEXT_PUBLIC_API_URL}`);

export const apiAuthClient = apiFactory(
  `${process.env.NEXT_PUBLIC_AUTH_API_URL}`
);
