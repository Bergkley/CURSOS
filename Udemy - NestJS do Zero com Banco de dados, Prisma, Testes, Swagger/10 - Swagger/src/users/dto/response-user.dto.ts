class ITask{
    id: number;
    name: string;
    createdAt?: Date | null;
    description: string;
    completed: boolean;
    userId: number | null;
}

export class ResponseFindOneUserDto {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
    tasks: ITask[];
}

export class ResponseCreateUserDto {
    id: number;
    name: string;
    email: string;
}

export class ResponseUpdateAvatarUserDto {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
}