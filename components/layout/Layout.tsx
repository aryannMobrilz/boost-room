import { FC } from 'react';

import { Layout as AntLayout } from 'antd';
import { Header, Footer } from '@/components/UI';

const Layout: FC = ({ children }) => {
  return (
    <AntLayout>
      <Header isAuthorized={false} games={games} user={user} />
      <AntLayout.Content>{children}</AntLayout.Content>
      <Footer />
    </AntLayout>
  );
};

export default Layout;

const games = [
  { key: 'wow', name: 'World of Warcraft' },
  { key: 'pubg', name: "PlayerUnknown's Battlegrounds" },
  { key: 'lol', name: 'League of Legends' },
  { key: 'gta', name: 'Grand Theft Auto: Online' },
  { key: 'rdr-2', name: 'Read Dead Redemption 2' },
  { key: 'rdr', name: 'Read Dead Redemption' },
  { key: 'fifa-21', name: 'Fifa 21' },
  { key: 'pes-2020', name: 'PES 2020' },
  { key: 'mgs-5', name: 'Metal Gear Solid 5' }
];

const user = [
  { key: '0', property: 'World of Warcraft' },
  { key: '1', property: "PlayerUnknown's Battlegrounds" },
  { key: '2', property: 'League of Legends' },
  { key: '3', property: 'Grand Theft Auto: Online' },
  { key: '4', property: 'Read Dead Redemption 2' },
  { key: '5', property: 'Read Dead Redemption' },
  { key: '6', property: 'Fifa 21' },
  { key: '7', property: 'PES 2020' },
  { key: '8', property: 'Metal Gear Solid 5' }
];
