const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}  = require('./../server/models/todo');
const {User} = require('./../Server/models/user');
// var id = "6a379898665d80ec1a179221";
//
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }
//
// Todo.find({
//   _id : id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo)
//   {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id',todo);
// }).catch((e)=> console.log(e));
User.findById('5a34c1a63a9b9d5c26f1f505').then((user)=>{
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2));
},(e)=>{
console.log(e);
});
