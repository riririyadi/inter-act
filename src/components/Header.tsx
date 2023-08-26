export const Header = () => {
  return (
    <header className="flex items-center justify-end h-[60px] bg-[#151A2E] border-b-[1px] border-[#4B5259] sticky p-5 pr-10">
      <div className="h-[34px] w-[34px] bg-gray-300 rounded-full mr-2 border-[1px] border-white relative">
        <div className="absolute h-[6px] w-[6px] bg-[#5CCC5A] top-1 right-0 rounded-full"></div>
      </div>
      <div className="text-white text-[14px]">Hello, User!</div>
    </header>
  );
};
