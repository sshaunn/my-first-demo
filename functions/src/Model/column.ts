class Column{
    private id: string;
    private type: string;
    private taskIds: string[];

    constructor(id: string, type: string, taskIds: string[]){
        this.id = id;
        this.type = type;
        this.taskIds = taskIds;
    }

    public setColumnId(id: string): void {
        this.id = id;
    }

    public setColumnType(type: string): void {
        this.type = type;
    }

    public setColumnTaskIds(taskIds: string[]): void {
        this.taskIds = taskIds;
    }

    public getColumnId(): string {
        return this.id;
    }

    public getColumnType(): string {
        return this.type;
    }

    public getColumnTaskIds(): string[] {
        return this.taskIds;
    }
}

export = Column;