import { CMailAppPage } from './app.po';

describe('c-mail-app App', function() {
  let page: CMailAppPage;

  beforeEach(() => {
    page = new CMailAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
