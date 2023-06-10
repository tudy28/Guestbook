import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-upload-review-dialog',
  templateUrl: './upload-review-dialog.component.html',
  styleUrls: ['./upload-review-dialog.component.scss']
})
export class UploadReviewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UploadReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



  public async onFileSelected(event: Event) {
    // @ts-ignore
    const file=event.target.files[0]
    this.data.fileName=file.name
    this.data.file = await this.convertFileToBase64(file);
  }

  private convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String.split(',')[1]); // Extract the base64 data without the "data:image/jpeg;base64," prefix
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }
}
