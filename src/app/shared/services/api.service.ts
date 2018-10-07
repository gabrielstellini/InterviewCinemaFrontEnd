import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class ApiService<T> {

  private host: string;
  private actionUrl: string;

  constructor(private http: HttpClient, apiExtension?: string) {
    this.host = 'http://localhost:3010/';
    this.actionUrl = 'http://localhost:3010/' + apiExtension;
  }

  public findAll(): any {
    return this.http.get<T>(this.actionUrl);
  }

  public find(id: any): Observable<T> {
    return this.http.get<T>(this.actionUrl + id);
  }

  public post(payload: T): Observable<T> {
    return this.http.post<T>(this.actionUrl, payload);
  }

  public update(id: number, itemToUpdate: any): Observable<T> {
    return this.http
      .put<T>(this.actionUrl + id, itemToUpdate);
  }

  public delete(id: number): Observable<T> {
    return this.http.delete<T>(this.actionUrl + id);
  }

  protected setApiUrl(extension: string) {
    this.actionUrl = this.host + extension;
  }
}
