import Form from '@components/Form/Form';
import List from '@components/List/List';
import Task from '@components/List/Task';
import LocalStorageUtil from '@utils/localStorageUtil';

import './index.scss';

const localstorage = new LocalStorageUtil();
const list = new List(localstorage);
const form = new Form((text) => {
  const task = new Task(text).dataHandler();
  localstorage.addItem(task);
  list.render(localstorage.tasks);
});
