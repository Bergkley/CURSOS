
export class ResponseTaskDto {
    name: string;
    description: string;
    id: number;
    completed: boolean;
    createdAt?: Date | null;
    userId: number | null;
  }