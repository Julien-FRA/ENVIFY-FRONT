const useFormatDateRelative = (dateString: string): string => {
  const date = new Date(dateString);
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

export default useFormatDateRelative;
