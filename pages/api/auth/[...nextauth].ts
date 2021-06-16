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
  ],
  callbacks: {
    async signIn(user, account, profile): Promise<string | boolean> {
      console.log({ user, account, profile });

      return false;
    }
    // async jwt(token, user) {
    //   // console.log({ token, user });
    // },
    // async redirect(url, baseUrl) {
    //   console.log({ url, baseUrl });
    // },
    // async session(session, token) {
    //   console.log({ session, token });
    //
    //   // Add property to session, like an access_token from a provider.
    //   session.accessToken = token.accessToken;
    //   return session;
    // }
  }
});
