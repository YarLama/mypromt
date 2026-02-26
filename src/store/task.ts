type TaskType = { "mark": string, "text": string };

class Task {
  private _tasks: TaskType[];
  private _data: string;
  constructor(tasks: TaskType[], data?: string) {
    this._tasks = tasks;
    this._data = data || "";
  }

  private getId(): string {
    //@ts-ignore
    const id = window.Temporal.Now.instant().epochMilliseconds.toString(36).slice(-6);
    return id;
  }

  private getTasksText(): string {
    const tasksText = [...this._tasks].map(task => `${task.mark} ${task.text}`).join('\n');
    return tasksText;
  }

  private getDataText(): string {
    return this._data !== "" ? ["```", this._data, "```"].join('\n') : "";
  }

  public updateTasks(newTasks: TaskType[]) {
    this._tasks = newTasks;
  }

  public updateData(data: string) {
    this._data = data;
  }

  public reset() {
    this._tasks = [];
    this._data = "";
  }

  public getFullText(): string {
    if (!this._tasks.length) return "";
    return [
      `[id] ${this.getId()}`,
      this.getDataText(),
      this.getTasksText()
    ].join('\n');
  }
}

export const task = new Task([], "")
