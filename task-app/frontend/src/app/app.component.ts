import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  tasks:any[] = [];
  title = '';
  constructor(private taskService: TaskService) {}
  ngOnInit() { this.load(); }
  load() { this.taskService.getTasks().subscribe(r => this.tasks = r); }
  add() { this.taskService.addTask(this.title).subscribe(() => { this.title=''; this.load(); }); }
  del(id:number) { this.taskService.deleteTask(id).subscribe(() => this.load()); }
}
