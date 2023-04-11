import Title from "../components/elements/Title";
import Layout from "../components/layout/Layout";

const SignUp = () => {
  return (
    <Layout>
      <Title text="회원가입" />

      <div className="col-2 grid gap-2">
        <input
          data-testid="email-input"
          className="h-[2rem] w-[15rem] p-2"
          placeholder="email"
        />
        <p className="textVaild">이메일 형식으로 작성해주세요.('@'포함)</p>
        <input
          data-testid="password-input"
          className="h-[2rem] w-[15rem] p-2"
          placeholder="password"
        />
        <p className="textVaild">비밀번호는 8자 이상으로 작성해주세요.</p>
      </div>
      <button
        data-testid="signup-button"
        className="mt-[1.5rem] h-[2rem] w-[15rem] bg-slate-400 text-gray-100"
      >
        회원가입
      </button>
      <button className="mt-2 h-[2rem] w-[15rem] bg-slate-200">돌아가기</button>
    </Layout>
  );
};

export default SignUp;
