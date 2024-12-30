import { UseCase } from "../../base/use-case";
import { TaskModel } from "../../models/task.model";
import { TaskRepository } from "../../repository/task.repository";

export class UpdateTaskUsecase implements UseCase<TaskModel, TaskModel> {
  constructor(private taskRepository: TaskRepository) {}

  execute(param: TaskModel): Promise<TaskModel> {
    return this.taskRepository.update(param);
  }
}
