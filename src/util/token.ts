/**토큰저장 */
export const setAccessToken = (accessToken: string) => {
  return localStorage.setItem("accessToken", accessToken);
};

/**토큰조회 */
export const getAccessToken = () => {
  const token = localStorage.getItem("accessToken");
  return token;
};

/**토큰삭제 */
export const deleteAccessToken = () => {
  localStorage.removeItem("accessToken");
};
