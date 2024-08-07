const API_URL = import.meta.env.VITE_APP_TRAVEL_JOURNAL_API_URL;
if (!API_URL) throw new Error('API URL is required, are you missing a .env file?');
const baseURL = `${API_URL}/auth`;

export const me = async () => {
  const res = await fetch(`${baseURL}/me`, { credentials: 'include' });
  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error('An error occurred while trying to fetch user data');
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  return data;
};

export const signin = async formData => {
  const res = await fetch(`${baseURL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
    credentials: 'include'
  });
  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error('An error occurred while trying to sign in');
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  return data;
};

export const signOut = async () => {
  const res = await fetch(`${baseURL}/signout`, { method: 'DELETE', credentials: 'include' });
  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error('An error occurred while trying to sign out');
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  return data;
};

export const signup = async formData => {
  const res = await fetch(`${baseURL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
    credentials: 'include'
  });
  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error('An error occurred while trying to sign up');
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  return data;
};
