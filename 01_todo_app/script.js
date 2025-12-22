// select dom elements 

const inp = document.getElementById("inp_txt")
const btn = document.getElementById("add_task")
const list = document.getElementById("items_list")

// retreate the values if already saved
const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

function save_tasks() {
    // Save the inputs in LocalStorage
    localStorage.setItem('todos', JSON.stringify(todos));
}

// check to toggle completion
function createTodoNode(todo, index) {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.checked = !!todo.completed
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked
        textspan.style.textDecoration = checkbox.checked ? "line-through" : "none"
        save_tasks()
    })

    const textspan = document.createElement('span')
    textspan.textContent = todo.text
    textspan.style.margin = "0 8px"
    if (todo.completed) {
        textspan.style.textDecoration = "line-through"
    }
    // add double click event listiner to edit the text
    textspan.addEventListener('dblclick', () => {

        const newText = prompt('Edit todo', todo.text)
        if (newText !== null) {
            todo.text = newText.trim()
            textspan.textContent = todo.text
            save_tasks()
        }
    })

    // Delete Todo Button 
    const delBtn = document.createElement('button')
    delBtn.textContent = "Delete"
    delBtn.addEventListener('click', () => {
        todos.splice(index, 1)
        render()
        save_tasks()
    })

    li.appendChild(checkbox)
    li.appendChild(textspan)
    li.appendChild(delBtn)
    return li


}
// Render the entire list on DOM
function render() {
    list.innerHTML = ""

    // recreate each item
    todos.forEach((todo, index) => {
        const node = createTodoNode(todo, index)
        list.appendChild(node)
    });
}

function addTodo() {
    const text = inp.value.trim()
    if (!text) {
        return
    }

    todos.push({ text, completed: false })
    inp.value = ''
    render()
    save_tasks()
}

btn.addEventListener('click', addTodo)
inp.addEventListener('keydown', (e) => {
    if (e.key == "Return") {
        addTodo;
    }
})
render()