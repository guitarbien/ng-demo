
import { DemoPage } from './app.po';
import { protractor } from 'protractor/built/ptor';

describe('demo App', () => {
  let page: DemoPage;

  beforeEach(() => {
    page = new DemoPage();
  });

  it(`should display 'todos' in h1`, () => {
    page.navigateTo();
    expect(page.getTodos()).toBe('todos');
  });

  it(`should display 'What needs to be done?' on 'placeholder' attribute`, () => {
    page.navigateTo();
    expect(page.getPlaceHolder()).toBe('What needs to be done?');
  });

  it(`在 input 輸入'Study Angular'按下 enter 後會將 input 清空`, () => {
    page.navigateTo()
      .setTodo('Study Angular')
      .setTodo(protractor.Key.ENTER);

    expect(page.getTodo().toBe(''));
  });
});
