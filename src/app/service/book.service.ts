import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getBooks = ():Observable<Book[]> => {
    return this.http.get<Book[]>(`${this.baseUrl}/book/api/`);
  } 

  getBookById = (id: number): Observable<Book> => {
    return this.http.get<Book>(`${this.baseUrl}/book/api/${id}`);
  }
  
  downloadFile(url:string, filename:string): void {
       // Set the headers to force the browser to download the file
       const headers = new HttpHeaders().append('Content-Type', 'application/pdf');
    
       this.http.get(url, { headers: headers, responseType: 'blob' })
         .subscribe((response: Blob) => {
           // Create a temporary URL object to generate a download link
           const fileUrl = window.URL.createObjectURL(response);
   
           // Create a link element and trigger a click event to initiate the download
           const link = document.createElement('a');
           link.href = fileUrl;
           link.setAttribute('download', filename); // Specify the filename for the downloaded file
           link.click();
   
           // Clean up the temporary URL object
           window.URL.revokeObjectURL(fileUrl);
         });
  }
}
