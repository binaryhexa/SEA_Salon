import { Stack } from '@mui/material';
import { contact } from '../../../utils/content';
import { MdContactEmergency } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className="mb-20 mt-20" id="contact">
      <h2 className="text-gradient text-center text-4xl font-bold">
        Contact Us
      </h2>
      <p className="mt-4 text-center text-2xl font-semibold text-primary50 md:mb-4">
        Feel free to contact us if you need any help!
      </p>
      <div className="flex flex-col items-center justify-center md:flex md:justify-center">
        <MdContactEmergency className="text-6xl text-primary30 md:text-9xl" />
        <div className="bg-gradient-card mt-4 w-full rounded-3xl border p-4 md:ml-4 md:mt-0 md:w-1/2">
          {contact.map((contact, index) => (
            <Stack
              className="mb-6 mt-6 flex justify-center flex-col items-center text-lg md:text-3xl"
              key={index}
            >
              <p className="font-bold text-primary30">{contact.name}</p>
              <div className="mt-2 flex justify-center items-center md:ml-2 md:mt-1 md:items-center">
                <FaWhatsapp className="mr-2 text-green-500 md:mr-4" />
                <p className="font-semibold text-primary50 underline">
                  {contact.phoneNumber}
                </p>
              </div>
            </Stack>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
