import classNames from 'classnames';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

interface MenuLinkProps extends Omit<NavLinkProps, 'children'> {
  label: string;
}

const MenuLink = (props: MenuLinkProps) => {
  const { pathname } = useLocation();
  const { label, className, ...otherProps } = props;

  const cn = classNames(
    'text-primary30',
    'px-3',
    {
      '!text-primary50': pathname === otherProps.to,
    },
    className,
  );

  return (
    <NavLink className={cn} {...otherProps}>
      {label}
    </NavLink>
  );
};

export default MenuLink;
