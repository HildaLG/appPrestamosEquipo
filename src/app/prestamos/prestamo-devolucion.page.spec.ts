import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrestamoDevolucionPage } from './prestamo-devolucion.page';

describe('PrestamoDevolucionPage', () => {
  let component: PrestamoDevolucionPage;
  let fixture: ComponentFixture<PrestamoDevolucionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoDevolucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
