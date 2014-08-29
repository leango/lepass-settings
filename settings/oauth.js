var path = require('path');
module.exports = {
  endpoints: {
    authorize: '/oauth/v2/auth',
    decision: '/oauth/v2/decision',
    token: '/oauth/v2/token',
    tokenInfo: '/oauth/v2/tokeninfo'
  },
  views: {
    authorize: 'authorize.jade'
  },
  authorizationCodeExpireDuration: '1d',
  accessTokenExpireDurationByCode: '1d',
  accessTokenExpireDurationByImplict: '1h'
};
