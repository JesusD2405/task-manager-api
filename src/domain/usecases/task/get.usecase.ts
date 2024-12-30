import { UseCase } from "../../base/use-case";
import { TaskModel } from "../../models/task.model";
import { TaskRepository } from "../../repository/task.repository";

export class GetTaskUsecase implements UseCase<string, TaskModel> {
  constructor(private taskRepository: TaskRepository) {}

  execute(param: string): Promise<TaskModel> {
    return this.taskRepository.get(param);
  }
}
