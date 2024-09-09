package br.com.asoncs.multi.passwords

actual val platform = object : Platform {

    override val name: String = "Java ${System.getProperty("java.version")}"

    override fun openLink(
        url: String
    ) {
        TODO()
    }
}
