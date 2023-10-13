import {
  getOperatingSystem,
  getOperatingSystemVersions,
} from '@/utils/api/operatingSystem.api';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.resetMocks();
});

it('Return operating system', async () => {
  fetchMock.mockResponses([
    JSON.stringify({
      id: 1,
      name: 'Ubuntu',
    }),
    { status: 200 },
  ]);

  const os = await getOperatingSystem();

  expect(os).toEqual({
    id: 1,
    name: 'Ubuntu',
  });
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('Return operating system versions', async () => {
  fetchMock.mockResponses([
    JSON.stringify({
      id: 1,
      versionNumber: '20.04',
      operatingSystemId: 1,
    }),
    { status: 200 },
  ]);

  const os = await getOperatingSystemVersions(1);

  expect(os).toEqual({
    id: 1,
    versionNumber: '20.04',
    operatingSystemId: 1,
  });
  expect(fetch).toHaveBeenCalledTimes(1);
});
