const LANG_EN_US = "en-us"
const LANG_PT_BR = "pt-br"
const PATH_EN_US = ""
const PATH_PT_BR = "-" + LANG_PT_BR

function isLangPtBr() {
    return document.documentElement.lang.toLowerCase() === LANG_PT_BR
}

/**
 * Get messages file.
 * @param {string} lang Language.
 * @returns {Promise<JSON>} Messages.
 */
function getMessagesFile(lang) {
    switch (lang) {
        case LANG_PT_BR:
            lang = PATH_PT_BR
            break
        default:
            lang = PATH_EN_US
    }
    let path = `/html/static/messages/messages${lang}.json`
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

(async () => {
    //document.documentElement.lang = LANG_PT_BR
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
            case LANG_EN_US:
                document.documentElement.lang = LANG_PT_BR
                break
            default:
                document.documentElement.lang = LANG_EN_US
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
