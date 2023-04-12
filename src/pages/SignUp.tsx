import Sign from "../components/elements/Sign";
import { useTokenCheck } from "../hooks/useTokenCheck";

const SignUp = () => {
  const isLogin = useTokenCheck();
  if (isLogin) return null;

  return <Sign nowPage="회원가입" />;
};

export default SignUp;
