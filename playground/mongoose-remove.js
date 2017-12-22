const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res)=>{
//   console.log(res);
// });
//Todo.findOneAndRemove({_id:})
// Todo.findByIdAndRemove('5a3cea544ebae61518df4b88').then((todo)=>{
//   console.log(todo);
// });
