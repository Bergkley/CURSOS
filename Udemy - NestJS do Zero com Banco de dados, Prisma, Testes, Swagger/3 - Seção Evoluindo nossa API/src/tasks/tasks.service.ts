import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    findAll() {
        return [{id: 1 , task: "task 1"}]
    }

    findOne(id:string) {
        return "teste tarefas : " + id
    }
    create(body:any) {
        return body
    }
}
