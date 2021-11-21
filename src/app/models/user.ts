// Por que definir propiedades en constructor:
//Se ahorra definir propiedad en la clase
//Parasela como parametro al constructor
//Asignarle un valor dentro del constructor
export class User {
  constructor(
    public _id: string,
    public name: string,
    public surname: string,
    public email: string,
    public password: string,
    public image: string,
    public role: string
  ) {}
}
