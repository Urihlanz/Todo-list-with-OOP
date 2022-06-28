export default class Task {
  constructor(text) {
    this.text = text;
  }

  dataHandler = () => {
    return { text: this.text, id: Date.now() };
  };
}
