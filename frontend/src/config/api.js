// Central place for the backend base URL.
export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

export const getStoredToken = () => {
  const token = sessionStorage.getItem("token") || localStorage.getItem("token");
  return token && token !== "undefined" && token !== "null" ? token : null;
};

export const saveAuthSession = ({ token, _id, role }) => {
  if (!token) return;

  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", String(_id));
  sessionStorage.setItem("role", role || "admin");

  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("role");
};

export const clearAuthSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("role");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("role");
};

export const getAuthHeaders = (extraHeaders = {}) => {
  const token = getStoredToken();
  if (!token) {
    return extraHeaders;
  }

  return {
    ...extraHeaders,
    Authorization: `Bearer ${token}`,
  };
};
