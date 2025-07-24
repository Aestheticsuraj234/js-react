class User{
    constructor(username , email , password){
        console.log("Method is called")
        this.username = username;
        this.email = email;
        this.password = password
    }
}

const suraj = new User("suraj" , "suraj@suraj.ai" , "123124321331");
const karan = new User("karan" , "1bty5@example.com" , "12312213");

console.log(suraj)