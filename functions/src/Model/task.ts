class Task {
    private id: string = "";
    private columnId: string;
    private taskName: string;
    private taskType: string;
    private status: boolean;

    constructor(id: string, columnId: string, taskName: string, taskType: string, status: boolean) {
        this.id = id;
        this.columnId = columnId;
        this.taskName = taskName;
        this.taskType = taskType;
        this.status = status;
    }

    public setTaskId(id: string): void {
        this.id = id;
    }

    public setTaskColumnId(columnId: string): void {
        this.columnId = columnId;
    }

    public setTaskName(taskName: string): void {
        this.taskName = taskName;
    }

    public setTaskType(taskType: string): void {
        this.taskType = taskType;
    }

    public setStatus(status: boolean): void {
        this.status = status;
    }

    public getTaskId(): string {
        return this.id;
    }

    public getTaskColumnId(): string {
        return this.columnId;
    }

    public getTaskName(): string {
        return this.taskName;
    }

    public getTaskType(): string {
        return this.taskType;
    }

    public getTaskStatus(): boolean {
        return this.status;
    }
}