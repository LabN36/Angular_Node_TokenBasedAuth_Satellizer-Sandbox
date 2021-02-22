module.exports = {
  // App Settings
  MONGO_URI: process.env.MONGO_URI || 'localhost:27017/auth',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',
// mongodb://<dbuser>:<dbpassword>@ds019980.mlab.com:19980/ipl16
  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'b5d2e905b602e8e2a9a43e1ea2d2f1ef',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'YOUR_GOOGLE_CLIENT_SECRET',

  // OAuth 1.0
  TWITTER_KEY: process.env.TWITTER_KEY || 'vdrg4sqxyTPSRdJHKu4UVVdeD',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'cUIobhRgRlXsFyObUMg3tBq56EgGSwabmcavQP4fncABvotRMA'
};
