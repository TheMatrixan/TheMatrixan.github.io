const getCookieValue = <T = string>(key: string): T | null => {
  if (typeof document === 'undefined') return null;

  const b = document.cookie.match(`(^|[^;]+)\\s*${key}\\s*=\\s*([^;]+)`);
  const value = b?.pop() as T | undefined;

  return value || null;
};

export default getCookieValue;
