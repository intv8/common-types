/**
 * This file contains test cases, mocks, or other data for testing interfaces.
 *
 * For use in ../interfaces.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import type {
  Converter,
  IHelpful,
  IPrimitiveConvertible,
  IVersionDescriptor,
  SerializedString,
  TCloneable,
  TConverter,
  TConvertible,
  TSerializable,
  TServicable,
} from '../../mod.ts';

export const iHelpfulTestCase: IHelpful = {
  helpUrl: 'https://example.com/help',
};

export const iPrimitiveConvertibleTestCase: IPrimitiveConvertible = {
  toBoolean: function (): boolean {
    return true;
  },

  toNumber: function (): number {
    return 1;
  },

  toBigInt: function (): bigint {
    return BigInt(1);
  },

  toSymbol: function (): symbol {
    return Symbol.for('1');
  },

  toString(): string {
    return '1';
  },

  valueOf(): number {
    return 1;
  },
};

export const iVersionDescriptorTestCase: IVersionDescriptor = {
  major: 0,
  minor: 1,
  build: 2,
  revision: 3,
};

export class TestCloneable implements TCloneable<TestCloneable> {
  #name: string;
  #value: number;

  constructor(name: string, value: number) {
    this.#name = name;
    this.#value = value;
  }

  toString(): string {
    return `${this.#name}`;
  }

  valueOf(): number {
    return this.#value;
  }

  clone(): TestCloneable {
    return new TestCloneable(this.#name, this.#value);
  }
}

export const tCloneableTestCase: TCloneable<TestCloneable> = new TestCloneable(
  'test',
  1,
);

export const tConverterTestCase: TConverter<string, symbol> = {
  convert(value): symbol {
    return Symbol.for(value);
  },
};

interface TestConvertibleMap {
  'symbol': symbol;
  'string': string;
  'number': number;
  'bigint': bigint;
  'boolean': boolean;
}

export const tConvertibleTestCase: TConvertible<TestConvertibleMap> = {
  convert<T>(
    converter: Converter<ThisType<typeof tConvertibleTestCase>, T>,
  ): T {
    if (typeof converter === 'function') {
      return converter(this);
    } else {
      return converter.convert(this);
    }
  },

  convertTo<S extends keyof TestConvertibleMap>(
    typeString: S,
  ): TestConvertibleMap[S] {
    switch (typeString) {
      case 'symbol':
        return this.toSymbol() as TestConvertibleMap[S];
      case 'string':
        return this.toString() as TestConvertibleMap[S];
      case 'number':
        return this.toNumber() as TestConvertibleMap[S];
      case 'bigint':
        return this.toBigInt() as TestConvertibleMap[S];
      case 'boolean':
        return this.toBoolean() as TestConvertibleMap[S];
      default:
        throw new Error(`Unknown type: ${typeString}`);
    }
  },

  toBoolean: function (): boolean {
    return true;
  },

  toNumber: function (): number {
    return 1;
  },

  toBigInt: function (): bigint {
    return BigInt(1);
  },

  toSymbol: function (): symbol {
    return Symbol.for('1');
  },

  toString(): string {
    return '1';
  },

  valueOf(): number {
    return 1;
  },
};

interface TestSerializableTarget {
  id: symbol;
  name: string;
  value: number;
  subId: string;
}

export const tSerializableTestCase: TSerializable<TestSerializableTarget> = {
  serialize(): SerializedString<TestSerializableTarget> {
    const id = 1649564;
    const name = 'test';
    const value = 1;
    const subId = `${id}:${name}`;

    return JSON.stringify({
      id: Symbol.for(`${id}`),
      name,
      value,
      subId,
    }) as SerializedString<TestSerializableTarget>;
  },

  deserialize(
    serialized: SerializedString<TestSerializableTarget>,
  ): TestSerializableTarget {
    return JSON.parse(serialized);
  },
};

type TestService = () => TestSerializableTarget;

const makeService =
  (name: string, value: number) => (): TestSerializableTarget => {
    const id = 1649564;
    return {
      id: Symbol.for(`${id}`),
      name,
      value,
      subId: `${id}:${name}`,
    };
  };

interface TestServiceMap {
  test: TestService;
  example: TestService;
  lab: TestService;
}

export const tServicableTestCase: TServicable<TestServiceMap> = {
  getService<S extends keyof TestServiceMap>(serviceId: S): TestServiceMap[S] {
    switch (serviceId) {
      case 'test':
        return makeService('test', 1);
      case 'example':
        return makeService('example', 2);
      case 'lab':
        return makeService('lab', 3);
      default:
        throw new Error(`Unknown service: ${serviceId}`);
    }
  },
};
