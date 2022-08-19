let input = prompt('what would you like to do?');
const todos = ['Take Out Trash', 'Wash The Dishes'];

while (input !== 'quit' && input !== 'q') {

    // list items in todo list
    if (input === 'list') {
        console.log('************************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('************************');
    }
    // create new todo
    else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }
    // delete a todo
    else if (input === 'delete') {
        // prompt is always a string
        // parseInt returns a number
        const index = parseInt(prompt('Enter an index to delete'));
        // check if index is a num
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    input = prompt('What would you like to do?');

}
console.log('OK, QUITING THE APP!');