//we need to export the var, function etc in file we want to use
import { name } from './19 modules/user.js';
import { withdraw } from "./19 modules/account.js";

//to export miltiple things from same file
import { code, cook} from './19 modules/user.js';

//if 2 file have same name element then
import { money } from './19 modules/user.js';
import { money as newname} from './19 modules/account.js';

//to export multiple things from same file 2nd method for large fill just add export to those element in the file and here use a name for calling them
import * as nameforimport from './19 modules/account.js';

nameforimport.deposit();


//default fun here we have to give a name to it
import {default as tg} from './19 modules/account.js';


//then we can use it normally
console.log(name);

withdraw();