const obtenerValorInput = () => {
    let inputTexto = document.getElementById("searcher")
    let valor = inputTexto.value
    peticionApi(valor)
}

const peticionApi = (nombre) => {
    const baseUrl = 'https://pokeapi.co/api/v2/'
    const endpoint = `pokemon/${nombre}`
    const url = `${baseUrl}${endpoint}`

    axios.get(url)
    .then(res => printData(res.data))
    .catch(err => console.log(err))
}

const printData = (data) => {

    let respuesta = document.getElementById('show-info')

    respuesta.innerHTML = `
        <div class="pokemon-box">

            <div class="img">
                <img src="${data.sprites.front_default}" alt="" class="poke-img">
            </div>
            <div class="poke-info">
                <p class="name">Nombre: ${data.name}</p>
                <p class="id">ID: ${data.id}</p>
                <p class="weight"> Peso: ${data.weight} KG</p>
            </div>
        </div>

                <div class="pokemon-box">

            <div class="img">
                <img src="${data.sprites.back_default}" alt="" class="poke-img">
            </div>
            <div class="poke-info">
                <p class="name">Nombre: ${data.name}</p>
                <p class="id">ID: ${data.id}</p>
                <p class="weight"> Peso: ${data.weight} KG</p>
            </div>
        </div>
    `
}