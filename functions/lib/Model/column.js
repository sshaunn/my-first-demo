"use strict";
class Column {
    constructor(id, type, taskIds) {
        this.id = id;
        this.type = type;
        this.taskIds = taskIds;
    }
    setColumnId(id) {
        this.id = id;
    }
    setColumnType(type) {
        this.type = type;
    }
    setColumnTaskIds(taskIds) {
        this.taskIds = taskIds;
    }
    getColumnId() {
        return this.id;
    }
    getColumnType() {
        return this.type;
    }
    getColumnTaskIds() {
        return this.taskIds;
    }
}
module.exports = Column;
//# sourceMappingURL=column.js.map