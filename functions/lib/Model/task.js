"use strict";
class Task {
    constructor(id, columnId, taskName, taskType, status) {
        this.id = "";
        this.id = id;
        this.columnId = columnId;
        this.taskName = taskName;
        this.taskType = taskType;
        this.status = status;
    }
    setTaskId(id) {
        this.id = id;
    }
    setTaskColumnId(columnId) {
        this.columnId = columnId;
    }
    setTaskName(taskName) {
        this.taskName = taskName;
    }
    setTaskType(taskType) {
        this.taskType = taskType;
    }
    setStatus(status) {
        this.status = status;
    }
    getTaskId() {
        return this.id;
    }
    getTaskColumnId() {
        return this.columnId;
    }
    getTaskName() {
        return this.taskName;
    }
    getTaskType() {
        return this.taskType;
    }
    getTaskStatus() {
        return this.status;
    }
}
//# sourceMappingURL=task.js.map