import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getLogInButton().click();
    // wait to ensure that login state is stable
    browser.sleep(500);
  });

  xit('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should add and remove an item', () => {
    page.navigateTo();
    page.getAddItemButton().click();
    page.fillForm();

    browser.sleep(1000);

    const result = page.findItemByTitle();
    result.then((value) => {
      console.log('======> ITEM FOUND:' + JSON.stringify(value));
    });
    expect(result).toBe(page.uniqueTitle);

    let rows = page.getRows();
    let count = rows.count();
    expect(count).toBe(1);

    page.getRemoveBtn().click();
    browser.sleep(1000);

    rows = page.getRows();
    count = rows.count();
    expect(count).toBe(0);
  });



});
