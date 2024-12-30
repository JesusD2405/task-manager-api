import { UseCase } from "../../base/use-case";
import { TaskModel } from "../../models/task.model";
import { TaskRepository } from "../../repository/task.repository";

export class GetAllTaskUsecase implements UseCase<void, TaskModel[]> {
  constructor(private taskRepository: TaskRepository) {}

  execute(_param: void): Promise<TaskModel[]> {
    return this.taskRepository.getAll();
  }
}
