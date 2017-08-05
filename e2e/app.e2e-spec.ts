
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

    expect(page.getTodo()).toBe('');
  });

  it(`在 select 中選擇 AWS 畫面會呈現 '1', 選 Azure 畫面會呈現 '2', 選 Aliyun 畫面會呈現 '3'`, () => {
    page.navigateTo()
      .selectChoose('AWS');
    expect(page.getChoosed()).toBe('1');

    page.navigateTo()
      .selectChoose('Azure');
    expect(page.getChoosed()).toBe('2');

    page.navigateTo()
      .selectChoose('Aliyun');
    expect(page.getChoosed()).toBe('3');
  });
});
