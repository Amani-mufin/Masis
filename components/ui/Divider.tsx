interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="relative w-full text-center">
      <div className="absolute w-[157px] h-px bg-[#E6E6E6] left-0 top-2/4" />
      <span className="text-[#989898] text-[15px] bg-white relative px-[15px]">
        {text}
      </span>
      <div className="absolute w-[157px] h-px bg-[#E6E6E6] right-0 top-2/4" />
    </div>
  );
};

export default Divider;