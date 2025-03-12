import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskUtils {
    splitString(text: string): string[] {
        return text.split(' ');
    }
}