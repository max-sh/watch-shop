import { WatchShopPage } from './app.po';

describe('watch-shop App', () => {
  let page: WatchShopPage;

  beforeEach(() => {
    page = new WatchShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
