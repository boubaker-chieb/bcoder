import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCV } from './download-cv';

describe('DownloadCV', () => {
  let component: DownloadCV;
  let fixture: ComponentFixture<DownloadCV>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCV]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCV);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
