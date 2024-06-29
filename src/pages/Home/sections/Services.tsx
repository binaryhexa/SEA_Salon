import CardContainer from '../../../components/elements/Card/CardContainer';
import { services } from '../../../utils/content';
const Services = () => {
  return (
    <div className="mt-20" id='services'>
      <h2 className="text-gradient text-4xl font-bold">Our Services</h2>
      <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <CardContainer key={index} variantRounded="lg">
            <h3 className="text-gradient text-3xl font-bold">
              {service.title}{' '}
            </h3>
            <p className="mt-4 text-xl font-semibold text-primary50">
              {service.description}
            </p>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Services;
