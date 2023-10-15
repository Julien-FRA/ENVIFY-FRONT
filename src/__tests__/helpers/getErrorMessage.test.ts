import { getErrorMessage } from '@/utils/helpers';

describe('getErrorMessage', () => {
  it('returns the error message if error is an instance of Error', () => {
    const error = new Error('Test error');
    const result = getErrorMessage(error);
    expect(result).toBe('Test error');
  });

  it('returns the error message if error is an object with a "message" property', () => {
    const error = { message: 'Test error' };
    const result = getErrorMessage(error);
    expect(result).toBe('Test error');
  });

  it('returns the error message if error is a string', () => {
    const error = 'Test error';
    const result = getErrorMessage(error);
    expect(result).toBe('Test error');
  });

  it('returns "Something went wrong" if error is undefined', () => {
    const error = undefined;
    const result = getErrorMessage(error);
    expect(result).toBe('Something went wrong');
  });

  it('returns "Something went wrong" if error is null', () => {
    const error = null;
    const result = getErrorMessage(error);
    expect(result).toBe('Something went wrong');
  });

  it('returns "Something went wrong" if error is not an instance of Error, an object with a "message" property, or a string', () => {
    const error = 123;
    const result = getErrorMessage(error);
    expect(result).toBe('Something went wrong');
  });
});
