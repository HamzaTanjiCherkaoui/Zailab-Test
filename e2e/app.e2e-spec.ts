import { ZailabBankPage } from './app.po';

describe('zailab-bank App', () => {
  let page: ZailabBankPage;

  beforeEach(() => {
    page = new ZailabBankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
