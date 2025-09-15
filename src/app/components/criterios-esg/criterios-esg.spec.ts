import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriosEsg } from './criterios-esg';

describe('CriteriosEsg', () => {
  let component: CriteriosEsg;
  let fixture: ComponentFixture<CriteriosEsg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriteriosEsg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriteriosEsg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
