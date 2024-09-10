package br.com.asoncs.multi.passwords.util

fun String.log(
    message: String,
    tag: String = this
) {
    println("$tag $message")
}

fun String.error(
    throwable: Throwable,
    message: String = throwable.message.toString(),
    tag: String = this
) {
    println("$tag $message")
    throwable.printStackTrace()
}
