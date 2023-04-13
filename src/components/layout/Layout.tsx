interface IChildren {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: IChildren) => {
  return (
    <div className="main">
      <div className="flexCenter h-[25rem] w-[30rem] rounded-md bg-slate-100 p-2 shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Layout;
