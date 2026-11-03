import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisoListPage } from './aviso-list.page';

describe('AvisoListPage', () => {
  let component: AvisoListPage;
  let fixture: ComponentFixture<AvisoListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
