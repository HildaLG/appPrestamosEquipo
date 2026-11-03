import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrestamoListPage } from './prestamo-list.page';

describe('PrestamoListPage', () => {
  let component: PrestamoListPage;
  let fixture: ComponentFixture<PrestamoListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
