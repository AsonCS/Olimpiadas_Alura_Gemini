/**
 * Supported languages.
 * @returns {JSON} Key language => Value path.
 */
let supportedLanguages = {
    "pt-br": "pt-br",
    "pt": "pt-br",
    "en-us": "",
    "en": ""
}

/**
 * Get messages file.
 * @param {string} lang Language.
 * @returns {Promise<JSON>} Messages.
 */
function getMessagesFile(lang) {
    lang = supportedLanguages[lang.toLowerCase()] || ""
    if (lang.length > 0) {
        lang = `-${lang}`
    }
    let path = `/Passwords/static/messages/messages${lang}.json`
    return fetch(path)
        .then(response => response.json())
}


/**
 * Load all page messages.
 * @param {string} lang Language.
 * @returns {JSON} Messages.
 */
async function loadAllPageMessages() {
    let messages = await getMessagesFile(
        document.documentElement.lang
    )
    //console.log(messages)
    let nodes = document.querySelectorAll("[data-message]")
    for (let i = 0; i < nodes.length; i++) {
        try {
            let message = messages
            let type = { "textContent": "" }
            nodes[i].getAttribute("data-message")
                .split(".")
                .forEach((path) => {
                    type = path
                    message = message[path]
                })
            nodes[i][type] = message
        } catch (e) {
            console.error(e)
        }
    }
}
window.loadAllPageMessages = loadAllPageMessages;

(async () => {
    //document.documentElement.lang = "pt-br"
    if (document.documentElement.lang) {
        document.documentElement.lang = document.documentElement.lang.toLocaleLowerCase()
    } else {
        document.documentElement.lang = navigator.language.toLocaleLowerCase()
    }
    loadAllPageMessages()
    window.onlanguagechange = loadAllPageMessages

    let button = document.createElement("button")
    button.textContent = document.documentElement.lang
    button.style = "position: absolute; right: 0; top: 0;"
    button.onclick = () => {
        switch (document.documentElement.lang) {
            case "en-us":
                document.documentElement.lang = "pt-br"
                break
            default:
                document.documentElement.lang = "en-us"
        }
        button.textContent = document.documentElement.lang
        loadAllPageMessages()
    }
    document.body.appendChild(button)
})()

/**
 * Get messages file.
 * @param {string} lang Language.
 * /
async function getMessagesFile(lang) {
    if (lang.length > 0) {
        lang = `-${lang}`
    }
    let path = `/static/messages/messages${lang}.json`.toLowerCase()
    return await fetch(path)
        .then(response => response.json())
        .catch(() => {
            let temp = lang.split("-")
            if (temp.length > 2) {
                return getMessagesFile(temp[1])
            } else {
                return getMessagesFile("")
            }
        })
}
*/
