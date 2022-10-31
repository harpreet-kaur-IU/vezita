import cookies from 'js-cookie';

export const getVezitaUserFromCookie = () => {
  const cookie = cookies.get('vezitaAuth');
  if (!cookie) {
    var obj ={token:null}
    return obj;
  }
  return cookie;
};

export const setVezitaUserCookie = user => {
  cookies.set('vezitaAuth', user, {
    expires: 1 / 24
  });
};

export const removeVezitaUserCookie = () => cookies.remove('vezitaAuth');

export const getVezitaOnBoardFromCookie = () => {
  const cookie = cookies.get('vezitaOnboarding');
  if (!cookie) {
    return null;
  }
  return cookie;
};

export const setVezitaOnBoardCookie = token => {
  cookies.set('vezitaOnboarding', token);
};

export const removeVezitaOnBoardCookie = () => cookies.remove('vezitaOnboarding');