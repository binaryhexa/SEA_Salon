import { AppBar, Container, Toolbar } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const menus = [
  { name: 'Home', path: 'home' },
  { name: 'Services', path: 'services' },
  { name: 'Contact', path: 'contact' },
];

const HeaderNavigation = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: '#F7F7F7',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
      className="p-4 backdrop-blur-lg"
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          className="flex flex-wrap items-center justify-between text-lg text-primary30 md:text-xl"
        >
          <div className="flex items-center font-bold">
            <ScrollLink to="home" smooth={true} duration={500}>
              SEA Salon
            </ScrollLink>
          </div>
          <div className="flex items-center gap-4 font-medium md:gap-10">
            {menus.map((menu, index) => (
              <ScrollLink
                key={index}
                to={menu.path}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                {menu.name}
              </ScrollLink>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderNavigation;
