package br.com.asoncs.multi.passwords

interface Platform {
    val name: String

    fun openLink(url: String) {
    }
}

expect val platform: Platform
