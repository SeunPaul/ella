const getAccessToken = () =>
  sessionStorage.getItem("accessToken") ||
  localStorage.getItem("accessToken") ||
  "";

export default getAccessToken;
