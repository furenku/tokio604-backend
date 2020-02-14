// import necessary modules
const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');

// create an instance of Keystone app
const keystone = new Keystone({
  name: 'New Project',
  adapter: new MongooseAdapter(),
});