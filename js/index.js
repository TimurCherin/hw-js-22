                                                        // ex 1
const Account = function ({login, email}){
        this.login = login;
        this.email = email;

    this.getInfo = function() {
        return {email: this.email, login: this.login}
    }
}
const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
    });
    console.log(mango.getInfo()) // Login: Mangozedog, Email: mango@dog.woof
    const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
    });
    console.log(poly.getInfo()) // Login: Poly, Email: poly@mail.com
                                                        // ex 2
const User = function ({name, age, followers}){
        this.name = name;
        this.age = age;
        this.followers = followers;
    
    this.getInfo = function() {
        return `${this.name} is ${this.age} years old and has ${this.followers} followers`
    }
}

const oleg = new User({
    name: 'Oleg',
    age: 2,
    followers: 20,
    });
    console.log(oleg.getInfo()) // User Mango is 2 years old and has 20 followers
    const dany = new User({
    name: 'Dany',
    age: 3,
    followers: 17,
    });
    console.log(dany.getInfo()) // User Poly is 3 years old and has 17 followers
                                                        // ex 3
const Storage = function(item){
        this.item = item
    
    this.getItems = function(){
        return this.item
    }
    this.addItem = function(newItem) {
        this.item.push(newItem)
        console.log(this.item) 
        return this.item
    }
    this.removeItem = function(remItem) {
        const indexOfRem = this.item.indexOf(remItem)
        this.item.splice(indexOfRem, 1)
        console.log(this.item)
        return this.item
    }
}
    
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
    ]);
    const items = storage.getItems();
    console.log(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
    storage.addItem('Дроїд');
    console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
    storage.removeItem('Пролонгер');
    console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]