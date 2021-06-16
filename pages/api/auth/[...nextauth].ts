import getConfig from 'next/config';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const { publicRuntimeConfig } = getConfig();

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    Providers.Facebook({
      clientId: publicRuntimeConfig.facebook.clientId,
      clientSecret: publicRuntimeConfig.facebook.clientSecret
    })
  ]
});
