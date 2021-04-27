import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { CommonContainer } from '@/components/layout/containers';
import { Jumbotron, Testimonials, PopularGames } from '@/components/UI';
import AboutUs from '@/components/AboutUs/AboutUs';

const AboutUsPage: FC = () => {
  return (
    <Layout>
      <Jumbotron
        title="More about Boostroom"
        text="We are a professional team with over 7+ years of experience dedicated to
providing services on the gamer marketplace. In other words, we
guarantee exceptional assistance in your gaming needs!"
        src="/assets/images/jumbotron-1.png"
      />
      <CommonContainer justify="center">
        <AboutUs />
      </CommonContainer>
      <Jumbotron
        centered
        title="Have more questions?"
        text="If you cannot find answer to your question in our FAQ, you can always contact us.
We are always here to help!"
        src="/assets/images/jumbotron-1.png"
      />
      <CommonContainer justify="center">
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
      </CommonContainer>
    </Layout>
  );
};

export default AboutUsPage;
