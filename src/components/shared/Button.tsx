interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border bg-violet-600 hover:bg-violet-900 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
