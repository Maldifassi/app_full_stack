import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  api = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}
  getTasks() { return this.http.get<any[]>(this.api); }
  addTask(title: string) { return this.http.post(this.api, { title }); }
  deleteTask(id: number) { return this.http.delete(`${this.api}/${id}`); }
}
