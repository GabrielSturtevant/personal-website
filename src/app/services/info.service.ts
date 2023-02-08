import {Injectable} from '@angular/core';
import {Info, INFO, Job, Project} from "./info";
import {Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InfoService {
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

  get aboutMe(): Array<string> {
    return this._aboutMe;
  }

  get title(): string {
    return this._title;
  }

  get name(): string {
    return this._name;
  }

  private info: Info = INFO;
  private _name: string = '';
  private _title: string = '';
  private _city: string = '';
  private _phone: string = '';
  private _email: string = '';
  private _website: string = '';
  private _github: string = '';
  private _linkedin: string = '';
  private _aboutMe: Array<string> = [];
  private _projects: Array<Project> = [];
  private _jobs: Array<Job> = [];

  constructor() {
  }

  getInfo(): Observable<Info> {
    return of(this.info).pipe(
      tap(next => {
        this._name = next.name;
        this._title = next.title;
        this._city = next.city;
        this._phone = next.phone;
        this._email = next.email;
        this._website = next.website;
        this._github = next.github;
        this._linkedin = next.linkedin;
        this._aboutMe = next.aboutMe;
        this._projects = next.projects;
        this._jobs = next.jobs;
      })
    );
  }
}
