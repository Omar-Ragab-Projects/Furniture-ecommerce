function Button({
  title,
  className,
}: {
  title: string | React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`bg-goldPrimary uppercase py-4 px-10 font-bold text-white text-xs tracking-wide cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}
export default Button;
