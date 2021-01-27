// Operacion de concatenación

let nombre ="Willmer Obed";
let edad = 40;
let altura = 1.78;
let profesor = false;
// console.log(nombre+edad);

// console.log(nombre.concat(edad));

// console.log(`Hola soy ${nombre} y mi edad es ${edad}`)

// console.log('Hola como estas ":V" bien y tu')

// console.log(`Mi nombre es  "${nombre}" y mi edad '${edad}'`);


// Contatenar 1 forma
console.log(nombre+edad);   // una de las variables tiene que ser de tipo 
                            //string


// Contatenar 2 forma
console.log(""+edad+altura);     //Al princio del texto tiene que llevar
                                //la inicializacion de tipo datos string
                                //**Ejemplo las comillas**
                                //)(""), (''); que identifican que el tipo de dato
                                //es string


// Contatenar 3 forma
console.log(nombre.concat(edad));   //Usando el metodo **concat**
                                    //podemos concatenar cualquier
                                    //tipo de datos siempre que la variable
                                    //sea de tipo string


// Contatenar 4 forma
console.log(nombre, edad, profesor);    //Podemos concatenar las variables con **,** 
                                        // pero al momento de visualizar toda la cadena 
                                        // cambia **Ejemplo** si mesclamos un strin con 
                                        // un numbre y un booleaon se mostrar en la pantall 
                                        // pero se pordra diferenciar uno de otro ya que el 
                                        // mensaje no se comportara como si guera un string 
                                        // si un ropecabezas de cada tipo de dato en este 
                                        // caso unsando **console.log()** no generar ningun 
                                        // error pero al moneto de usar **document.write()** 
                                        // no se vera el resulta deseado se mopstrar las 
                                        // variables de tipo string pero las demos mostrara 
                                        // el tipo de datp que conforma la variable y en 
                                        // caso del evento **alert()** solo se podra usa 
                                        // el simblo **+** para concatenar


// Contatenar 5 forma
console.log(`${nombre} ${edad}`);   //Usando las comillas Bckticks podemos 
                                    //identificar cada variable de una manera 
                                    //más comoda y la validación del tipo de dato 
                                    //de cada una sera más comoda


// Operaciones de decremento
let x = 10;
x--;
// num1 -= 5;
console.warn("Operación de decremento", x);


// Operaciones de división
let u = 10;
// u/2;
// console.warn("Operación de división", (u/2));
console.warn(`Operación de división resultado ${u/2} valor inicial ${u}`);
// console.warn(`Operación de división ${u}`);

// Operaciones de exponenciación
let z = 10;
// z**10;
console.warn(`Operación de exponenciación ${z**6} valor inicial ${z}`);


// Operaciones de incremento
let o = 10;
o++;
// o +=3;
console.log(`Operación de incremento ${o}`);

// Operaciones de multiplicación
let h = 10;

console.warn(`Operacion de multiplicación ${h*6} valor inicial ${h}`);

// Operaciones de modulo
let c = 10;
console.warn(`residuo de una divición ${c%2} valor incial ${c}`);


// Operaciones de resta
let g = 10;

console.warn(`Operacion de resta ${g-2} valor inicial ${g}`);


// Operación de unary negativo
let p = -10;
console.log(-p);


// Operación de unary plus
let f = -10;
console.log(+f);


// + + + = +
// - + - = +
// - + + = -
// - - - = -


