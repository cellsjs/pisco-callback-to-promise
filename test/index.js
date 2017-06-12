'use strict';

const expect = require('chai').expect;
const pctp = require('../index');
const childProcess = require('child_process');


/*global define, describe, it*/
describe('Testing the callbacks to promises', () => {
  it('Run the pwd command', (done) => {
    pctp.c2p(childProcess.exec, 'pwd')
      .then(stdout => {
        expect(stdout).contain('pisco-callback-to-promise');
      })
      .then(() => done())
      .catch(done);
  });
});