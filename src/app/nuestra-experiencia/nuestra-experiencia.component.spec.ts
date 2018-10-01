import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraExperienciaComponent } from './nuestra-experiencia.component';

describe('NuestraExperienciaComponent', () => {
  let component: NuestraExperienciaComponent;
  let fixture: ComponentFixture<NuestraExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestraExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
