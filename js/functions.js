const input = document.querySelector('input')
const list = document.querySelector('table')
const sort = document.querySelector('span')
const todo = []

const addRow = () => {
    const newTodo = input.value
    todo.push(newTodo)
    addTableRow(newTodo)
    input.value = ''
}

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        addRow()
    }
})

const deleteRow = (todoText) => {
    const index = todo.indexOf(todoText);
    if (index > -1) {
        todo.splice(index, 1);
        list.deleteRow(index);
    }
}

const addTableRow = (text) => {
    const row = list.insertRow()
    const col1 = row.insertCell(0)
    const col2 = row.insertCell(1)

    col1.innerHTML = text
    col2.innerHTML = '<a href="#" onClick="deleteRow(\'' + text + '\')">X</a>'


}

sort.addEventListener('click', () => {
    todos.sort()
    for (let i = todos.length -1;i >= 0;i--) {
        list.deleteRow(i)
    }
    for (let i = 0; i < todos.length; i++) {
        addTableRow(todo[i])
    }
})

