import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Forms } from "./forms.model";

@Injectable({ providedIn: "root" })
export class FormsService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}
  values = new Subject<any>();

  createForms(email: string, subscriptions: string, password: string) {
    const formData: Forms = {
      email: email,
      subscriptions: subscriptions,
      password: password,
    };
    this.http
      .post<FormData>(
        "https://angular-start21-default-rtdb.firebaseio.com/forms.json",
        formData
      )
      .subscribe(
        (response) => {
          //console.log(response);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchForms() {
    let Params = new HttpParams().append("print", "pretty");
    Params = Params.append("print", "cool");
    return this.http
      .get<{ [key: string]: Forms }>(
        "https://angular-start21-default-rtdb.firebaseio.com/forms.json",
        {
          headers: new HttpHeaders({ custom: "hello" }),
          //params : new HttpParams().set('print', 'pretty')
          params: Params,
        }
      )
      .pipe(
        map((response) => {
          const FormArray: Forms[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              FormArray.push({ ...response[key], id: key });
            }
          }
          return FormArray;
        }),
        catchError((errRes) => {
          // send to server
          return throwError(errRes);
        })
      );
  }

  clearForms() {
    return this.http.delete(
      "https://angular-start21-default-rtdb.firebaseio.com/forms.json"
    );
  }
}
