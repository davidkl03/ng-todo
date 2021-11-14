import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ITodo } from 'src/app/models/todo.interface'
import { TodoService } from 'src/app/services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  public todoData: Array<ITodo> = []
  private subscription: Subscription = new Subscription()

  constructor(private todeService: TodoService) {}

  ngOnInit(): void {
    this.initMockData()
  }

  initMockData() {
    this.subscription.add(
      this.todeService.getTodoData().subscribe((data) => {
        this.todoData = data;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
