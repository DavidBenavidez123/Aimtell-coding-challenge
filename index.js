const dataButton = document.querySelector("#load-data")

const loadData = () => {
    axios.get('http://aimtell.com/files/sites.json')
        .then(response => {
            data = response.data
            createHTML(data)
        })
        .catch(err => {
            console.log(err)
        })
}

const createHTML = (data) => {
    const rawTemplate = document.querySelector("#dataTemplate").innerHTML
    const compiledTemplate = Handlebars.compile(rawTemplate)
    const ourGeneratedHTML = compiledTemplate(data)
    const dataContainer = document.querySelector("#data-container")
    console.log(data)
    dataContainer.innerHTML = ourGeneratedHTML
}

dataButton.addEventListener('click', loadData)