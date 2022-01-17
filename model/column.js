class Column {
    constructor(id, type, taskIds = []) {
            this.id = id;
            this.type = type;
            this.taskIds = taskIds;
    }
}

module.exports = Column;