import Response  from '../source/response.js';
import Validator from '../source/validator.js';
import Emitter   from '../source/emitter.js';

import chai, { expect } from 'chai';
import sinon            from 'sinon';
import sinonChai        from 'sinon-chai';

chai.use(sinonChai);


describe('Response', () => {

  it('should export a Response object', () => {
    expect(Response).to.not.be.null;
    expect(Response.name).to.equal('Response');
  });

  describe('.accountBalance', () => {
    it('should validate the response and emit the result', sinon.test(function() {
      let response = new Response();
      let validator = new Validator();
      let emitter = new Emitter();

      let stub1 = this.stub(validator, 'response');
      let stub2 = this.stub(emitter, 'log');

      response.validator = validator;
      response.emitter = emitter;

      response.accountBalance(null, { value: 123 });

      expect(stub1).to.be.called;
      expect(stub1).to.be.calledWith(null, { value: 123 });
      expect(stub2).to.be.called;
      expect(stub2).to.be.calledWith(123);
    }));
  });
});
