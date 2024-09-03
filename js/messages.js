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
    let path = location.host.indexOf("github.io") > -1 ? "/Passwords" : ""
    path = `${path}/static/messages/messages${lang}.json`
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
        let message = messages
        nodes[i].getAttribute("data-message")
            .split(".")
            .forEach((path) => {
                message = message[path]
            })
        nodes[i].textContent = message
    }
}
window.loadAllPageMessages = loadAllPageMessages;

(async () => {
    document.documentElement.lang = "pt-BR"
    if (!document.documentElement.lang) {
        document.documentElement.lang = navigator.language
    }
    loadAllPageMessages()
    window.onlanguagechange = loadAllPageMessages
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
