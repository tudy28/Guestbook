import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const UPLOAD_BLOB_TO_STORAGE_URL = `https://guestbook-functionapp.azurewebsites.net/api/addBlobToStorage`;
const GET_ALL_REVIEWS = `https://guestbook-functionapp.azurewebsites.net/api/getAllReviews`

@Injectable({
  providedIn: 'root'
})
export class BlobServiceService {

  constructor(private http: HttpClient) { }

  uploadBlob(newReviewBody:any): Observable<any> {
    return this.http.post(UPLOAD_BLOB_TO_STORAGE_URL, newReviewBody)
  }

  getAllReviews(): Observable<any>{
    return this.http.get(GET_ALL_REVIEWS);
  }
}
