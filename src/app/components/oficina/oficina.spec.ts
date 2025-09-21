import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estudio } from './estudio';

describe('Estudio', () => {
  let component: Estudio;
  let fixture: ComponentFixture<Estudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estudio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estudio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
