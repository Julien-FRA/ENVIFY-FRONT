// import { getPackages } from '@/utils/api/package.api';
// import fetchMock from 'jest-fetch-mock';

// beforeEach(() => {
//   fetchMock.resetMocks();
// });

// it('Return packages', async () => {
//   fetchMock.mockResponses([
//     JSON.stringify({
//       id: 5,
//       name: 'MariaDB',
//     }),
//     { status: 200 },
//   ]);

//   const packages = await getPackages();

//   expect(packages).toEqual({
//     id: 5,
//     name: 'MariaDB',
//   });
//   expect(fetch).toHaveBeenCalledTimes(1);
// });

// it('Return packages versions', async () => {
//   fetchMock.mockResponses([
//     JSON.stringify({
//       id: 5,
//       versionNumber: '11.1',
//       url: 'https://mariadb.org/mariadb/all-releases/',
//       versionStatusId: 1,
//       packageId: 5,
//     }),
//     { status: 200 },
//   ]);

//   expect(fetch).toHaveBeenCalledTimes(1);
// });
