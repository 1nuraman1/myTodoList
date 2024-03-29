import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = "https://64e72d8ab0fd9648b78f78c1.mockapi.io/task/lists/tasks"
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.serviceURL, task)
  }

  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.serviceURL)
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.serviceURL + '/' + task.id)
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.serviceURL + '/' + task.id, task)
  }

}
