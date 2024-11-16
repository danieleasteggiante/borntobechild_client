export function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length !== 2)
    return null;
  const cookieRes = parts.pop()?.split(';').shift();
  return cookieRes ? JSON.parse(cookieRes) : null;
}

export function setCookie(name: string, data: any) {
  document.cookie = `${name}=${JSON.stringify(data)}; max-age=3600; path=/`;
}
