const SpurErrorsModule = require('../../');
const SpurErrorsSource = require('../../src/SpurErrors');

describe('Module Integration', () => {
  it('the module should be referenced from the root using what\'s defined in the package', () => {
    expect(SpurErrorsModule).to.exist;
  });

  it('the module should be the same as the expected source', () => {
    expect(SpurErrorsModule).to.equal(SpurErrorsSource);
  });
});
