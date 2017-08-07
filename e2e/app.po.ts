import { browser, by, element } from 'protractor';

export class DemoPage {
  navigateTo(): DemoPage {
    browser.get('/');
    return this;
  }

  getTodos(): any {
    return element(by.css('app-root h1')).getText();
  }

  getPlaceHolder(): any {
    return element(by.css('.new-todo')).getAttribute('placeholder');
  }

  setTodo(input: string): DemoPage {
    element(by.css('.new-todo')).sendKeys(input);
    return this;
  }

  getTodo(): any {
    return element(by.css('.new-todo')).getAttribute('value');
  }

  selectChoose(input: string): any {
    element(by.id('platformSelector')).all(by.cssContainingText('option', input)).click();
    return;
  }

  getChoosed(): any {
    return element(by.css('.platformChose')).getText();
  }

  selectCount(): any {
    return element(by.id('platformSelector')).all(by.tagName('option')).count();
  }
}
