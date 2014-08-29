var extend = require('extend');
var settings = {
  env: {
    NODE_ENV: 'development',
    PORT: 3080,
    BINDIP: '0.0.0.0'
  },
  title: 'LePassport',
  hostname: 'localhost',
  log_format: ':method :url :status :response-time ms - :res[content-length]',
  session_name: 'Yw7ahuJF',
  session_secret: '9MexD2vR',
  session_store: 'connect-mongo',
  session_store_settings: {
    url: 'mongodb://localhost:27017/lepass-session'
  },
  passlock_db: {
    adapter: 'passlock-mongodb-adapter',
    url: 'mongodb://localhost:27017/lepass-passlock'
  }
};

settings.root_url = 'http://' + settings.hostname;
if (settings.env.PORT && settings.env.PORT !== 80)
  settings.root_url += ':' + settings.env.PORT;
settings.cookie_secret = settings.session_secret;

extend(settings, require('require-dir')('settings'));
settings.lockit.appname = settings.title;
settings.lockit.url = settings.root_url;
settings.lockit.db.url = settings.passlock_db.url;

settings.passlock = {
  db: settings.passlock_db,
  lockit: settings.lockit,
  lockitRest: settings.lockit,
  oauth: settings.oauth
};

module.exports = settings;
