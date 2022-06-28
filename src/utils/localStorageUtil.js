export default class LocalStorageUtil {
  tasks = [];

  constructor() {
    this.tasks = this.getItems();
  }

  removeItem = (id) => {
    this.tasks = this.tasks.filter((item) => item.id != id);

    this.#setItems();
  };

  addItem = (task) => {
    this.tasks.unshift(task);

    this.#setItems();
  };

  changeItem = (id, text) => {
    this.tasks.forEach((task) => {
      if (task.id == id) {
        task.text = text;
      }
    });

    this.#setItems();
  };

  #setItems = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  };

  getItems = () => {
    const reference = localStorage.getItem('tasks');

    if (reference) {
      this.tasks = JSON.parse(reference);
    }

    return this.tasks;
  };
}
