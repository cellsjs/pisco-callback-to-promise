'use strict';

module.exports = {
  c2p(fn) {
    return new Promise((resolve, reject) => {
      const args = [].slice.call(arguments, 1);
      fn.apply(null, args.concat(function(err) {
        var resultArgs = [].slice.call(arguments, 1);
        if (err) {
          reject(err);
        } else {
          resolve.apply(null, resultArgs);
        }
      }));
    });
  }
};