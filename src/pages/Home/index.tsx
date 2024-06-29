import Services from './sections/Services';
import ContactDetails from './sections/Contact';
import CustomerReviews from './components/CustomerReviews';

const Index = () => {
  return (
    <>
      <div className="mt-28">
        <h1 className="text-gradient mb-4 text-6xl font-extrabold">
          SEA Salon
        </h1>
        <h1 className="text-gradient text-6xl font-extrabold">
          Beauty and Elegance Redefined
        </h1>
        <Services />
        <ContactDetails />
        <CustomerReviews />
      </div>
    </>
  );
};

export default Index;
