import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosProgramasComponent } from './nuestros-programas.component';

describe('NuestrosProgramasComponent', () => {
  let component: NuestrosProgramasComponent;
  let fixture: ComponentFixture<NuestrosProgramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrosProgramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
