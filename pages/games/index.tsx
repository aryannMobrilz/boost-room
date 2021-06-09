import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { CommonContainer } from '@/components/layout/containers';
import { Jumbotron, GamePicker, PopularGameList, InfoJumbotron } from '@/components/UI';

const AboutUsPage: FC = () => {
  return (
    <Layout>
      <Jumbotron
        title="Games we support"
        text="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
At vero eos et accusam et justo duo dolores et ea rebum."
      />
      <CommonContainer justify="center">
        <PopularGameList
          title="Most Popular Games"
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
      <GamePicker
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
      <InfoJumbotron
        left
        form
        subtitle={['Subscribe', 'and get discount']}
        src="/assets/images/jumbotron-4.png"
      />
    </Layout>
  );
};

export default AboutUsPage;
