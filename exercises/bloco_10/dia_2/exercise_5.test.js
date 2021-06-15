const { describe, test, it, expect } = require('@jest/globals');
const { TestWatcher } = require('jest');

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1before
// 1 - Test
// 1after 
// 1before
// 2before
// 2test
// 2after
// 1after