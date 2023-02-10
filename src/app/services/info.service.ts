import {Injectable} from '@angular/core';
import {Description, Info, Job, Project, Recommendation} from "./info";
import {Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  get recommendations(): Array<Recommendation> {
    return this._recommendations;
  }
  get linkedin(): string {
    return this._linkedin;
  }

  get github(): string {
    return this._github;
  }

  get website(): string {
    return this._website;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get city(): string {
    return this._city;
  }

  get jobs(): Array<Job> {
    return this._jobs;
  }

  get projects(): Array<Project> {
    return this._projects;
  }

  get aboutMe(): Array<Description> {
    return this._aboutMe;
  }

  get title(): string {
    return this._title;
  }

  get name(): string {
    return this._name;
  }

  private _name: string = '';
  private _title: string = '';
  private _city: string = '';
  private _phone: string = '';
  private _email: string = '';
  private _website: string = '';
  private _github: string = '';
  private _linkedin: string = '';
  private _aboutMe: Array<Description> = [];
  private _projects: Array<Project> = [];
  private _jobs: Array<Job> = [];
  private _recommendations: Array<Recommendation> = [];

  constructor(private http: HttpClient) {
  }

  getInfo(): Observable<Info> {
    // return this.http.get<Info>(environment.apiUrl + 'info').pipe(
    return this.http.get<Info>(environment.apiUrl).pipe(
      tap(next => {
        console.log('In the subscription:', next)
        this._name = next.name;
        this._title = next.title;
        this._city = next.city;
        this._phone = next.phone;
        this._email = next.email;
        this._website = next.website;
        this._github = next.github;
        this._linkedin = next.linkedin;
        this._aboutMe = next.about_me;
        this._projects = next.projects;
        this._jobs = next.jobs;
        this._recommendations = next.recommendations;
      })
    );
  }
}
