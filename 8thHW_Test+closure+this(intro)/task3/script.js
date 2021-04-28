// в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. Метод addRecord добавляет все свойства переданных объектов в data.

//  data = {
//      addRecord: function(){},
//      p: 600,
//      str: 'hello',
//      y: -50
//  }
//  data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
//  data.x // 50
//  data.y // 20
//  data.z // 30
//  data.p // 600
//  data.str // 'hello'

 data = {
     addRecord: function() {
       var argLength = arguments.length;
       for(var i = 0; i < argLength; i++) {
         for(var key in arguments[i]) {
           this[key] = arguments[i][key];
         }
       }
     },
     p: 600,
     str: 'hello',
     y: -50
 }
 console.log(data);
 data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
 console.log(data);
