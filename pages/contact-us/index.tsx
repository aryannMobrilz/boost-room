import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { CommonContainer, ContactUsContainer } from '@/components/layout/containers';
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
      </ContactUsContainer>
      <CommonContainer justify="center">
        <Testimonials
          title="Why Choose Us?"
          subtitle="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos
        et accusam et justo duo dolores et ea rebum."
          testimonials={[
            {
              id: 0,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus et. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun.'
            },
            {
              id: 1,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 2,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 3,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 4,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 5,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 6,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 7,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 8,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 9,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 10,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 11,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 12,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            },
            {
              id: 13,
              summary: 'Keep doing what you do',
              user: 'Hunt4Life',
              text:
                'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn'
            }
          ]}
        />
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
      </CommonContainer>
    </Layout>
  );
};

export default ContactUsPage;
