
let memberAccess = [{
    name: 'roser',
    memberNum: 100,
    nationality: 'spanish',
    someFunction: () => {
        return `Thank you ${this.name} has been confirmed. Welcome!`; 
    },
    name: 'char',
    memberNum: 101,
    nationality: 'english',
    someOtherFunction: () => {
        return `Thank you ${this.name} has been confirmed. Welcome`;
    }


    



   
}]

console.log(memberAccess[0].nationality)
console.log(memberAccess[0].someFunction());
