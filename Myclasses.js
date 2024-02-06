class User{
    constructor(username,email,password)
    {
        this.username = username;
        this.email = email;
        this.password = password 
    }

    encryptPassword()
    {
        return `${this.password}abc`
    }

    changeUsername()
    {
        return `${this.username.toUpperCase()}`
    }
}


const user_01 = new User("rhythm",'rhy@gmail.com','rhythm123')
console.log(user_01.changeUsername());


class teacher extends User{
    constructor(username, email, password)
    {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse()
    {
        console.log(`this is a `);
    }
}