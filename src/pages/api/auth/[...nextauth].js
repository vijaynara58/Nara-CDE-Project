import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.LinkedIn({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Instagram({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    
    // ...add more providers here like Github etc.
  ],

  // A database is optional, but required to persist accounts in a database
  //database: process.env.DATABASE_URL,
})