const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string
}) => {
  return (
    <div onClick={onClick} className={className}>
      <div className="rounded-md text-sm sm:text-xl p-1 sm:p-8 m-1 sm:m-4 border-white border-solid border-[1px]">
        {children}
      </div>
    </div>
  );
};

export default Button;
