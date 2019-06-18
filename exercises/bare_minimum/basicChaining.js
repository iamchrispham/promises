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

// Promise.promisify(fs); // ASYNC suffixed version

// getStatusCodeAsync
// getGitHubProfileAsync
// generateRandomTokenAsync
// readFileAndMakeItFunnyAsync

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  console.log('RFP', readFilePath);
  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath)  
    .then(function(username) { // send a request to GitHub for user profile
      if(!username) {
        console.log('DNE');
        throw new Error('Username DNE');
      }
      else {
        console.log('else');
        return username;
      }
    })
    // .then(function(user) {
    //   console.log(user);
    //   return promiseConstructor.getStatusCodeAsync(user);
    // })
    .then(function(userProfile) {
      console.log('more progress')
      return Promisification.generateRandomTokenAsync();
    })
    .then(function(token) {
      console.log(token);
      fs.writeFile(writeFilePath, JSON.stringify(token));
    }); 
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
