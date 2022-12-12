import Person from "./2.Models/user.js";
import UserService from "./3.Services/userService.js";
import {validate as val, sendMessage} from "./1.Functions/functions.js";

const user = new Person('kALle', 'Anka', 'kalle@anka.com', 'BytMig123!');

// console.log(user);

// UserService.signUp(user);

val(user, u => UserService.signUp(u) );

sendMessage('kalle', message => console.log(message));