package br.com.asoncs.multi.passwords

import kotlinx.browser.window

actual val platform = object : Platform {

    override val name: String = "Web with Kotlin/Wasm"

    override fun openLink(
        url: String
    ) {
        window.open(url, "_blank")
            ?.focus()
    }

}
