import { PyfusbalUiPage } from './app.po';

describe('pyfusbal-ui App', function() {
  let page: PyfusbalUiPage;

  beforeEach(() => {
    page = new PyfusbalUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
