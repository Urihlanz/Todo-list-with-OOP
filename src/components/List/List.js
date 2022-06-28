export default class List {
  #template = document.querySelector('#list-template').content;
  #task;
  #localstorage;

  constructor(localstorage) {
    this.#localstorage = localstorage;

    this.render(this.#localstorage.getItems());
  }

  #delete = (id) => {
    this.#localstorage.removeItem(id);

    this.render(this.#localstorage.tasks);
  };

  #edit = (id) => {
    const newText = prompt('What been changed?');

    this.#localstorage.changeItem(id, newText);
    this.render(this.#localstorage.tasks);
  };

  #setEvents = (id) => {
    this.#task
      .querySelector('.task__btn-del')
      .addEventListener('click', () => this.#delete(id));
    this.#task
      .querySelector('.task__btn-edit')
      .addEventListener('click', () => this.#edit(id));
  };

  render = (data) => {
    const listEl = document.querySelector('#taskList');

    listEl.innerHTML = '';

    data.forEach((item) => {
      this.#task = this.#template.cloneNode(true).children[0];
      this.#task.querySelector('.task__text').textContent = item.text;

      listEl.append(this.#task);

      this.#setEvents(item.id);
    });
  };
}
