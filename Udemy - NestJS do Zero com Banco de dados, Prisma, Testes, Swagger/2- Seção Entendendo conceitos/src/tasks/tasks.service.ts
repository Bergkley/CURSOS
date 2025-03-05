import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    listAllTask() {
        return [{id: 1 , task: "task 1"}]
    }

    findOneTask() {
        return "teste tarefas"
    }
}
