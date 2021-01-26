require('./src/db/connection.js');
const { Person } = require('./src/models/Person');
const { Task } = require('./src/models/Task.js');

const app = async () => {
    try {
        const person = new Person({ name: 'Joe', email: 'joe@email.com', age: 24, likesPizza: true });
        await person.save();
    
        const task = new Task({ task: 'Feed the dog', completed: true });
        await task.save();

        const everything = await Person.find({});
        console.log(everything);

        const response = await Person.updateOne({ name: "Daria", email: 'daria@email.com', age: 21, likesPizza: true });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

app();

// CRUD
/*
 CREATE - instance.save()

 READ - model.find(), .findOne()

 UPDATED - model.update, model == person/task.

 DELETE - deleteOne, deleteMany
*/