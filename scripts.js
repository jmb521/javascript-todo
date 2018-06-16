let count = 0
let todo_array = []
addTodo = (event) =>  {
  event.preventDefault()
  const value = document.getElementById("todo").value

  document.getElementById("todo").value = ""
}



addTodoToArray = (todo) => {
    addTodoToArray
}


updateList = (value) => {
  text = document.createElement("P")
  node = document.createTextNode(value)
  text.appendChild(node)
  document.getElementById("todo_list").appendChild(text)
}
