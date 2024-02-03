const Message = ({ children, date }: { children: any; date: string }) => {
  return (
    <div className="flex items-end bg-[#005c4b] text-[#e9edef] rounded-lg max-w-[70%]">
      <div
        className={
          "px-5 py-2 relative " +
          (children.length > 10
            ? "pb-4 bottom-0"
            : children.length < 10
            ? "pr-20 bottom-0"
            : "pr-20 bottom-0")
        }
      >
        {children}
        <div className="absolute w-fit h-fit text-xs text-[#99beb7] mr-2 right-1 bottom-1">
          {date}
        </div>
      </div>
    </div>
  );
};

export default Message;
