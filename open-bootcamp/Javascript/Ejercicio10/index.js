import {suma , multiplica} from "./controller.js";
import chalk from "chalk";

const primerSuma = suma(1,2);
const segundaSuma = suma(4,5);
const multiplicacion = multiplica(primerSuma,segundaSuma);

console.log(chalk.green(multiplicacion));
