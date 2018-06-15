

addTodo = (event) =>  {
  event.preventDefault()
  const test = document.getElementById("todo").value
  console.log(test)
  return false;
}
