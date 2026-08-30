import { add, subtract } from './math.js';
import os from 'os';
import expess from 'express';

console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.freemem()/1024*1024*1024);  
