beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', function() {
  it('Button display is set to non display but still exists in html dom therefore should return true', function(done) {
    var isExisting = browser.isExisting('#not-displayed');
    expect(isExisting).to.equal(true);
  });

  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function(done) {
    var isExisting = browser.isExisting('#visibility-hidden');
    expect(isExisting).to.equal(true);
  });

  it('Button display is set to zero opacity but still exists in html dom therefore should return true', function(done) {
    var isExisting = browser.isExisting('#zero-opacity');
    expect(isExisting).to.equal(true);
  });

  it('Header text is visible and exists in the html dom therefore should return true', function(done) {    
    var isExisting = browser.isExisting('h1');
    expect(isExisting).to.equal(true);
  });
  
  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function(done) {
    var isExisting = browser.isExisting('#no-such-element');
    expect(isExisting).to.equal(false);
  });
});