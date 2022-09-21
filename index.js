var input = document.querySelector('.contain input')
var title = document.querySelector('.contain .title')
var remove = document.querySelector('.remove')
var liElement = document.querySelectorAll('.title li')


var a = []

function render(a) {
    var html = a.map(function(element,index) {
        return`
        <li>${element} <span class="deleteE" data-index="${index}">&times;</span></li>
        `
    });
    
    title.innerHTML = html.join('')
}

function deleteE (index) {
    a.splice(index,1)
}
function deleteAll() {
    a = []
}
function handleDelete(e) {
    const deleteElement = e.target.closest('.deleteE')
    if(deleteElement) {
        const index = deleteElement.dataset.index
        deleteE(index)
        render(a)      
    }
    
}

function removeAll () {
    remove.onclick = function () {
        deleteAll()
        render(a)
    }
}

function init () {
    
    input.addEventListener('keypress',function(e){
        if(e.key == 'Enter') {
            a.push(input.value)
            input.value = ''
            input.focus()
            render(a)
        }
    })

    title.onclick = handleDelete
    removeAll()


    
}



init()








