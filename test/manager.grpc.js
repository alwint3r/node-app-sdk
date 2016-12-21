var should = require('should');

var ttn = require('..');

var REGION = 'eu';
var ACCESS_KEY = 'my-access-key';
var TOKEN = 'my-token';

describe('manager.gRPC', function () {

  describe('region and access key', function () {
    var client;

    it('should create an instance', function () {
      client = ttn.manager.gRPC({
        region: 'eu',
        token: TOKEN
      });
      client.should.be.an.Object();
      client.getDevice.should.be.a.Function();
    });

    // it('should get devices', function (done) {
    //   client.getDevice({
    //     app_id: 'my-app',
    //     dev_id: 'my-dev'
    //   }, function (err, res, body) {
    //     should(err).be.null();
    //     should(res).be.an.Object();
    //     should(body).eql(response);
    //     done();
    //   });
    // });

    // it('should work with body', function (done) {
    //   client.registerApplication({}, {
    //     app_id: 'my-app'
    //   }, function (err, res, body) {
    //     should(err).be.null();
    //     should(res).be.an.Object();
    //     should(body).eql({});
    //     done();
    //   });
    // });

  });

  describe('host and bearer token', function () {
    var client;

    it('should create an instance', function () {
      client = ttn.manager.gRPC({
        baseUrl: 'my-handler:9999',
        key: ACCESS_KEY
      });
      client.should.be.an.Object();
    });

    // it('should get devices', function (done) {
    //   client.getDevice({
    //     app_id: 'my-app',
    //     dev_id: 'my-dev'
    //   }, function (err, res, body) {
    //     should(err).be.null();
    //     should(res).be.an.Object();
    //     should(body).eql(response);
    //     done();
    //   });
    // });

  });

});