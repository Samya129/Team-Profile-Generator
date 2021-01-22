//Sub Class of Employee
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(gitHub){
        this.gitHub = gitHub;
    }

    getGithub(){

    }
    getRole(){
        return 'Engineer'
    }
}
module.exports = Engineer;