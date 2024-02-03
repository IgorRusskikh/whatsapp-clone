const ChatsHeader = ({ children }: { children?: any }) => {
  return (
    <div className="flex justify-between items-center bg-[#202c33] px-4 py-3">
      {children}
    </div>
  );
};

export default ChatsHeader;
