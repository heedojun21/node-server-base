// prod.js - production keys here!!
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID || 'abc',
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || 'abc',
    mongoURI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017',
    cookieKey: process.env.COOKIE_KEY || 'abc',
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || 'abc',
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || 'abc',
    sendGridKey: process.env.SEND_GRID_KEY || 'abc',
    redirectDomain: process.env.REDIRECT_DOMAIN || 'abc'
  };
  