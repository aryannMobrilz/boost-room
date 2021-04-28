import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { ContactUsContainer } from '@/components/layout/containers';
import { Jumbotron, Testimonials, PopularGames } from '@/components/UI';
import ContactUs from '@/components/ContactUs/ContactUs';

const ContactUsPage: FC = () => {
  return (
    <Layout>
      <Jumbotron
        centered
        title="Contact Boostroom"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan hendrerit erat, vitae viverra magna maximus ac aliquam id velit nec nulla sollicitudin rutrum vestibulum cursus nec enim vitae viverra magna"
      />
      <ContactUsContainer justify="center">
        <ContactUs />
        <Testimonials />
        <PopularGames
          games={[
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft',
            'World of Warcraft'
          ]}
        />
      </ContactUsContainer>
    </Layout>
  );
};

export default ContactUsPage;
