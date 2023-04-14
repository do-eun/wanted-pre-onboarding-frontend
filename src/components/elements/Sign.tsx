import { useNavigate } from "react-router-dom";
import { useSign } from "../../hooks/useSign";
import { emailVaild, passwordVaild } from "../../util/vaild";
import Layout from "../layout/Layout";
import Title from "./Title";
import cls from "../../util/cls";
import { INowPage } from "../../types/userType";
import { SignInApi, SignUpApi } from "../../apis/joinApi";

const Sign = ({ nowPage }: INowPage) => {
  const nav = useNavigate();

  const [email, emailChange, emailCheck] = useSign("", emailVaild);
  const [password, passwordChange, passwordCheck] = useSign("", passwordVaild);

  const handleSignUp = () => {
    SignUpApi({ email, password }).then((res) => {
      if (res) {
        alert("회원가입에 성공했습니다.");
        nav("/signIn");
      }
    });
  };

  const handleSignIn = () => {
    SignInApi({ email, password }).then((res) => {
      if (res) nav("/todo");
    });
  };

  const vaildBtn = emailCheck && passwordCheck;

  return (
    <Layout>
      <Title text={nowPage} />
      <div className="col-2 grid gap-2">
        <input
          type="email"
          data-testid="email-input"
          className="h-[2rem] w-[15rem] p-2"
          placeholder="email"
          value={email}
          onChange={emailChange}
        />
        {nowPage === "회원가입" && (
          <p className="text-[0.8rem]">
            이메일 형식으로 작성해주세요.('@'포함)
          </p>
        )}
        <input
          type="password"
          data-testid="password-input"
          className="h-[2rem] w-[15rem] p-2"
          placeholder="password"
          value={password}
          onChange={passwordChange}
        />
        {nowPage === "회원가입" && (
          <p className="text-[0.8rem]">비밀번호는 8자 이상으로 작성해주세요.</p>
        )}
      </div>
      <>
        {nowPage === "로그인" ? (
          <>
            <button
              onClick={handleSignIn}
              disabled={!vaildBtn}
              data-testid="signin-button"
              className={cls(
                "mt-[1.5rem] h-[2rem] w-[15rem]  text-gray-100",
                !vaildBtn ? "bg-slate-300" : "bg-slate-500"
              )}
            >
              로그인
            </button>
            <button
              onClick={() => nav("/signup")}
              className="mt-2 h-[2rem] w-[15rem] bg-slate-200"
            >
              회원가입 이동
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleSignUp}
              disabled={!vaildBtn}
              data-testid="signup-button"
              className={cls(
                "mt-[1.5rem] h-[2rem] w-[15rem]  text-gray-100",
                !vaildBtn ? "bg-slate-300" : "bg-slate-500"
              )}
            >
              회원가입
            </button>
            <button
              onClick={() => nav("/signIn")}
              className="mt-2 h-[2rem] w-[15rem] bg-slate-200"
            >
              돌아가기
            </button>
          </>
        )}
      </>
    </Layout>
  );
};

export default Sign;
