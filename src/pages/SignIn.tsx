import Sign from "../components/elements/Sign";
import { useTokenCheck } from "../hooks/useTokenCheck";

const SignIn = () => {
  const isLogin = useTokenCheck();
  if (isLogin) return null;

  return <Sign nowPage="로그인" />;
};

export default SignIn;
