// deno-lint-ignore-file no-explicit-any
/**
 * This file exports interfaces used by the the intv8 common-types package
 * and its peer and dependant packages.
 *
 * For type aliases, see ./types.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import type { Converter, SerializedString } from './types.ts';

/** Provides a reference URL to documentation on a class instance. */
export interface IHelpful {
  /** The reference URL to documentation on a class instance. */
  helpUrl: string;
}

/** Provides a collection of properties describing a version. */
export interface IVersionDescriptor {
  /** The major component of a version. */
  major: number;
  /** The minor component of a version. */
  minor: number;
  /** The build component of a version. */
  build: number;
  /** The revision component of a version. */
  revision: number;
}

/** Provides methods to convert a class instance to primitive types. */
export interface IPrimitiveConvertible {
  /** Convert a class instance into a `boolean` value. */
  toBoolean(): boolean;
  /** Convert a class instance into a `number`. */
  toNumber(): number;
  /** Get the numeric value of a class instance. */
  valueOf(): number;
  /** Convert a class instance into a `bigint`. */
  toBigInt(): bigint;
  /** Convert a class instance into a `symbol`. */
  toSymbol(): symbol;
  /** Convert a class instance into a `string`. */
  toString(): string;
}

/** Provides a mechanism to convert a value from one type to another. */
export interface TConverter<F, T> {
  /** Converts a value from type `F` to type `T`. */
  convert(value: F): T;
}

/** Provides advanced functionality for converting a class instance to another type. */
export interface TConvertible<T extends Record<string, any>>
  extends IPrimitiveConvertible {
  /** Convert a class instance into the type associated with the type-string. */
  convertTo<S extends keyof T>(typeString: S): T[S];

  /** Convert a class instance into the type using a `Converter`. */
  convert<T>(converter: Converter<ThisType<this>, T>): T;
}

/** Provides a method to retrieve a service from a class instance. */
export interface TServicable<T extends Record<string | number | symbol, any>> {
  /** Retrieves the service mapped to the specified service identifier. */
  getService<S extends keyof T>(serviceId: S): T[S];
}

/** Provides a method to serialize a class instance to another type. */
export interface TSerializable<T> {
  /** Serialize the class instance. */
  serialize(): SerializedString<T>;

  /** Deserialize the serialized string into a new instance. */
  deserialize(serialized: SerializedString<T>): T;
}

/** Provides a method to clone a class instance into a new instance with the same value. */
export interface TCloneable<T> {
  /** Creates a new instance of a class instance with the same value. */
  clone(): T;
}
