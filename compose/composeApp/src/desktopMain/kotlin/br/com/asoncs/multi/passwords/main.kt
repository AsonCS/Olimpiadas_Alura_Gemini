package br.com.asoncs.multi.passwords

import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import br.com.asoncs.multi.passwords.ui.App

fun main() = application {
    Window(
        onCloseRequest = ::exitApplication,
        title = "Olimpíadas - Alura - Google Gemini",
    ) {
        App()
    }
}