import { getFormatDateRelative } from '@/utils/helpers';

describe('formatDateRelative', () => {
  it('returns "just now" for current time', () => {
    const now = new Date().toISOString();
    expect(getFormatDateRelative(now)).toBe('just now');
  });

  it('returns "1 minute ago" for 1 minute ago', () => {
    const now = new Date();
    const oneMinuteAgo = new Date(now.getTime() - 60 * 1000).toISOString();
    expect(getFormatDateRelative(oneMinuteAgo)).toBe('1 minute ago');
  });

  it('returns "2 hours ago" for 2 hours ago', () => {
    const now = new Date();
    const twoHoursAgo = new Date(
      now.getTime() - 2 * 60 * 60 * 1000
    ).toISOString();
    expect(getFormatDateRelative(twoHoursAgo)).toBe('2 hours ago');
  });

  it('returns "1 year ago" for 1 year ago', () => {
    const now = new Date();
    const oneYearAgo = new Date(
      now.getTime() - 365 * 24 * 60 * 60 * 1000
    ).toISOString();
    expect(getFormatDateRelative(oneYearAgo)).toBe('1 year ago');
  });
});
