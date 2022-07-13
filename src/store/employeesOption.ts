
import {  makeAutoObservable, toJS } from "mobx"

export interface IOneProfile {
    gender: string;
    name: {
    title:string;
    first: string;
    last: string;
    },
    location: {
    street: {
    number: number;
    name: string;
    },
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
    latitude: string;
    longitude: string;
    },
    timezone: {
    offset: string;
    description: string;
    }
    },
    email: string,
    login: {
    uuid: string;
    username:string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
    },
    dob: {
    date: string;
    age: number;
    },
    registered: {
    date: string;
    age: number;
    },
    phone: string,
    cell: string,
    id: {
    name: string;
    value: string;
    },
    picture: {
    large:string;
    medium: string;
    thumbnail: string;
    },
    nat: string,
    vocation?: boolean,
}

export interface INewEmployee {
  id: number;
  name: string;
  email: string;
  phone: string;
  vocation: false,
  department: {
    main: string,
    option: string,
  }
}

type IDataFromFetch = [] | IOneProfile[];

class EmployeesOption {
  employeesData = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      vocation: false,
      department: {
        main: 'developer',
        option: 'frontend'
      }
      },
      {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      vocation: false,
      department: {
        main: 'developer',
        option: 'backend'
      }
      },
      {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      vocation: false,
      department: {
        main: 'developer',
        option: 'backend'
      }
      },
  ]

  employeesNewData: IDataFromFetch = [];
  sliceData: IDataFromFetch = [];

  constructor() {
    makeAutoObservable(this)
  }

  addEmployee(employee: INewEmployee) {
    this.employeesData.push(employee)
  }

  findEmployee(id: number) {
   const oneEm = this.employeesData.find(employee => employee.id === id)
    return oneEm
  }

  removeEmployee(id: number) {
    this.employeesData = this.employeesData.filter(employee => employee.id !== id)
  }

  removeEmployeeFetch(id: string) {
    // this.employeesNewData = this.employeesNewData.filter(employee => employee.email !== id)
    this.sliceData = this.sliceData.filter(employee => employee.email !== id)
    
  }

  vocationEmployee(id: number) {
    this.employeesData = this.employeesData.map(empl => empl.id === id ? {...empl, vocation: !empl.vocation}: empl) //ес id равны вернем новый объект в кот развернем старый объект с измененным полем vocation ес не равны вернем эл итерации
  }

  fetchEmpl() {
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    // .then((data) => data)
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    .then(json => {
 this.employeesNewData = [...json.results] 
   })
   this.employeesNewData = this.employeesNewData.filter((el) => el.id.value !== null )
  }

  curPerson(firstPersonCount: number, lastCountPerson: number) {
   this.sliceData = this.employeesNewData.slice(firstPersonCount, lastCountPerson);
    
    return this.sliceData
  }

  vocationFromFetch(em: string) {
    this.sliceData =  this.sliceData.map((empl) => empl.email === em ? {...empl, vocation: true }: {...empl, vocation: false }) 
  }

}

export default new EmployeesOption()