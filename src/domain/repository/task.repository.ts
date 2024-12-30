import { TaskModel } from "../models/task.model";

export abstract class TaskRepository {
  abstract getAll(): Promise<TaskModel[]>;
  abstract get(id: string): Promise<TaskModel>;
  abstract create(param: TaskModel): Promise<TaskModel>;
  abstract update(param: TaskModel): Promise<TaskModel>;
  abstract delete(id: string): Promise<TaskModel>;
}
