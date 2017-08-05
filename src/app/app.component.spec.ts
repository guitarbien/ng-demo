import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let target: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TitleComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  describe(`TitleComponent`, () => {
    it('should use app-title in HTML', () => {
      htmlElement = debugElement.query(By.css('app-title')).nativeElement;
      expect(htmlElement).toBeTruthy();
    });
  });

  describe(`Property Binding`, () => {
    it(`should use 'inputHint' field on 'placeholder' attribute in HTML`, () => {
      component.inputHint = 'fake';
      fixture.detectChanges();

      htmlElement = debugElement.query(By.css('.new-todo')).nativeElement;
      expect(htmlElement.getAttribute('placeholder')).toBe('fake');
    });

    it(`should have inputHint field as 'What needs to be done?' in class`, () => {
      expect(target.inputHint).toBe('What needs to be done?');
    });
  });

  describe(`Event Binding`, () => {
    it(`整合測試 enter 按下時會呼叫 addTodo()`, () => {
      spyOn(component, 'addTodo');
      debugElement.query(By.css('.new-todo')).triggerEventHandler('keyup.enter', null);

      expect(component.addTodo).toHaveBeenCalled();
    });

    it(`單元測試 addTodo() 可以將 input 傳入陣列 todos 中，並清空 input`, () => {
      const todoStub = <HTMLInputElement> {
        'value': 'fake'
      };
      target.addTodo(todoStub);

      expect(target.todos.length).toBe(1);
      expect(todoStub.value).toBe('');
    });
  });

  describe(`homework02`, () => {
    it(`整合測試 select onChange 時會呼叫 changePlatform()`, () => {
      spyOn(component, 'changePlatform');
      debugElement.query(By.css('#platformSelector')).triggerEventHandler('change', null);

      expect(component.changePlatform).toHaveBeenCalled();
    });

    it(`單元測試 changePlatform() 會將當下所選的值放到 currentPlatform 中`, () => {
      const platformStub = <HTMLInputElement> {
        'value': 'AWS'
      }
      target.changePlatform(platformStub);

      expect(target.currentPlatform).toBe('1');
    });
  });
});
