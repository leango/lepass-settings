var path = require('path');
module.exports = absViewPath({
  db: {
    name: '',
    collection: 'lockit_users'
  },
  signup: {
    views: {
      signup: 'get-signup',
      signedUp: 'post-signup',
      resend: 'resend-verification',
      linkExpired: 'link-expired',
      verified: 'mail-verification-success',
    }
  },
  login: {
    route: '/signin',
    logoutRoute: '/signout',
    views: {
      login: 'get-login',
      loggedOut: 'get-logout'
    }
  },
  forgotPassword: {
    views: {
      forgotPassword: 'get-forgot-password',
      newPassword: 'get-new-password',
      changedPassword: 'change-password-success',
      linkExpired: 'link-expired',
      sentEmail: 'post-forgot-password'
    }
  },
  deleteAccount: {
    views: {
      remove: 'get-delete-account',
      removed: 'post-delete-account'
    }
  },
  emailType: 'SMTP',
  emailFrom: 'idy0013@gmail.com',
  emailSettings: {
    service: 'Gmail',
    auth: {
      user: 'idy0013@gmail.com',
      pass: '****************'
    }
  }
});

function absViewPath(settings) {
  Object.keys(settings).forEach(function(field) {
    var viewSettings = settings[field].views;
    if (!viewSettings) return;
    Object.keys(viewSettings).forEach(function(viewName) {
      var viewPath = viewSettings[viewName];
      settings[field].views[viewName] = p(viewPath);
    });
  });
  return settings;
}

function p(view) {
  return view + '.jade';
  // return path.join(process.env.PWD, 'views/' + view + '.jade');
}