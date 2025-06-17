export const ADMIN_EMAIL = 'nitin@n.com';
export const ADMIN_PASSWORD = 'admin123';

export const loginAdmin = (email, password) => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem('adminToken', 'true');
    return true;
  }
  return false;
};

export const logoutAdmin = () => localStorage.removeItem('adminToken');
export const isAdminLoggedIn = () => !!localStorage.getItem('adminToken');
