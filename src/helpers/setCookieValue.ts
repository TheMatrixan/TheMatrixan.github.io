const setCookieValue = (key: string, value: string): string =>
  (document.cookie = `${key}=${value};max-age=31536000;path=/`);

export default setCookieValue;
