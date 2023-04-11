export interface Ititle {
  text: string;
}

const Title = ({ text }: Ititle) => {
  return <div className="mb-[2rem] text-[2.5rem] font-bold">{text}</div>;
};

export default Title;
