/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promiseConstructor = require('./promiseConstructor.js');
var Promisification = require('./promisification.js');
var writeFileAsync = Promise.promisify(fs.writeFile);

// Promise.promisify(fs); // ASYNC suffixed version

// getStatusCodeAsync
// getGitHubProfileAsync
// generateRandomTokenAsync
// readFileAndMakeItFunnyAsync

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath)  
    .then(function(username) { // send a request to GitHub for user profile
      if(!username) {
        throw new Error('Username DNE');
      } else {
        return username;
      }
    })
    .then(function(user) {
      return Promisification.getGitHubProfileAsync(user);
    })
    .then(function(options) {
      return writeFileAsync(writeFilePath, JSON.stringify(options));
    }); 
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
