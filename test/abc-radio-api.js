let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;

chai.use(chaiHttp);

describe('ABC Radio programs API', () => {
  describe('/GET/:identifier program', (done) => {
    it('should GET the program specified by the given identifier', (done) => {
      let server = 'http://program.abcradio.net.au';
      let identifier = 'ppJj0E8g2R';
      chai.request(server)
        .get(`/api/v1/programs/${identifier}.json`)
        .end((error, response) => {
          var body = response.body;

          expect(response).to.have.status(200);
          expect(body).to.be.an('object');
          expect(body['entity']).to.eql('Program');
          expect(body['arid']).to.eql('ppJj0E8g2R');
          expect(body['title']).to.eql('Mornings');
          expect(body['mini_synopsis']).to.include('Mornings presents local news and issues');
          expect(body['short_synopsis']).to.include('Mornings presents local news and issues');
          expect(body['medium_synopsis']).to.include('questions to the ACT Chief Minster each Friday');
          expect(body['created_utc']).to.eql('2014-10-09T05:01:49+0000');
          expect(body['last_updated_utc']).to.eql('2016-09-05T06:49:46+0000');
          expect(body['service_airport_code']).to.eql(null);

        done();
      });
    });
  });
});
