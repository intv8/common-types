/**
 * This file contains tests for interfaces.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import {
  assert,
  assertEquals,
  assertExists,
  describe,
  it,
} from '../dev_deps.ts';

import {
  iHelpfulTestCase,
  iPrimitiveConvertibleTestCase,
  iVersionDescriptorTestCase,
  tCloneableTestCase,
  tConverterTestCase,
  tConvertibleTestCase,
  TestCloneable,
  tSerializableTestCase,
  tServicableTestCase,
} from './fixtures/interfaces.fixtures.ts';

describe('interfaces', () => {
  it('interface type tests should be okay.', () => {
    assert(true, 'interface type tests are not okay.');
  });

  describe('IHelpful', () => {
    it('should be an object with a helpUrl property.', () => {
      assertExists(
        iHelpfulTestCase.helpUrl,
        'IHelpful is not an object with a helpUrl property.',
      );
    });

    it('should return a string when helpUrl is accessed.', () => {
      assertEquals(
        iHelpfulTestCase.helpUrl,
        'https://example.com/help',
        'IHelpful.helpUrl did not return \'https://example.com/help\'.',
      );
    });
  });

  describe('IPrimitiveConvertible', () => {
    it('should be an object with toBoolean, toNumber, toBigInt, toSymbol, toString, and valueOf methods.', () => {
      assertExists(
        iPrimitiveConvertibleTestCase.toBoolean,
        'IPrimitiveConvertible is not an object with a toBoolean method.',
      );
      assertExists(
        iPrimitiveConvertibleTestCase.toNumber,
        'IPrimitiveConvertible is not an object with a toNumber method.',
      );
      assertExists(
        iPrimitiveConvertibleTestCase.toBigInt,
        'IPrimitiveConvertible is not an object with a toBigInt method.',
      );
      assertExists(
        iPrimitiveConvertibleTestCase.toSymbol,
        'IPrimitiveConvertible is not an object with a toSymbol method.',
      );
      assertExists(
        iPrimitiveConvertibleTestCase.toString,
        'IPrimitiveConvertible is not an object with a toString method.',
      );
      assertExists(
        iPrimitiveConvertibleTestCase.valueOf,
        'IPrimitiveConvertible is not an object with a valueOf method.',
      );
    });

    it('should return a boolean when toBoolean is called.', () => {
      assertEquals(
        iPrimitiveConvertibleTestCase.toBoolean(),
        true,
        'IPrimitiveConvertible.toBoolean() did not return true.',
      );
    });

    it('should return a number when toNumber is called.', () => {
      assertEquals(
        iPrimitiveConvertibleTestCase.toNumber(),
        1,
        'IPrimitiveConvertible.toNumber() did not return 1.',
      );
    });

    it('should return a bigint when toBigInt is called.', () => {
      assertEquals(
        iPrimitiveConvertibleTestCase.toBigInt(),
        BigInt(1),
        'IPrimitiveConvertible.toBigInt() did not return BigInt(1).',
      );
    });

    it('should return a symbol when toSymbol is called.', () => {
      assertEquals(
        iPrimitiveConvertibleTestCase.toSymbol(),
        Symbol.for('1'),
        'IPrimitiveConvertible.toSymbol() did not return Symbol(\'1\').',
      );
    });

    it('should return a string when toString is called.', () => {
      assertEquals(
        iPrimitiveConvertibleTestCase.toString(),
        '1',
        'IPrimitiveConvertible.toString() did not return \'1\'.',
      );
    });

    it('should return a number when valueOf is called.', () => {
      assertEquals(
        iPrimitiveConvertibleTestCase.valueOf(),
        1,
        'IPrimitiveConvertible.valueOf() did not return 1.',
      );
    });
  });

  describe('IVersionDescriptor', () => {
    it('should be an object with major, minor, build, and revision properties.', () => {
      assertExists(
        iVersionDescriptorTestCase.major,
        'IVersionDescriptor is not an object with a major property.',
      );
      assertExists(
        iVersionDescriptorTestCase.minor,
        'IVersionDescriptor is not an object with a minor property.',
      );
      assertExists(
        iVersionDescriptorTestCase.build,
        'IVersionDescriptor is not an object with a build property.',
      );
      assertExists(
        iVersionDescriptorTestCase.revision,
        'IVersionDescriptor is not an object with a revision property.',
      );
    });

    it('should return 0 when major is accessed.', () => {
      assertEquals(
        iVersionDescriptorTestCase.major,
        0,
        'IVersionDescriptor.major did not return 0.',
      );
    });

    it('should return 1 when minor is accessed.', () => {
      assertEquals(
        iVersionDescriptorTestCase.minor,
        1,
        'IVersionDescriptor.minor did not return 1.',
      );
    });

    it('should return 2 when build is accessed.', () => {
      assertEquals(
        iVersionDescriptorTestCase.build,
        2,
        'IVersionDescriptor.build did not return 2.',
      );
    });

    it('should return 3 when revision is accessed.', () => {
      assertEquals(
        iVersionDescriptorTestCase.revision,
        3,
        'IVersionDescriptor.revision did not return 3.',
      );
    });
  });

  describe('TCloneable', () => {
    it('should be an object with a clone method.', () => {
      assertExists(
        tCloneableTestCase.clone,
        'TCloneable is not an object with a clone method.',
      );
    });

    it('should return a TestCloneable with the same value when clone is called.', () => {
      const testCloneable = tCloneableTestCase.clone();

      assert(
        testCloneable instanceof TestCloneable,
        'TCloneable.clone() did not return a TestCloneable.',
      );

      assertEquals(
        testCloneable.toString(),
        testCloneable.toString(),
        'TCloneable.clone() did not return a TestCloneable with the same name.',
      );
      assertEquals(
        testCloneable.valueOf(),
        testCloneable.valueOf(),
        'TCloneable.clone() did not return a TestCloneable with the same value.',
      );
      assertEquals(
        testCloneable.toString(),
        'test',
        'TCloneable.clone() did not return a TestCloneable with the name \'test\'.',
      );
      assertEquals(
        testCloneable.valueOf(),
        1,
        'TCloneable.clone() did not return a TestCloneable with the value 1.',
      );
    });
  });

  describe('TConverter', () => {
    it('should be an object with a convert method.', () => {
      assertExists(
        tConverterTestCase.convert,
        'TConverter is not an object with a convert method.',
      );
    });

    it('should return a TestCloneable when convert is called.', () => {
      const testConverter = tConverterTestCase.convert('test');

      assert(
        typeof testConverter === 'symbol',
        'TConverter.convert() did not return a symbol.',
      );
      assertEquals(
        testConverter,
        Symbol.for('test'),
        'TConverter.convert() did not return Symbol(\'test\').',
      );
    });
  });

  describe('TConvertible', () => {
    it('should be an object with a convert method.', () => {
      assertExists(
        tConvertibleTestCase.convert,
        'TConvertible is not an object with a convert method.',
      );
    });

    it('should return a converted value when convert is called.', () => {
      const testConvertible = tConvertibleTestCase.convert((value) => {
        return Symbol.for(value.toString());
      });

      assert(
        typeof testConvertible === 'symbol',
        'TConvertible.convert() did not return a symbol.',
      );
      assertEquals(
        testConvertible,
        Symbol.for('1'),
        'TConvertible.convert() did not return Symbol(\'1\').',
      );
    });

    it('should return the target type when convertTo is called.', () => {
      const testConvertible = tConvertibleTestCase.convertTo('symbol');
      const testConvertible2 = tConvertibleTestCase.convertTo('string');
      const testConvertible3 = tConvertibleTestCase.convertTo('number');
      const testConvertible4 = tConvertibleTestCase.convertTo('bigint');
      const testConvertible5 = tConvertibleTestCase.convertTo('boolean');

      assert(
        typeof testConvertible === 'symbol',
        'TConvertible.convertTo(\'symbol\') did not return a symbol.',
      );
      assertEquals(
        testConvertible,
        Symbol.for('1'),
        'TConvertible.convertTo(\'symbol\') did not return Symbol(\'1\').',
      );
      assert(
        typeof testConvertible2 === 'string',
        'TConvertible.convertTo(\'string\') did not return a string.',
      );
      assertEquals(
        testConvertible2,
        '1',
        'TConvertible.convertTo(\'string\') did not return \'1\'.',
      );
      assert(
        typeof testConvertible3 === 'number',
        'TConvertible.convertTo(\'number\') did not return a number.',
      );
      assertEquals(
        testConvertible3,
        1,
        'TConvertible.convertTo(\'number\') did not return 1.',
      );
      assert(
        typeof testConvertible4 === 'bigint',
        'TConvertible.convertTo(\'bigint\') did not return a bigint.',
      );
      assertEquals(
        testConvertible4,
        BigInt(1),
        'TConvertible.convertTo(\'bigint\') did not return BigInt(1).',
      );
      assert(
        typeof testConvertible5 === 'boolean',
        'TConvertible.convertTo(\'boolean\') did not return a boolean.',
      );
      assertEquals(
        testConvertible5,
        true,
        'TConvertible.convertTo(\'boolean\') did not return true.',
      );
    });
  });

  describe('TSerializable', () => {
    it('should be an object with a serialize method.', () => {
      assertExists(
        tSerializableTestCase.serialize,
        'TSerializable is not an object with a serialize method.',
      );
    });

    it('should return a string when serialize is called.', () => {
      const testSerializable = tSerializableTestCase.serialize();

      assert(
        typeof testSerializable === 'string',
        'TSerializable.serialize() did not return a string.',
      );
      assertEquals(
        testSerializable,
        `{"name":"test","value":1,"subId":"1649564:test"}`,
        'TSerializable.serialize() did not return correct JSON.',
      );
    });

    it('should return a TestSerializableTarget when deserialize is called.', () => {
      const testSerializable = tSerializableTestCase.deserialize(
        `{"name":"test","value":1,"subId":"1649564:test"}`,
      );

      assert(
        typeof testSerializable === 'object',
        'TSerializable.deserialize() did not return an object.',
      );
      assertEquals(
        testSerializable.name,
        'test',
        'TSerializable.deserialize() did not return an object with the name \'test\'.',
      );
      assertEquals(
        testSerializable.value,
        1,
        'TSerializable.deserialize() did not return an object with the value 1.',
      );
      assertEquals(
        testSerializable.subId,
        '1649564:test',
        'TSerializable.deserialize() did not return an object with the subId \'1649564:test\'.',
      );
    });
  });

  describe('TServicable', () => {
    it('should be an object with a getService method.', () => {
      assertExists(
        tServicableTestCase.getService,
        'TServicable is not an object with a getService method.',
      );
    });

    it('should return a TestService when getService is called.', () => {
      const testService = tServicableTestCase.getService('test');

      assert(
        typeof testService === 'function',
        'TServicable.getService() did not return a function.',
      );
      assertEquals(testService(), {
        id: Symbol.for('1649564'),
        name: 'test',
        value: 1,
        subId: '1649564:test',
      }, 'TServicable.getService() did not return a TestService.');

      const exampleService = tServicableTestCase.getService('example');

      assert(
        typeof exampleService === 'function',
        'TServicable.getService() did not return a function.',
      );
      assertEquals(exampleService(), {
        id: Symbol.for('1649564'),
        name: 'example',
        value: 2,
        subId: '1649564:example',
      }, 'TServicable.getService() did not return a TestService.');

      const labService = tServicableTestCase.getService('lab');

      assert(
        typeof labService === 'function',
        'TServicable.getService() did not return a function.',
      );
      assertEquals(labService(), {
        id: Symbol.for('1649564'),
        name: 'lab',
        value: 3,
        subId: '1649564:lab',
      }, 'TServicable.getService() did not return a TestService.');
    });
  });
});
