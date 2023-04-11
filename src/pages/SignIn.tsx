import Title from "../components/elements/Title";
import Layout from "../components/layout/Layout";

const SignIn = () => {
  return (
    <Layout>
      <Title text="로그인" />
      <div className="flex">
        <div className="col-2 grid gap-2">
          <input
            type="text"
            data-testid="email-input"
            placeholder="email"
            className="h-[2rem] w-[15rem] p-2"
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="password"
            className="h-[2rem] w-[15rem] p-2"
          />
        </div>
        <button
          data-testid="signin-button"
          className="ml-2 h-[4.5rem] w-[5rem] bg-slate-400 text-gray-100"
        >
          로그인
        </button>
      </div>
      <p className="textVaild mt-[1rem]">
        이메일에 @를 포함해주세요. 비밀번호는 8자 시앙
      </p>
    </Layout>
  );
};

export default SignIn;
