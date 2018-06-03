import { browser, by, element } from 'protractor';

export class AppPage {

  uniqueTitle: string;

  constructor() {
    this.uniqueTitle = 'kalesony' + Date.now();
  }
  navigateTo() {
    return browser.get('/items');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getLogInButton() {
    return element(by.buttonText('log in'));
  }

  getAddItemButton() {
    return element(by.buttonText('add item'));
  }

  fillForm(): any {
    const form = element(by.id('add-item-form'));
    form.element(by.name('title')).sendKeys(this.uniqueTitle);
    form.element(by.name('price')).sendKeys('3');
    form.element(by.name('category')).element(by.cssContainingText('option', 'clothes')).click();
    browser.sleep(500);
    form.element(by.buttonText('send item')).click();
  }

  findItemByTitle() {
    const searchByTitle = element(by.id('search-by-title'));
    searchByTitle.sendKeys(this.uniqueTitle);
    return searchByTitle.getAttribute('value');
  }

  getRows() {
    const dataGrid = element(by.tagName('app-datagrid'));
    const rows = dataGrid.all(by.css('tbody tr'));
    return rows;
  }

  getFirstRow() {
    const dataGrid = element(by.tagName('app-datagrid'));
    const row = dataGrid.element(by.css('tbody tr'));
    return row;
  }

  getRemoveButton() {
    const row = this.getFirstRow();
    const btn = row.element(by.buttonText('remove'));
    return btn;
  }

  getRemoveBtn() {
    const dataGrid = element(by.tagName('app-datagrid'));
    const row = dataGrid.element(by.css('tbody tr'));
    return row.element(by.id('removebtn'));
  }

  customStringify(v) {
    const cache = new Map();
    return JSON.stringify(v, function (key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.get(value)) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our map
        cache.set(value, true);
      }
      return value;
    });
  }
}
