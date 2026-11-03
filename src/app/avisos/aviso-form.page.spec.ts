import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisoFormPage } from './aviso-form.page';

describe('AvisoFormPage', () => {
  let component: AvisoFormPage;
  let fixture: ComponentFixture<AvisoFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
