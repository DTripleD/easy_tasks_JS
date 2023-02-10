// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.

class Car {
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    // Change code below this line
    getPrice(){
        return this.price;
    }
  
    changePrice(newPrice){
        this.price = newPrice;
    }
  
    // Change code above this line
  }
  



//   Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

//   Оголоси наступні методи класу:
  
//   getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
//   addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
//   removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
//   Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

class Storage {
    
    constructor(array){
        this.items = array;
    }

    getItems(){
        return this.items;
    }

    addItem(newItem){
        this.items.push(newItem);
    }

    removeItem(itemToRemove){
        const index = this.items.indexOf(itemToRemove);
        this.items.splice(index, 1);
    }
}  

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
