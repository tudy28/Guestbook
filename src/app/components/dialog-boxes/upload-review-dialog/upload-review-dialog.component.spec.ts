import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadReviewDialogComponent } from './upload-review-dialog.component';

describe('UploadReviewDialogComponent', () => {
  let component: UploadReviewDialogComponent;
  let fixture: ComponentFixture<UploadReviewDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadReviewDialogComponent]
    });
    fixture = TestBed.createComponent(UploadReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
