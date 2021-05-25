// Создаем приложение, в котором существует компонент Diagrams 
// задающий кол-во столбцов-диаграмы(7 вертикальных блоков, высотой 100-300px).
// 1.2) Поведение конкретного столбца: Каждый обладает уникальным цветом, именем, 
// значением(задает высоту блоку).

// 1.3) Под каждым есть регулятор (input type="range") при перемещении которого - 
// меняется высота соответствующего блока.

// Измененные значения сохраняются в локальном хранилище. При перезагрузке страницы - 
// выбранные настройки сохраняются.
// 3 *) Создать кнопку, которая отфильтрует столбцы по возрастанию.

// 4 *) При перезагрузке страницы отфильтрованный ряд остается.


Vue.component('diagrams', {
  data() {
     return {
        dataDiagram: [
              {
                id: 1,
                name: 'First',
                color: 'red',
                height: 100
              },
              {
                id: 2,
                name: 'Second',
                color: 'blue',
                height: 120
              },
              {
                id: 3,
                name: 'Third',
                color: 'orange',
                height: 140
              },
              {
                id: 4,
                name: 'Fourth',
                color: 'green',
                height: 220
              },
              {
                id: 5,
                name: 'Fifth',
                color: 'black',
                height: 150
              },
              {
                id: 6,
                name: 'Sixth',
                color: 'yellow',
                height: 170
              },
              {
                id: 7,
                name: 'Seventh',
                color: 'white',
                height: 110
              },
          ]
    }
  },

  mounted() {
    for(let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      for (let j = 0; j < this.dataDiagram.length; j++) {
        if(key == this.dataDiagram[j].name){
          this.dataDiagram[j].height = localStorage.getItem(key);
        }
      }
    }
    this.filter();

  },
  methods: {
    setStore(name, event) {
      localStorage.setItem(name, event);
    },
    filter() {
      function compare(a, b) {
        return (a.height - b.height)
      }
      const sortedDiagrams = this.dataDiagram.sort(compare);
      localStorage.setItem(sortedDiagrams, JSON.stringify(sortedDiagrams));
      return sortedDiagrams;
    }
  },
  template: `
  <div class="diagrams">
    <div v-for="diagram in dataDiagram" :key="diagram.id">
      {{diagram.name}}
      <div class="rectangle"
        v-bind:style="{ background: diagram.color, height: diagram.height + 'px'}"
      ></div>
      <input
        type="range"
        min="100"
        max="300"
        v-model="diagram.height"
        @input="setStore(diagram.name, $event.target.value)"
      />
      <input 
      type="number" 
      min="100" 
      max="300" 
      v-model="diagram.height" 
      @input="setStore(diagram.name, $event.target.value)">
    </div>
    <button @click="filter">Фильтр</button>
  </div>
  `
});


const vue = new Vue({
  el: '#app',
  data: {}
});