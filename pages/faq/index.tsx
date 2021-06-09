import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { CommonContainer } from '@/components/layout/containers';
import { Jumbotron, Testimonials, PopularGames } from '@/components/UI';
import FAQ from '@/components/FAQ/FAQ';

const FAQPage: FC = () => {
  return (
    <Layout>
      <CommonContainer justify="center">
        <FAQ />
      </CommonContainer>
      <Jumbotron
        centered
        title="Have more questions?"
        text="If you cannot find answer to your question in our PopularServices, you can always contact us.
We are always here to help!"
        link="Contact us"
        src="/assets/images/jumbotron-1.png"
      />
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

export default FAQPage;
