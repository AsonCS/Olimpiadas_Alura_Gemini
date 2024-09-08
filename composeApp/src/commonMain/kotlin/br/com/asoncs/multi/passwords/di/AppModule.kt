package br.com.asoncs.multi.passwords.di

import br.com.asoncs.multi.passwords.data.Repository
import br.com.asoncs.multi.passwords.ui.viewmodel.AppViewModel
import kotlinx.serialization.json.Json

@Suppress("MemberVisibilityCanBePrivate")
object AppModule {

    val appViewModel
        get() = AppViewModel(repository)

    val json = Json() {
        ignoreUnknownKeys = true
    }

    val repository = Repository()

}
