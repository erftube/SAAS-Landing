interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}
const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      className={`px-6 py-3 rounded-full outline-none relative overflow border bg-violet-600 cursor-pointer hover:scale-102 transform transition duration-300 ${className}`}
      href={href}
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  );
};

export default BtnLink;
