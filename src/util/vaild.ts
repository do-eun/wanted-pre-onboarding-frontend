/**이메일 유효성 검사("@포함" 유무) */
export const emailVaild = (email: string) => {
  return email.includes("@");
};

/**비밀번호 유효성 검사(8자리 이상) */
export const passwordVaild = (password: string) => {
  return password.length >= 8;
};
