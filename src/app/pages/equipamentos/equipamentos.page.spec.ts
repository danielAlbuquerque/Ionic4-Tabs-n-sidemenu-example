import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosPage } from './equipamentos.page';

describe('EquipamentosPage', () => {
  let component: EquipamentosPage;
  let fixture: ComponentFixture<EquipamentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
