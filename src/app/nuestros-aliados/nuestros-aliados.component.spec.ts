import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosAliadosComponent } from './nuestros-aliados.component';

describe('NuestrosAliadosComponent', () => {
  let component: NuestrosAliadosComponent;
  let fixture: ComponentFixture<NuestrosAliadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrosAliadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosAliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
