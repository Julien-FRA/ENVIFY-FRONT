// import { userAuthenticate, userRegister } from '../../utils/api/user.api';
// import fetchMock from 'jest-fetch-mock';

// beforeEach(() => {
//   fetchMock.resetMocks();
// });

// it('Return user auth', async () => {
//   fetchMock.mockResponses([
//     JSON.stringify({
//       email: 'envifyadmin@gmail.com',
//       profil: null,
//     }),
//     { status: 200 },
//   ]);

//   const fakeUser = {
//     email: 'envifyadmin@gmail.com',
//     password: 'test1',
//   };

//   const userAut = await userAuthenticate(fakeUser);

//   expect(userAut).toEqual({
//     email: fakeUser.email,
//     profil: null,
//   });
//   expect(fetch).toHaveBeenCalledTimes(1);
// });

// it('Return user register', async () => {
//   fetchMock.mockResponses([
//     JSON.stringify({
//       message: 'Utilisateur crée avec succès',
//       code: 200,
//     }),
//     { status: 200 },
//   ]);

//   const fakeUser = {
//     username: 'username',
//     email: 'testiijwtj00@gmail.com',
//     password: 'test1',
//   };

//   const user = await userRegister(fakeUser);

//   expect(user).toEqual({
//     message: 'Utilisateur crée avec succès',
//     code: 200,
//   });
//   expect(fetch).toHaveBeenCalledTimes(1);
// });
