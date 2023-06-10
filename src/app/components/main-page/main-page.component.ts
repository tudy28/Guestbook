import { Component, OnInit } from '@angular/core';
import {BlobServiceService} from "../../services/blob-service.service";
import {Review} from "../../models/review";
import {MatDialog} from "@angular/material/dialog";
import {UploadReviewDialogComponent} from "../dialog-boxes/upload-review-dialog/upload-review-dialog.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private blobService:BlobServiceService, private dialog: MatDialog) { }
  reviews:Review[] = []

  ngOnInit(): void {
    this.fetchAllReviews()
  }


  useResizedImage(imageUrl: string) {
    var lastIndex = imageUrl.lastIndexOf('.');
    if (lastIndex !== -1) {
      var extension = imageUrl.slice(lastIndex);
      var urlWithoutExtension = imageUrl.slice(0, lastIndex);
      return urlWithoutExtension + '-resized' + extension;
    }
    return imageUrl;

  }


  openImageFullSize(imageUrl: any) {
    const newTab = window.open();
    //@ts-ignore
    newTab.document.write('<html><body style="margin: 0;"><img src="' + imageUrl + '"></body></html>');
    //@ts-ignore
    newTab.document.close();

  }


  private fetchAllReviews(){
    this.blobService.getAllReviews().subscribe(reviews=>{
      this.reviews = reviews;
      this.reviews.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    })
  }

  openInputDialog() {
    const dialogRef = this.dialog.open(UploadReviewDialogComponent, {
      width:'600px',
      height:'400px',
      data: {fileName: '', bytes: []},
    });
    dialogRef.afterClosed().subscribe(data => {
      const newReview = {
        fileName:data.fileName,
        file:data.file,
        comment:data.comment
      }
      console.log(newReview.file)
      this.blobService.uploadBlob(newReview).subscribe(_ => {
        this.fetchAllReviews();
      });
    });

  }

}


