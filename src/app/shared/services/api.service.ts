import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ApiService<T> {

  private host: string;
  private actionUrl: string;

  constructor(private http: HttpClient, private apiExtension?: string) {
    this.host = 'http://localhost:3010/';
    this.actionUrl = 'http://localhost:3010/' + apiExtension;
  }

  public findAll(): any {
    return this.http.get<T>(this.actionUrl);
  }

  public find(id: number): Observable<T> {
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


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    return next.handle(req);
  }
}
