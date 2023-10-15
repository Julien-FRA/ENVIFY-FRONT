export const getArrayFirsts =
  <T>(limit: number) =>
  (arr: T[]): T[] => {
    if (!arr?.length) return [];
    return arr?.slice(0, limit) ?? [];
  };

export const getFormatDateRelative = (isoDateString: string): string => {
  const date = new Date(isoDateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const units = [
    { unit: 'year', plural: 'years', value: 12 * 30 * 24 * 60 * 60 * 1000 },
    { unit: 'month', plural: 'months', value: 30 * 24 * 60 * 60 * 1000 },
    { unit: 'day', plural: 'days', value: 24 * 60 * 60 * 1000 },
    { unit: 'hour', plural: 'hours', value: 60 * 60 * 1000 },
    { unit: 'minute', plural: 'minutes', value: 60 * 1000 },
    { unit: 'second', plural: 'seconds', value: 1000 },
  ];

  for (const { unit, plural, value } of units) {
    const count = Math.floor(diff / value);
    if (count > 0) {
      return `${count} ${count > 1 ? plural : unit} ago`;
    }
  }

  return 'just now';
};

export const isJSONString = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }
  return message;
};

export const TOKEN_MAX_AGE = 30 * 24 * 60 * 60; // 30 days
