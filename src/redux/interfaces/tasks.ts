export interface Task {
    id: string,
    name: string;
    status: string;
    description: string;
    price: number;
}

export interface taskState {
    tasks: Task[]
}