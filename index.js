'use strict';

module.exports = {
  c2p(fn) {
    return new Promise((resolve, reject) => {
      const args = [].slice.call(arguments, 1);
      fn.apply(null, args.concat(function(err) {
        var resultArgs = [].slice.call(arguments, 1);
        if (err) {
          reject({error: err, std: resultArgs});
        } else {
          resolve.apply(null, resultArgs);
        }
      }));
    });
  },
  logError(err) {
    if (err.std) {
      console.log('\n---------------\nstdout:\n---------------\n', err.std[0]);
      console.log('\n---------------\nstderr:\n---------------\n', err.std[1]);
    }
  }
};