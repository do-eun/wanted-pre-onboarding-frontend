/**토큰저장 */
export const setAccessToken = (accessToken: string) => {
  return localStorage.setItem("accessToken", accessToken);
};

/**토큰조회 */
export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

/**토큰삭제 */
export const deleteAccessToken = () => {
  localStorage.removeItem("accessToken");
};
