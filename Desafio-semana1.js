//interface para ler os dados
const readline = require('readline');
//crira um file system para armazenar em json
const fs = require('fs');

//classe de cadastro de medicos
class Medicos {
    constructor(){
    this.nome = '';
    this.cpf = '';
    this.crm = 0;
    this.dob = 0;
    this.email = '';
    this.celular = '';
}

    async informacao() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log("Digite seu nome completo: ");
        this.nome = await
        this.getInfo(rl);

        console.log("Digite seu CPF: ");
        this.cpf = await
        this.getInput(rl);

        console.log("Digite seu CRM: ")
        this.crm = await
        this.getInput(rl);

        console.log("Data de nascimento: (ano/mês/dia)")
        this.dob = await
        this.getInput(rl);

        console.log("Digite seu email: ")
        this.email = await
        this.getInput(rl);

        console.log("Digite seu celular: (Apenas números!)")
        this.celular = await
        this.getInput(rl);

        x1.close();
}

async getInput(rl){
    return new Promise((resolve) => {
        rl.question('', (answer) => {
            resolve(answer);
        });
    });
}
}

const medicosInstance = new Medicos();
const medicosJSON = JSON.stringify(medicosInstance);

const nomeDoArquivo = 'medicos.json';

fs.writeFile(nomeDoArquivo,medicosJSON,(err)=> {
if(err) { 
    console.error('ocoreu um erro na gravação', err);
    return;
    }
    console.log("Arquivo json criado");
});

async function main(){
    const medicos = new Medicos();
    await medicos.getInfo();
}

//drugstore no app
const medicamentos = [
    {Dor:'Paracetamol, Dipirona, Ibuprofeno, Diclofenaco.'},
    {Antibioticos:'Ampicilina, Amoxicilina, Carbecilina'},
    {Diabetes: 'Regular, Asparte, Lispro, Glulisina'},
];

const medicamentoDiabetes = medicamentos.filter(item => item.hasOwnProperty('Diabetes'))[0].Diabetes;
console.log("Medicamentos para diabetes:" + medicamentoDiabetes);


//usando o reduce para ver o total de medicamentos de dor cadastrados
const totalMedDor = medicamentos.reduce((resultado, quantidade) =>  {
    if (quantidade.Dor) {
        const dorMedicamentos = quantidade.Dor.split(',');
        return resultado + dorMedicamentos.length;
    } else {
        return resultado;
    }
}, 0);

console.log("Quantidade de medicamentos de dor cadastrados: " +totalMedDor);
