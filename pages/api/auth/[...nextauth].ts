import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import authAPI from '@/api/auth';
import { parseErrors } from '@/utils/form';

const { CLIENT_ID, CLIENT_SECRET, FACEBOOK_ID, FACEBOOK_SECRET } = process.env;

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    Providers.Credentials({
      async authorize({ username, password }: Record<string, any>): Promise<any> {
        try {
          const { data } = await authAPI().login({
            username,
            password,
            grant_type: 'password',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET
          });

          return data;
        } catch (err) {
          // throw new Error(parseErrors(err));
          throw new Error(err);
        }
      }
    }),
    Providers.Facebook({
      clientId: FACEBOOK_ID,
      clientSecret: FACEBOOK_SECRET
    })
  ],
  callbacks: {
    // async signIn(user, account, profile): Promise<string | boolean> {
    //   return true;
    // },
    async jwt(token, user) {
      if (user) {
        token = { accessToken: user.access_token };
      }

      return token;
    },
    async session(session, token) {
      // Add property to session, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    }
  }
});
