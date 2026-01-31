interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a
        className="duration-300 font-medium ease-linear hover:text-primary p-y-3"
        href={href}
      >
        {text}
      </a>
    </li>
  );
};

export default NavItem;
