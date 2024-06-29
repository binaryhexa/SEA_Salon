import { Container } from '@mui/material';
import { footer } from '../../utils/content';

const Footer = () => {
  return (
    <div className="bg-primary30 absolute bottom-0 left-0 right-0 w-full px-10 py-6 text-white shadow-xl">
      <Container className="w-full">
        <div className="flex justify-between">
          {footer.map((footerItem, index) => (
            <div key={index}>
              <p>{footerItem.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
