
const formProfesores = document.querySelector('#form-profesores')

formProfesores.addEventListener('submit', (event) => {
    event.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value

    alert(`Nombre: ${nombre} Apellido: ${apellido}`)
})
