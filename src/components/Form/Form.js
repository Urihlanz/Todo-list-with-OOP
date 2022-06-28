export default class Form {
  #addData;

  constructor(addData) {
    this.#addData = addData;
    document
      .querySelector('#form')
      .addEventListener('submit', this.#submitHandler);
  }

  #submitHandler = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target)).text;
    if (data == '') {
      alert('You can do more');

      return;
    }
    this.#addData(data);
    event.target.reset();
  };
}
