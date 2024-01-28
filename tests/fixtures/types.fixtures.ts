/**
 * This file contains test cases, mocks, or other data for testing type aliases.
 *
 * For use in ../types.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import type {
  AnonymousObject,
  Codebase,
  Constructor,
  Converter,
  ConverterFn,
  DecoratorType,
  Defined,
  GenericSoftwareOperation,
  Native,
  NonPracticableSoftwareOperation,
  Nullish,
  OneOrMany,
  PracticableSoftwareOperation,
  Primitive,
  Scalar,
  SerializedString,
  SharedSoftwareOperation,
  SoftwareOperation,
} from '../../mod.ts';

export const practicableSopTestCase: PracticableSoftwareOperation = 'action';

export const nonPracticableSopTestCase: NonPracticableSoftwareOperation[] = [
  'process',
  'event',
];

export const sharedSopTestCase: SharedSoftwareOperation[] = [
  'request',
  'task',
  'workflow',
  'build',
  'trigger',
];

export const genericSopTestCase: GenericSoftwareOperation = 'operation';

export const softwareOperationTestCase: SoftwareOperation[] = [
  'action',
  'process',
  'event',
  'request',
  'task',
  'workflow',
  'build',
  'trigger',
  'operation',
];

export const decoratorTypeTestCase: DecoratorType[] = [
  'class',
  'method',
  'property',
  'parameter',
  'accessor',
];

export const codebaseTestCase: Codebase[] = [
  'module',
  'package',
  'library',
  'application',
  'extension',
  'framework',
  'plugin',
  'adapter',
  'toolkit',
  'sdk',
  'api',
  'platform',
  'engine',
  'theme',
];

export const scalarTestCase: Scalar[] = [
  false,
  BigInt(25),
  2654,
  'string',
  Symbol.for('symbol'),
];

export const nullishTestCase: Nullish[] = [null, undefined];

export const primitiveTestCase: Primitive[] = [
  false,
  BigInt(25),
  2654,
  'string',
  Symbol.for('symbol'),
  null,
  undefined,
];

export const anonymousObjectTestCase: AnonymousObject[] = [
  { name: 'test' },
  { value: 1 },
  { name: 'test', value: 1 },
];

export const nativeTestCase: Native[] = [
  false,
  BigInt(25),
  2654,
  'string',
  Symbol.for('symbol'),
  null,
  undefined,
  { name: 'test' },
  [
    { value: 1 },
    { name: 'test', value: 1 },
  ],
  /^test$/,
  new Date(Date.now()),
  () => {},
  new Error('test'),
];

export const definedTestCase1: Defined<string> = 'test';
export let definedTestCase2: Defined<string>;

export const oneOrManyTestCase1: OneOrMany<string> = 'test';
export const oneOrManyTestCase2: OneOrMany<string> = ['test'];

export const constructorTestCase: Constructor<Error> = Error;

export const converterFnTestCase: ConverterFn<string, number> = (
  value: string,
): number => {
  return parseInt(value);
};

export const converterTestCase1: Converter<string, number> =
  converterFnTestCase;
export const converterTestCase2: Converter<string, number> = {
  convert(value: string): number {
    return parseInt(value);
  },
};

export const serializedStringTestCase: SerializedString<string> = 'test';
