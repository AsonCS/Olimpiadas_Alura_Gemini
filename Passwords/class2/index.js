(() => {
    let searchButton = document.getElementById("searchButton")
    let searchInput = document.getElementById("searchInput")
    let onSubmit = (event) => {
        event.preventDefault()
        loadAndPrintAthletes(
            searchInput.value.toLowerCase()
        )
    }
    searchButton.onclick = onSubmit
    searchButton.onsubmit = onSubmit
    searchInput.onkeyup = onSubmit
})()

/**
 * Load and print athletes.
 * @param {string} query input value.
 */
async function loadAndPrintAthletes(query) {
    let athletes = await loadAthletes(query)
    //console.log("loadAndPrintAthletes.athleteQueryName: ", query)
    //console.log("loadAndPrintAthletes.athletes: ", athletes)

    // Hide the initial sample data by search with sample-result class.
    document.querySelectorAll(".sample-result")
        .forEach((sampleResult) => {
            sampleResult.style.display = "none"
        })

    // Remove the previous result a by search with search-result class.
    document.querySelectorAll(".search-result")
        .forEach((sampleResult) => {
            sampleResult.remove()
        })

    // Print result on screen.
    let resultadosPesquisa = document.getElementById("resultados-pesquisa")
    athletes.forEach((athlete) => {
        resultadosPesquisa.appendChild(athleteToElement(athlete))
    })

    loadAllPageMessages()
}

/**
     * Athlete in HTML Element form.
     * @param {Athlete} athlete Athlete.
     * @returns {HTMLElement}
     */
function athleteToElement(athlete) {
    let athleteDiv = document.createElement("div")
    athleteDiv.className = "item-resultado search-result"

    let a = document.createElement("a")
    a.href = athlete.instagram
    a.target = "_blank"
    a.textContent = athlete.name

    let h2 = document.createElement("h2")
    h2.appendChild(a)
    athleteDiv.appendChild(h2)

    let p = document.createElement("p")
    p.className = "descricao-meta"
    p.textContent = isLangPtBr()
        ? athlete.description_pt_br
        : athlete.description
    athleteDiv.appendChild(p)

    let aInfo = document.createElement("a")
    aInfo.href = athlete.wiki
    aInfo.target = "_blank"
    aInfo.setAttribute("data-message", "class2.main.section.a.textContent")
    athleteDiv.appendChild(aInfo)

    return athleteDiv
}

/**
 * Load athletes.
 * @param {string} query Athlete's name.
 * @returns {Promise<Array<Athlete>>} Athletes.
 */
async function loadAthletes(query) {
    let athletes = await getAthletes()
    //console.log("loadAthletes.query: ", query)
    //console.log("loadAthletes.athletes: ", athletes)

    if (query.length === 0) {
        return athletes
    }

    /**
     * @type {Array<Athlete>} Athletes.
     */
    let result = []
    for (let i = 0; i < athletes.length; i++) {
        if (athletes[i].name.toLowerCase().indexOf(query) > -1) {
            result.push(athletes[i])
        }
    }

    return result
}

/**
 * Athlete.
 */
class Athlete {
    /**
     * Athlete name.
     * @type {string} Name.
     */
    name;
    /**
     * Athlete description.
     * @type {string} description.
     */
    description;
    /**
     * Athlete description_pt_br.
     * @type {string} description_pt_br.
     */
    description_pt_br;
    /**
     * Athlete instagram.
     * @type {string} instagram.
     */
    instagram;
    /**
     * Athlete wiki.
     * @type {string} wiki.
     */
    wiki;
}

/**
 * Get athletes json.
 * @returns {Promise<Array<Athlete>>} Athletes.
 */
function getAthletes() {
    return fetch("/Passwords/class2/athletes.json")
        .then(response => response.json())
}