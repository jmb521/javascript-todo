let count = 0

addTodo = (event) =>  {
  event.preventDefault()
  const value = document.getElementById("todo").value
  addTodoToArray(value)
  document.getElementById("todo").value = ""
}



addTodoToArray = (todo) => {
  count = count += 1
  const new_todo = {
    id: count,
    text: todo,
  }

    updateList(new_todo)
    return count
}


updateList = (value) => {
      $(".todos").append(
      `<div class="todo_list ${value.id}">
        <div class="todo_value">
          <h3>${value.text}</h3>
        </div>
        <div class="buttons">
          <button class="completed" onclick="completed(${value.id})" name="Completed" value="Completed">Completed</button>
          <button class="delete" onclick="deleteTodo(${value.id})" name="delete" value="Delete">Delete</button>
        </div>
      </div>`

    )
  }

completed = (id) => {
  id = parseInt(id, 10)

  const outerClass = document.getElementsByClassName(id)[0]
  outerClass.getElementsByTagName("H3")[0].style.textDecoration = "line-through #20d6da"
  outerClass.getElementsByTagName("H3")[0].style.textDecorationStyle = "wavy"
  
}

deleteTodo = (id) => {
  const int_id = parseInt(id, 10)
  $("." + int_id).remove()
  // $(""." + int_id").remove()



}
