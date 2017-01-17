const path = require('path');
const chai = require('chai');

global.chai = chai;
global.expect = chai.expect;
global.srcDir = path.resolve(__dirname, '../src');
global.rootDir = path.resolve(__dirname, '../');

process.env.NODE_ENV = 'test';

process.setMaxListeners(1000);
