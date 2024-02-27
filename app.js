function dom(className){
    return document.querySelector(className)
  }
  
  const input = dom('input[type="text"]')
  const button = dom('button[type="submit"]')
  const todoList = dom('.todo-list')
  
  button.addEventListener('click', () => {
    const item = input.value
    
    const todoItem = document.createElement('div')
      todoItem.classList.add('todo-item')
    const title = document.createElement('h3')
      title.classList.add('title')
      
    if(item == ''){
      alert('Enter some text')
    }else {
      title.textContent = item
    }
  
    todoList.appendChild(todoItem)  
    todoItem.appendChild(title)
  
    input.value = ''
  
  })