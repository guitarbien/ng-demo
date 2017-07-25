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
  });
});
