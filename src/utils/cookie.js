export function setCookie(name, value, days, options = {}) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 1 * 1 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  const { httpOnly = false, secure = false, sameSite = 'Lax' } = options;
  document.cookie =
    name +
    '=' +
    (value || '') +
    expires +
    '; path=/' +
    (httpOnly ? '; HttpOnly' : '') +
    (secure ? '; Secure' : '') +
    '; SameSite=' +
    sameSite;
}

export function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}
