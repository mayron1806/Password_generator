const display_password = document.querySelector("#display_password")

const password_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generatePassword(){
    let number_of_characters = document.querySelector('#number_of_characters').value;

    let password = "";

    for (let i = 0; i < number_of_characters; i++) {
        let char_position =  Math.floor((Math.random() * (61 - 0) + 0));
        password += password_characters.charAt(char_position);
    }
    display_password.value = password
}