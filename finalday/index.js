class ToDo {

    text = "";
    prio = 0;
    done = false;

    constructor (text, prio, done = false){
        this.text = text
        this.prio = prio
        this.done = done;
    }
}

todoarray = [];

todoarray.push(new ToDo("Run", 3))

function CreateToDo(text, prio, todoarray) { 
        // check duplicate text 
        for (let i = 0; i < todoarray.length; i++) {
            if (todoarray[i].text === text){
                return;
            }
        } 
        // create toDo
        objecttodo = new ToDo(text, prio);
        todoarray.push(objecttodo);
    }

function UpdateToDo(oldtext, newtext) {
        let found = false;

    // first find the "text", if there text = oldtext, change text = newtext.
        for (let i = 0; i < todoarray.length; i++) {
            if (todoarray[i].text === oldtext) {
                todoarray[i].text = newtext;
                found = true;
            }
        
        }
        return todoarray;
    }

function FinishToDo(text, todoarray) {
    // find the text with loop, if text = text "done" = true
        for (let i = 0; i < todoarray.length; i++) {
            if (todoarray[i].text === text) {
                todoarray[i].done = true;
        }
    }
}

function DeleteToDo(text, todoarray) {
        // search for text if found use splice to delete it from the array.
        found = false;
        for (let i = 0; i < todoarray.length; i++) {
        if (todoarray[i].text === text) {
            todoarray.splice(i, 1);
            found = true;
            break;
            }
        }
        return found;
    }

function SearchToDo(text, todoarray){
        // search for text asked for and display all its properties
        for (let i = 0; i < todoarray.length; i++) {
            if (todoarray[i].text === text) {
                return todoarray[i];
             }
        }
        return null;
}

function UpOrderToDo(todoarray){
    // create a loop without sort, what it does is "compare pairs of "priorities" 
    // and swaps places if one is more important than the other. 
    // Does this until all pairs are swapped correctly and in order."

    for (let i = 0; i < todoarray.length - 1; i++) {
        for (let j = 0; j < todoarray.length - i - 1; j++) {
            // Compare priorities and swap if necessary
            if (todoarray[j].prio > todoarray[j + 1].prio) {
                let temp = todoarray[j];
                todoarray[j] = todoarray[j + 1];
                todoarray[j + 1] = temp;
            }
        }
    }
    return todoarray;
}

// Same idea as function above.
// Difference is how the todoarray[j].prio is being compared to todoarray[j+1].prio.
// If you want the order to be "increasing" you make the the comparison of [j]>[j+1].

function DownOrderToDo(todoarray) {
    // Create a loop without using the sort method. This loop compares pairs of "priorities" and swaps places if one is less important than the other. 
    // Does this until all pairs are swapped correctly and in order.
    for (let i = 0; i < todoarray.length - 1; i++) {
        for (let j = 0; j < todoarray.length - i - 1; j++) {
            // Compare priorities and swap if necessary
            if (todoarray[j].prio < todoarray[j + 1].prio) { // Changed the comparison operator to '<'
                let temp = todoarray[j];  // Store the ToDo object at index j in a temporary variable
                todoarray[j] = todoarray[j + 1];  // Replace the ToDo object at index j with the one at index j + 1
                todoarray[j + 1] = temp;  // Replace the ToDo object at index j + 1 with the one stored in the temporary variable
            }
        }
    }
    return todoarray;  // Return the sorted todoarray
}
