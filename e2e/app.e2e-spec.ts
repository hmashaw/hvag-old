import { HvagPage } from './app.po';

describe('hvag App', function() {
  let page: HvagPage;

  beforeEach(() => {
    page = new HvagPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hvag works!');
  });
});
