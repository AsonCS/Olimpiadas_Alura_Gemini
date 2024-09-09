package br.com.asoncs.multi.passwords.util

fun Any.log(
    message: String,
    tag: String = this::class.simpleName.toString()
) {
    tag.log(message)
}

fun Any.error(
    throwable: Throwable,
    message: String = throwable.message.toString(),
    tag: String = this::class.simpleName.toString()
) {
    tag.error(throwable, message)
}
