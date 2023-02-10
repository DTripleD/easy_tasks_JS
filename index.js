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

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]





// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.


class StringBuilder{

    constructor(initialValue){
        this.value = initialValue;
    }

    getValue(){
        return this.value;
    }

    padEnd(str){
        this.value += str;
    }

    padStart(str){
       this.value = str + this.value
    }

    padBoth(str){
      this.value = str + this.value + str;
    }
}



// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.


class Car {
    // Change code below this line

    #brand;

    constructor({ brand, model, price }) {
        this.#brand = brand;
        this.model = model;
        this.price = price;
    }

    getBrand(){
        return  this.#brand;
    }

    changeBrand(newBrand){
        this.#brand = newBrand;
    }
  
    // Change code above this line
  }
  


// Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.


class Storage {
    // Change code below this line
    
    #items;

    constructor(items) {
      this.#items = items;
    }
  
    getItems() {
      return this.#items;
    }
  
    addItem(newItem) {
      this.#items.push(newItem);
    }
  
    removeItem(itemToRemove) {
      this.#items = this.#items.filter(item => item !== itemToRemove);
    }
  }
  
  // Change code above this line
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
  

//   Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

//   Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
  

class StringBuilder {
    // Change code below this line
  
    #value;

    constructor(initialValue) {
      this.#value = initialValue;
    }
  
    getValue() {
      return this.#value;
    }
  
    padEnd(str) {
      this.#value += str;
    }
  
    padStart(str) {
      this.#value = str + this.#value;
    }
  
    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
    }
  }
  
  // Change code above this line
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."
  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="



//   Виконай рефакторинг класу Car. Зроби властивості model і price приватними, а також #brand. Стандартизуй публічний інтерфейс класу, 
//   замінивши вже оголошені методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.


class Car {
    // Change code below this line
    #brand;
    #model;
    #price;
  
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.#model = model;
      this.#price = price;
    }
  
    get brand() {
      return this.#brand;
    }
  
    set brand(newBrand) {
      this.#brand = newBrand;
    }
  
    get model() {
      return this.#model;
    }
  
    set model(newModel) {
      this.#model = newModel;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
      this.#price = newPrice;
    }
    // Change code above this line
  }
  
  

// Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

class Car {
    // Change code below this line

    static MAX_PRICE = 50000;

    #price;
  
    constructor({ price }) {
      this.#price = price;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {

        if(newPrice > Car.MAX_PRICE)){
            return this.#price;
        } else {
          this.#price = newPrice;          
        }


    }
    // Change code above this line
  }
  
  const audi = new Car({ price: 35000 });
  console.log(audi.price); // 35000
  
  audi.price = 49000;
  console.log(audi.price); // 49000
  
  audi.price = 51000;
  console.log(audi.price); // 49000
  

// Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).


class Car {
    static #MAX_PRICE = 50000;
    // Change code below this line
    static checkPrice(price){
        if (price > Car.#MAX_PRICE) {
            return "Error! Price exceeds the maximum";
        } else {
            return "Success! Price is within acceptable limits";
        }
    }
    // Change code above this line
    constructor({ price }) {
      this.price = price;
    }
  }
  
  const audi = new Car({ price: 36000 });
  const bmw = new Car({ price: 64000 });
  
  console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
  console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
  



//   У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

//   Оголоси клас Admin, який наслідує від класу User
//   Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
  


  class User {
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  // Change code below this line

  class Admin extends User{
    static AccessLevel = {
        BASIC: "basic", 
        SUPERUSER: "superuser"
    }
  }



// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і accessLevel. 
// Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.


class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  
class Admin extends User {
// Change code below this line
    constructor({email, accessLevel}){
        super (email);
        this.accessLevel = accessLevel
    }

    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    // Change code above this line
}
  
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"