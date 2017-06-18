import { AngularEstudosPage } from './app.po';

describe('angular-estudos App', () => {
  let page: AngularEstudosPage;

  beforeEach(() => {
    page = new AngularEstudosPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
