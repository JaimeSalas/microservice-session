// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ordering_pb = require('./ordering_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ordering_CreateOrderRequest(arg) {
  if (!(arg instanceof ordering_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type ordering.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ordering_CreateOrderRequest(buffer_arg) {
  return ordering_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderingService = exports.OrderingService = {
  createOrder: {
    path: '/ordering.Ordering/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: ordering_pb.CreateOrderRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ordering_CreateOrderRequest,
    requestDeserialize: deserialize_ordering_CreateOrderRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.OrderingClient = grpc.makeGenericClientConstructor(OrderingService);
