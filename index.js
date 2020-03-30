const dataButton = document.querySelector("#load-data")

const loadData = () => {
    axios.get('https://picsum.photos/v2/list')
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