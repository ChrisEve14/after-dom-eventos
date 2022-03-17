
const storedElements = localStorage.getItem('elements')

let elements = [];
console.log(localStorage.getItem('elements'));

if (storedElements) {
    elements = JSON.parse (storedElements);
}

renderElements();

function addElementToList (){
    const inputRef = document.getElementById('input');
    const value = inputRef.value;

    if (value.trim()){
        elements.push(value);
        inputRef.value = '';
        renderElements();
        localStorage.setItem('elements', JSON.stringify(elements))
    }else{
        alert('Ingresá una tarea')
    }
}

function renderElements (){
    const container = document.getElementById('elements')
    
    // const lastElement = elements[elements.length -1];
    // const item = document.createElement('li')
    // item.className = "list-group-item";
    // item.textContent = lastElement;
    // container.appendChild(item)

    container.innerHTML = '';

    for (const element of elements) {
        const item = document.createElement('li')
        item.className = "list-group-item";
        item.addEventListener('click', (e) => {
            e.target.remove()
            const index = elements.findIndex((el) => el === e.target.textContent);
            elements.splice(index, 1);
            localStorage.setItem('elements', JSON.stringify(elements))
        })
        item.textContent = element;
        container.appendChild(item)
    }

    const active = document.getElementById('active');
    active.textContent = `ACTIVOS: ${elements.length}`
}


