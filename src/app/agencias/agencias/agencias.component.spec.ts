import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciasComponent } from './agencias.component';

describe('AgenciasComponent', () => {
  let component: AgenciasComponent;
  let fixture: ComponentFixture<AgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
