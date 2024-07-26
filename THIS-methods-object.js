/* Os OBJETOS podem também ter MÉTODOS.
Um MÉTODO é uma FUNÇÃO que é ARMAZENADA como PROPRIEDADE de um OBJETO. Ou seja, MÉTODOS são AÇÕES que podem ser EXECUTADAS em OBJETOS. */

const person = {
    fName: "Elon",
    lName: "Musk",
    fullName() {
        return `${this.fName} ${this.lName}`;
    },
};
console.log(person.fullName());

/*  this  é uma keyword que refere-se a um OBJETO. 
Portanto,  this.fName  refere-se à propriedade  fName  DESTE (this) OBJETO (person). */
