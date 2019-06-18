/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (error, contents) => {
    if (error) {
      // callback(new Error(`No item in filepath: ${filePath}`));
      callback(error);
    } else {
      callback(error, contents.split('\n')[0]);
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, (error, status) => {
    if (error) {
      callback(error);
    } else {
      // console.log(statusCode);
      callback(error, status.statusCode);
    }
  });
};


// describe('getStatusCode', function() {
//   var getStatusCode = callbackReview.getStatusCode;
//   var google = nock('https://google.com');
//   var someNonExistantWebsite = nock('https::///thisIsNoUrl.comedy');

//   it('should accept a callback as its last argument', function(done) {
//     google.get('/').reply(200);

//     getStatusCode('https://google.com', function() {
//       // If this asserion gets called, the callback was invoked correctly
//       // Otherwise, this test will timeout after 2000ms
//       expect(true).to.equal(true);
//       done();
//     });
//   });






// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
