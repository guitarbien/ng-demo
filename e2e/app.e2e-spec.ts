
import { DemoPage } from './app.po';

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
});
