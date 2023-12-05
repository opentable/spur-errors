const SpurErrorsModule = require('../../');
const SpurErrorsSource = require('../../src/SpurErrors');

describe('Module Integration', function () {
  it('the module should be referenced from the root using what\'s defined in the package', () => {
    expect(SpurErrorsModule).toBeDefined();
  });

  it('the module should be the same as the expected source', () => {
    expect(SpurErrorsModule).toEqual(SpurErrorsSource);
  });
});
