export const validation = (email, password, name) => {
    
    const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const validataPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    console.log(name);
    
    const validateName = name ? /^[a-zA-Z]+ [a-zA-Z]+$/.test(name) : true;
    if(!validateName) {
        return "Invalid username"
    }
    if(!validateEmail){
        return "Invalid Email ID"
    }
    if(!validataPassword){
        return "Invlid Password"
    }
    return null;
}