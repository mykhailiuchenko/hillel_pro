const model = {
  firstListItems: [
    'Сделать что то 1',
    'Сделать что то 2',
    'Сделать что то 3',
  ],
  secondListItems: [
    'Сделать что то 4',
    'Сделать что то 5',
    'Сделать что то 6',
  ]
};

const methods = {

  removeFirstToSecond() {
    if (this.firstListItems.length < 1) {
      return;
    } else {
      this.secondListItems.splice(0, 0, this.firstListItems[this.firstListItems.length - 1]);
      this.firstListItems.pop();
    }

  },

  removeSecondToFirst() {
    if (this.secondListItems.length < 1) {
      return;
    } else {
      this.firstListItems.splice(0, 0, this.secondListItems[this.secondListItems.length - 1]);
      this.secondListItems.pop();
    }

  }
};

const config = {
  el: "#app",
  data: model,
  methods: methods
};

const vue = new Vue(config);