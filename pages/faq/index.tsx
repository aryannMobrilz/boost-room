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
        text="If you cannot find answer to your question in our FAQ, you can always contact us.
We are always here to help!"
        link="Contact us"
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

export default FAQPage;
