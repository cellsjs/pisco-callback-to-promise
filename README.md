### Pisco Callbacks to Promise

Library that allows to work with callbacks functions like if they were Promises.

Example:

```javascript
const pctp = require('pisco-callback-to-promise');

pctp.c2p(childProcess.exec, 'pwd')
  .then(stdout => {
    console.log(stdout);
  })
  .then(() => {...})
  .catch((error) => pctp.logError(error, cb));
});
```
