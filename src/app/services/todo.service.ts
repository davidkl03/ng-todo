import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { ITodo } from '../models/todo.interface'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private mock: ITodo[] = [
    {
      title: "Mockingbird Don't Sing",
      description: 'Drama',
      isComplited: false,
      isArchived: false,
      endDate: '4/14/2021',
    },
    {
      title: "Sharon's Baby",
      description: 'Horror',
      isComplited: false,
      isArchived: true,
      endDate: '3/11/2021',
    },
    {
      title: 'No Turning Back',
      description: 'Adventure|Drama|Thriller',
      isComplited: false,
      isArchived: true,
      endDate: '12/29/2020',
    },
    {
      title: 'Nine Dead Gay Guys',
      description: 'Comedy|Crime',
      isComplited: false,
      isArchived: true,
      endDate: '4/23/2021',
    },
    {
      title: 'General, The',
      description: 'Crime',
      isComplited: true,
      isArchived: true,
      endDate: '6/12/2021',
    },
    {
      title: 'Hotel Transylvania',
      description: 'Animation|Children|Comedy',
      isComplited: true,
      isArchived: false,
      endDate: '12/26/2020',
    },
  ]

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  constructor() {}

  public getTodoData(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable()
  }
}
