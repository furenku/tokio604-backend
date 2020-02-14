const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');

const keystone = new Keystone({
  name: 'tokio604',
  adapter: new MongooseAdapter(),
});


module.exports = {
    keystone,
    apps: [new GraphQLApp()],
};