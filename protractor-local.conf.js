exports.config = {

  // baseUrl: 'http://localhost:3000',

  capabilities: {
    'browserName': 'chrome'
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',

  onPrepare: function () {
    // do something before running tests
  },

  // specs: ['src/**/*.e2e.js']

}
