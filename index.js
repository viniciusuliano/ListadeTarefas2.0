let entradaTarefas = document.getElementById('entrada')
let listaTarefas = document.getElementById('lista')

let lista = JSON.parse(localStorage.getItem("@lista")) || []


function mostrarTarefa(){
    listaTarefas.innerHTML = ''

    lista.map((todo)=>{
        
    let Lielement = document.createElement('li')
    let inserir = document.createTextNode(todo)
    Lielement.style.color = 'white'
    Lielement.appendChild(inserir)
    listaTarefas.appendChild(Lielement)
    let posicaoElemento = lista.indexOf(todo)
    let botaoExcluir = document.createElement('a')
    let textoLink = document.createTextNode('Excluir')
    botaoExcluir.setAttribute('href', '#')
    botaoExcluir.setAttribute('onclick', `excluirElementos(${posicaoElemento})`)
    botaoExcluir.appendChild(textoLink)
    Lielement.appendChild(botaoExcluir)
})

}

mostrarTarefa()




function registrarTarefa(){
    if(entradaTarefas.value === ""){
        alert('Digite uma tarefa valida')
        return false
    }else{
        lista.push(entradaTarefas.value)
        console.log(lista)
    }
mostrarTarefa()
salvarLista()
}

function excluirElementos(posicaoElemento){
    lista.splice(posicaoElemento, 1)
    mostrarTarefa()
    salvarLista()
}


function salvarLista(){
    localStorage.setItem("@lista", JSON.stringify(lista))
}