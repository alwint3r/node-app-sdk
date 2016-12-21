const grpc = require('grpc');
const path = require('path');

const PROTO = path.join(__dirname, '..', '..', 'proto', 'handler.proto');

var fs = require('fs');
console.log(fs.readFileSync(PROTO));

const handler = grpc.load(PROTO).handler;

module.exports = gRPC;

function gRPC(options) {
  let metadata = new grpc.Metadata();
  let server;

  if (options.region) {
    server = options.region + '.thethings.network:1904';
  } else {
    server = options.server;
  }

  if (options.key) {
    metadata.add('key', options.key);
  }

  if (options.token) {
    metadata.add('bearer', options.token);
  }

  return new handler.ApplicationManager(server, metadata);
}