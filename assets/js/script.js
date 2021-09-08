// where the password will be displayed
const display_password = document.querySelector("#display_password")

//character filter options
const letters_and_numbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const only_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const only_numbers = "0123456789"


// characters to be used in the password (letters_and number is the default value)
let password_characters = letters_and_numbers

function selectOption(option){
    if (option === "letters_and_numbers"){
        password_characters = letters_and_numbers
    }
    else if (option === "only_letters"){
        password_characters = only_letters
    }
    else if (option === "only_numbers"){
        password_characters = only_numbers
    }
}

function generatePassword(){
    let number_of_characters = document.querySelector('#number_of_characters').value
    let password = ""
    for (let i = 0; i < number_of_characters; i++) {
        let char_position =  Math.floor((Math.random() * (password_characters.length - 0) + 0))
        password += password_characters.charAt(char_position)
    }
    display_password.value = password
}