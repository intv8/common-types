/**
 * This file contains tests for type aliases.
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
  converterFnTestCase,
  converterTestCase1,
  converterTestCase2,
} from './fixtures/types.fixtures.ts';

describe('types', () => {
  it('type alias type tests should be okay.', () => {
    assert(true, 'interface type tests are not okay.');
  });

  describe('ConverterFn', () => {
    it('should be a function.', () => {
      assertExists(converterFnTestCase);
      assert(typeof converterFnTestCase === 'function');
    });

    it('should return a string.', () => {
      const result = converterFnTestCase('26549523');

      assertExists(converterFnTestCase);
      assert(typeof result === 'number');
      assertEquals(result, 26549523);
    });
  });

  describe('Converter', () => {
    it('should be a function.', () => {
      assertExists(converterTestCase1);
      assert(typeof converterTestCase1 === 'function');
      const result = converterTestCase1('26549523');

      assertExists(converterTestCase1);
      assert(typeof result === 'number');
      assertEquals(result, 26549523);
    });

    it('should be a function.', () => {
      assertExists(converterTestCase2);
      assert(typeof converterTestCase2 === 'object');
      assertExists(converterTestCase2.convert);

      const result = converterTestCase2.convert('26549523');

      assertExists(converterTestCase2);
      assert(typeof result === 'number');
      assertEquals(result, 26549523);
    });
  });
});
