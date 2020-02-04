let pessoa = ["Vinicius"]
//console.log(pessoa);
//push - adiciona um ou mais elementos ao fim do array
    pessoa.push(22);
    //console.log(pessoa);
//pop - deleta o ultimo elemento
    let excluido = pessoa.pop();
    //console.log(pessoa);
    //console.log(excluido);
//unshift - adiciona um ou mais elementos ao inicio do array
    pessoa.unshift(22);
    //console.log(pessoa);
//shift - deleta o primeiro elemento
    pessoa.shift();
    //console.log(pessoa);
//indexOf - retorna o indice de um termo procurado or lastIndexOf() -> para buscar do fim ao inicio
    pessoa.push("Lucas");
    let indiceLuc = pessoa.indexOf("Lucas");
    //console.log(indiceLuc);
//join - transforma em uma string com o separador especificado
    let stringPessoa = pessoa.join("/");
    //console.log(stringPessoa);
//includes -> como indexOF, mas retorna true or false
    // //console.log(pessoa.includes("Camila")); //false
    // //console.log(pessoa.includes("Vinicius")); //true

//--------------------------- FUNCOES DE ARRAY

let numerosPares = [2,4,6,8,10];

//map() - recebe um callback de parametro, executa ele para cada elemento do array, e retorna nova array;
let triploNumeros = numerosPares.map((num) => num *3)
//console.log(triploNumeros);

//filter() - recebe um callback, percorre o array filtrando os elementos que atendem à condição especificada no callback
    let multiplosDe4 = numerosPares.filter(num => num % 4 == 0);
    //console.log(multiplosDe4);

//reduce() - receber dois parametros, um acumulador e o elemento atual. - retorna um unico valor baseado na regra aplicada
    let multiplica = numerosPares.reduce(
        (acum, atual) => acum * atual
    )
    console.log(multiplica);

//forEach() - itera sobre os valores da array, não retorna nada
        numerosPares.forEach(element => {
            //console.log(element*2),
            //console.log(element/2)
        });
