import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1=new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Alihan","Güdenoğlu","Eskişehir")

userService.add(user1)
userService.add(user2)
userService.getById(1)
userService.list(1)

//console.log(userService.list())
//console.log(userService.getById(2))

let customer = { id: 1, firstName: "Engin" }
//prototyping
customer.lastName = "Demiroğ"

//console.log(customer.lastName)

console.log("-------------------")
userService.load()

let customerToAdd=new Customer(1,"alihan","güdenoğlu","eskişehir","sadsadsad")
customerToAdd.type="customer"
userService.add(customerToAdd)

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
