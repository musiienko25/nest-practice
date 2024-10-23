import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {

    private TASKS = [
        {
            name: "Record Video",
            isDone: false
        }
    ]
    getAll() {
        return this.TASKS
    }

    create(dto: TaskDto) {
        return this.TASKS.push({
            isDone: false,
            name: dto.name
        })
    }
}
