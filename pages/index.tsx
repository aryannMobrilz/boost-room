import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { CommonContainer } from '@/components/layout/containers';
import { LandingJumbotron, InfoJumbotron, Testimonials, PopularGames } from '@/components/UI';
import FAQ from '@/components/FAQ/FAQ';

const IndexPage: FC = () => {
  return (
    <Layout>
      <LandingJumbotron
        title="Boost your game account Gamer marketplace."
        text="We are a professional team with over 7+ years of experience dedicated to
providing services on the gamer marketplace. In other words, we
guarantee exceptional assistance in your gaming needs!"
        url="/profile"
        link="Shop now!"
        src="/assets/images/jumbotron-2.png"
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
      </CommonContainer>
      <InfoJumbotron
        title="Gamer marketplace"
        subtitle="Just for you"
        url="/register"
        link="Register here"
        src="/assets/images/jumbotron-3.png"
      />
      <CommonContainer justify="center">
        <FAQ />
      </CommonContainer>
      <InfoJumbotron
        title="Gamer marketplace"
        subtitle="Just for you"
        url="/register"
        link="Register here"
        src="/assets/images/jumbotron-3.png"
      />
      <CommonContainer justify="center">
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

export default IndexPage;
