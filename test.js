var assert = require('assert')

function test() {
  assert.equal(2 + 2, 4);
}

function test2() {
  assert.equal(3 + 5, 8);
}

if (module == require.main) require('test').run(test);

