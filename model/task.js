class Task {
    constructor(id, columnId, taskName, taskType, status ) {
            this.id = id;
            this.columnId = columnId;
            this.taskName = taskName;
            this.taskType = taskType;
            this.status = status;
    }
}

module.exports = Task;