/*
1 - Crie uma função construtora ou Classe Aluno que tenha como atributos:
nome (string), quantidade de faltas (number) e notas (array de números). 
*/

function aluno(nome, qtd_faltas, notas) {
  this.nome = nome;
  this.qtd_faltas = qtd_faltas;
  this.notas = notas;
}

/*
2 - Na função construtora crie o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
Crie alguns alunos para testar a sua função construtora. 
*/

function aluno(nome, qtd_faltas, notas) {
  this.qtd_faltas = qtd_faltas;  
  this.nome = nome;
  this.notas = notas;
  
  this.calcularMedia = function() {
    let notaDoAluno = 0;
    let qtd_notas = 0;
    for (let nota of this.notas) {
      notaDoAluno += nota;
      qtd_notas++;
    }
    return  notaDoAluno / qtd_notas;
  };
  
  this.faltas = function() {
      this.qtd_faltas++;
  };
}

const aluno1 = new aluno("Carlos", 2, [6, 8, 9, 10]);
const aluno2 = new aluno("Luara", 3, [8, 9, 7, 4]);

let alunos = [aluno1, aluno2];

/*
3 - Crie o objeto literal curso que tem como atributos: nome do curso
(string), nota de aprovação (number), faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos criados no passo 2).
*/

let curso = {
  nomeDoCurso: "programação imperativa",
  notaParaAprovação: 7,
  maximoDeFaltas: 5,
  listaDeEstudantes: [aluno1, aluno2],
}
/*
4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando 
chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na 
propriedade lista de estudantes do objeto curso.
*/

// Mesmo Objeto "Curso" com os novos métodos
let curso4 = {
  nomeDoCurso: "programação imperativa",
  notaParaAprovação: 7,
  maximoDeFaltas: 5,
  listaDeEstudantes: [aluno1, aluno2],

  adicionarAluno: function(novoAluno) {
    curso4.listaDeEstudantes.push(novoAluno);
  }
}
/*
5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true 
se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que 
ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas.
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
*/

// Mesmo Objeto "Curso" com os novos métodos
let curso5 = {
  nomeDoCurso: "programação imperativa",
  notaParaAprovação: 7,
  maximoDeFaltas: 5,
  listaDeEstudantes: [aluno1, aluno2],

  adicionarAluno: function(novoAluno) {
    curso5.listaDeEstudantes.push(novoAluno);
  },
  
  faltaEMedia_Aluno: function(mediaAluno, faltas) {
    return mediaAluno >= curso5.notaParaAprovacao && faltas < curso5.maximoDeFaltas ? true : false;
  },

  condicionalParaAprovacao: function(quantidadeFaltasAluno, mediaAluno) {
    if (quantidadeFaltasAluno == curso5.maximoDeFaltas) {
      let notaParaAprovaçãoFinal = curso5.notaParaAprovação + ((curso5.notaParaAprovação / 100) * 10);
      return mediaAluno > notaParaAprovaçãoFinal ? true : false;
    }
  },
  
  alunoStatus: function(aluno) {
    let status_aluno = "" 
    let mediaAluno = aluno.calcularMedia();
      if ( this.faltaEMedia_Aluno(mediaAluno, aluno.qtd_faltas) || this.condicionalParaAprovacao(aluno.qtd_faltas, mediaAluno) ) {
        return status_aluno = "Aprovado";
      } else {
        return status_aluno = "Reprovado";
      }
  }
}


/*
6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array 
de booleanos com os resultados se os alunos aprovaram ou não. 
*/

// Mesmo Objeto "Curso" com os novos métodos
let curso6 = {
  nomeDoCurso: "programação imperativa",
  notaParaAprovação: 7,
  maximoDeFaltas: 5,
  listaDeEstudantes: [aluno1, aluno2],

  adicionarAluno: function(novoAluno) {
    curso6.listaDeEstudantes.push(novoAluno);
  },
  
  faltaEMedia_Aluno: function(mediaAluno, faltas) {
    return mediaAluno >= curso6.notaParaAprovacao && faltas < curso6.maximoDeFaltas ? true : false;
  },

  condicionalParaAprovacao: function(quantidadeFaltasAluno, mediaAluno) {
    if (quantidadeFaltasAluno == curso6.maximoDeFaltas) {
      let notaParaAprovaçãoFinal = curso6.notaParaAprovação + ((curso6.notaParaAprovação / 100) * 10);
      return mediaAluno > notaParaAprovaçãoFinal ? true : false;
    }
  },
  
  alunoStatus: function(aluno) {
    let status_aluno = "" 
    let mediaAluno = aluno.calcularMedia();
      if ( this.faltaEMedia_Aluno(mediaAluno, aluno.qtd_faltas) || this.condicionalParaAprovacao(aluno.qtd_faltas, mediaAluno) ) {
        return status_aluno = "Aprovado";
      } else {
        return status_aluno = "Reprovado";
      }
  },

  alunosAprovados: function () {
    for (let aluno of this.listaDeEstudantes){
      console.log("Status da aprovação do aluno " + aluno.nome + ":  " + curso6.alunoStatus(aluno));
    }
  }
}