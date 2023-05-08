import pathHelper from "path";
import * as os from 'os';

pathHelper.join(os.homedir(), '.nomic');
        
const executablePath = `${os.homedir()}/.nomic/gpt4all`;
const executablePath4 = `//File/Test/images`;
const executablePathWindow2 = pathHelper.normalize(executablePath4);
const executablePathWindow3 = pathHelper.resolve(executablePath4);
const executablePathWindow4 = pathHelper.toNamespacedPath(executablePath4);
const executablePathWindow = pathHelper.join(os.homedir(), '.nomic', 'gpt4all');

console.log(executablePath);
console.log(executablePathWindow);
console.log(executablePathWindow3);
console.log(executablePathWindow2);


