interface ILayout {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="main">
      <div className="flexCenter h-[25rem] w-[30rem] rounded-md bg-slate-100 shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Layout;
