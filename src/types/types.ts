// deno-lint-ignore-file ban-types no-explicit-any
/**
 * This file exports type aliases used by the the intv8 common-types package
 * and its peer and dependant packages.
 *
 * For type aliases, see ./interfaces.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import type { TConverter } from './interfaces.ts';

/** Specifies the types of practicable operations. */
export type PracticableSoftwareOperation =
  /** An operation that is initiated by end-user interaction. */
  'action';

/** Specifies the types of non-practicable operations. */
export type NonPracticableSoftwareOperation =
  /** An operation that solely lives in code. */
  | 'process'
  /** An operation that can trigger another operation. */
  | 'event';

/** Specifies the types of operations that can be practicable and non-practicable. */
export type SharedSoftwareOperation =
  /** An operation that communicates directives to a remote service for data on the remote service. */
  | 'request'
  /** An operation initiated by a schedule. */
  | 'task'
  /** An operation consisting of requests, tasks, builds, and/or  triggers working together over time. */
  | 'workflow'
  /** An operation that produces output. */
  | 'build'
  /** An operation that is triggered by another operation’s event. */
  | 'trigger';

/** Specifies a generic operation. */
export type GenericSoftwareOperation = /** A generic operation. */
  'operation';

/** Specifies all the types of software operations. */
export type SoftwareOperation =
  | PracticableSoftwareOperation
  | NonPracticableSoftwareOperation
  | SharedSoftwareOperation
  | GenericSoftwareOperation;

/** Specifies the types of TypeScript decorator targets. */
export type DecoratorType =
  /** A decorator for a class. */
  | 'class'
  /** A decorator for a class method. */
  | 'method'
  /** A decorator for a class property. */
  | 'property'
  /** A decorator for a method parameter. */
  | 'parameter'
  /** A decorator for a property accessor. */
  | 'accessor';

/** Specifies the integereleven recognized types of codebases. */
export type Codebase =
  /** A file that exports symbols that function together to provide a single feature of functionality. */
  | 'module'
  /** A locally installable unit of code and can contain any and all of the other organization unit types. */
  | 'package'
  /** A collection of modules that perform related functionality. */
  | 'library'
  /** An interactive system for viewing and/or manipulating data. */
  | 'application'
  /** Code that provides additional capabilities to an underlying module or library, using features of the underlying module or library, but itself is not part of the module or library. */
  | 'extension'
  /** A data flow control system that may utilize libraries and modules to provide much of the complexity, leaving you to only fill in details. */
  | 'framework'
  /** Code that provides additional capabilities to a framework, using features of the framework, but itself is not part of the framework. */
  | 'plugin'
  /** Code that provides platform, or vendor specific, functionality to a module, library, of framework acting as underlying functionality to user-focused APIs. */
  | 'adapter'
  /** A collection of libraries, which may have unrelated functionality, to provide developers a wide range of features for handling differing tasks. */
  | 'toolkit'
  /** A collection of toolkits that provide functionality to integrate with a specific platform or software. */
  | 'sdk'
  /** The accessible, either directly or through authentication/authorization, feature set for a system. */
  | 'api'
  /** Technology infrastructure on which applications, services, processes, or other technologies are built upon. */
  | 'platform'
  /** A system that simply takes input, processes it, and returns output with only a select feature set of its internal available to its users. */
  | 'engine'
  /** An alternative, or custom, styling for an application. */
  | 'theme';

/** Alias for types that are scalar, meaning can be represented as a single value. */
export type Scalar = boolean | bigint | number | string | symbol;

/** Alias for types that are nullish, meaning they are `null` or `undefined`. */
export type Nullish = null | undefined;

/** Alias for types that are immutable and primitive, meaning they are `Scalar` or `Nullish`. */
export type Primitive = Scalar | Nullish;

/** Alias for an object with any number of properties, each of which are of unknown, or unspecified, value. */
export type AnonymousObject = Record<number | string | symbol, unknown>;

/** Alias for all of the native types in JavaScript. */
export type Native =
  | Primitive
  | Function
  | Date
  | Error
  | RegExp
  | AnonymousObject
  | Array<unknown>;

/** Alias for value, that if defined, is of type `T`, otherwise is of type `never`. */
export type Defined<T> = T extends undefined ? never : T;

/** Alias for a value that can be either a single value of type `T`, or an array of values of type `T`.*/
export type OneOrMany<T> = T | T[];

/** Alias for the constructor of class of type `T`. */
export type Constructor<T> = new (...args: any[]) => T;

/** A function converting a value from one type (`F`) to another(`T`). */
export type ConverterFn<F, T> = (value: F) => T;

/** A function or object converting a value from one type to another. */
export type Converter<F, T> = TConverter<F, T> | ConverterFn<F, T>;

/** The string serialized representation of an object. */
export type SerializedString<T> = string;
