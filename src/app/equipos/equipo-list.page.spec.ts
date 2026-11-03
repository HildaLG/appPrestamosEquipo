import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipoListPage } from './equipo-list.page';

describe('EquipoListPage', () => {
  let component: EquipoListPage;
  let fixture: ComponentFixture<EquipoListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
