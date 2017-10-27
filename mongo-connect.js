const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect');
  }
  console.log('connected to mogodb database');
  // db.collection('Todos').insertOne({
  //   text: 'these are the things you need to do'
  // },(err,result)=>{
  //   if(err)
  //   {
  //     return console.log('Unable to insert',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  // });
  db.collection('Users').insertOne({
    name: 'varun chandra',
    age: 23,
    location: 'charlotte NC'
  },(err,result)=>{
    if(err){
    return console.log('unable to add to users');
    }
    console.log(JSON.stringify(results.ops,undefined,2));
  })
  db.close;
});
