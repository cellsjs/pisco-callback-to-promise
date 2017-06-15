'use strict';

const expect = require('chai').expect;
const pctp = require('../index');
const exec = require('child_process').exec;
const fs = require('fs');


/*global define, describe, it*/
describe('Testing the callbacks to promises', () => {
  it('Run the pwd command', (done) => {
    pctp.c2p(exec, 'pwd')
      .then(stdout => {
        expect(stdout).contain('pisco-callback-to-promise');
      })
      .then(() => done())
      .catch(done);
  });
  it('Run the pwd command with error', (done) => {
    pctp.c2p(exec, 'chmod', '755 noFile.txt')
      .catch((error) => {
        expect(error).not.equal(null);
        expect(error.error.toString()).contain('Command failed: chmod');
        done();
      });
  });
});