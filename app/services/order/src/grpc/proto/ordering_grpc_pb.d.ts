// package: ordering
// file: ordering.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ordering_pb from "./ordering_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IOrderingService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOrder: IOrderingService_ICreateOrder;
}

interface IOrderingService_ICreateOrder extends grpc.MethodDefinition<ordering_pb.CreateOrderRequest, google_protobuf_empty_pb.Empty> {
    path: "/ordering.Ordering/CreateOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ordering_pb.CreateOrderRequest>;
    requestDeserialize: grpc.deserialize<ordering_pb.CreateOrderRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const OrderingService: IOrderingService;

export interface IOrderingServer extends grpc.UntypedServiceImplementation {
    createOrder: grpc.handleUnaryCall<ordering_pb.CreateOrderRequest, google_protobuf_empty_pb.Empty>;
}

export interface IOrderingClient {
    createOrder(request: ordering_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createOrder(request: ordering_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createOrder(request: ordering_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class OrderingClient extends grpc.Client implements IOrderingClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createOrder(request: ordering_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createOrder(request: ordering_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createOrder(request: ordering_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
