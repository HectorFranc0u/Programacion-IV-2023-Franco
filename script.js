//mostrar ocultar div

const hidebtn = document.querySelector('#hideElements')
const listDiv = document.querySelector('#list')

// constantes para agregar elementos 

const addItemImput = document.querySelector('#addItem') //input:text
const addItemButton = document.querySelector('button#addItemButton')

// constante para el boton eliminar

const removeItem = document.querySelector('button#removeItem')

// funcion para obtener el indice del elemento en la lista 
var list = document.getElementById('listItems'),
    items = list.getElementsByTagName('li')

const findIndex = (element) => {
    var len = items.length
    for( var i = 0; i<len; i++){
        if(items[i] === element){
            return i 
        }
    } 
}

list.onclick = (e) => {
    let event = e || window.event
    src = event.target
    
    let myIndex = findIndex(src)
    index = myIndex
    // alert(myIndex)
    list.querySelectorAll('li').forEach(el=>el.classList.remove('alert', 'alert-danger'))
    items[myIndex].classList.add('alert', 'alert-danger')
}

// eliminar elemento de la lista

removeItem.addEventListener('click', ()=> {

    var result = confirm("eliminar elemento");
    if(result==true)

    items[index].parentNode.removeChild(items[index])
})

// agregar los evenetos al boton ocultar/mostrar

hidebtn.addEventListener('click', () => {
    if(listDiv.style.display == 'none'){
        listDiv.style.display = 'block'
        hidebtn.textContent = 'Ocultar'
    } else {
        listDiv.style.display = 'none'
        hidebtn.textContent = 'Mostrar'
    }
})

// agregar elementos a la lista 
addItemButton.addEventListener('click', () => {
if(addItemImput.value.length == 0){
    window.alert('No puede enviar un elemento vacio!')
  } else {
        let list = document.querySelector('ul')
        let li = document.createElement('li')
        li.textContent = addItemImput.value
        list.appendChild(li)
        addItemImput.value = ''
    }
})