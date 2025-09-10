import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyskills } from './keyskills';

describe('Keyskills', () => {
  let component: Keyskills;
  let fixture: ComponentFixture<Keyskills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keyskills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Keyskills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
