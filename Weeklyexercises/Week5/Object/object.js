/* function myPerson (myInfo){
  console.log('Name: '+ myInfo.name + ' Age: ' + myInfo.age);
}
var myInfo = ({
name: 'Joanna',
age: 22,
})
myPerson(myInfo); */
/* var me = {
  name: 'Staffan',
  age: 21,
  who: function() {
    console.log('Name: ' + this.name + ' Age: ' + this.age);
  }
}

me.who(); */
/* var me = {
    name: 'Staffan',
    age: 21,
    friends: [],
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    printFriends: function() {
        console.log(this.friends.join(', '));
    }

};

me.addFriend('Jakob');
me.addFriend('Gösta');
me.printFriends(); */
/* var Person = (function() {

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.who = function() {
        console.log('Name: ' + this.name + ' Age: ' + this.age);
    };

    Person.prototype.takePantsOff = function(person) {
        console.log(this.name + ' is going to take ' + person.name + 's pants off!');
    };

    return Person;
}());

var joanna = new Person('Joanna', 22);
var staffan = new Person('Staffan', 21);

staffan.takePantsOff(joanna); */
function wordCount(string) {
  var result = string.split(' ');
  console.log(result.length);
}
wordCount('Hello Joanna');
