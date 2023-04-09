class User {
    constructor(userName, email){

        this.userName = userName
        this.email = email
        this.score = 0
    }

    login(){
        console.log(`${this.userName} just logged in` )
        return this
    }

    logout(){
        console.log(`${this.userName} just logged out` )
        return this
    }

    scores(){
        this.score += 1
        console.log(`${this.userName} has a score of ${this.score}` )
        return this
    }


}

class admin extends User{
    deleteUser(user){
      users = users.filter(u => u.userName !== user.userName)
    }
}

const userOne = new User('GajuN','gajunadeg@gmail.com')
const userTwo = new User('Buntu','williambunt1@gmail.com')
const userThree = new admin('james','james@m.co.uk')

console.log(userOne , userTwo, userThree)

let users = [userOne , userTwo, userThree]
userOne.login().scores().scores().scores().logout()
//userTwo.login()

userThree.deleteUser(userOne)
console.log(users)