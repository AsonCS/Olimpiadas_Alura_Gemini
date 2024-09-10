@file:OptIn(ExperimentalResourceApi::class)

package br.com.asoncs.multi.passwords.data

import br.com.asoncs.multi.passwords.model.Athlete
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.serialization.json.Json
import olimpiadas_alura_googlegemini.composeapp.generated.resources.Res
import org.jetbrains.compose.resources.ExperimentalResourceApi

interface Repository {

    class Impl(
        private val json: Json
    ) : Repository {

        override val athletes = MutableStateFlow(listOf<Athlete>())

        private suspend fun athletesResource(): List<Athlete> {
            return json.decodeFromString(
                Res.readBytes("files/athletes.json")
                    .decodeToString()
            )
        }

        override suspend fun loadAthletes() {
            athletes.emit(athletesResource())
        }

        override suspend fun searchAthletes(
            searchText: String
        ) {
            delay(1_000)
            athletes.emit(
                athletesResource().filter {
                    it.name.contains(searchText, true)
                            || it.description.contains(searchText, true)
                }
            )
        }

    }

    val athletes: MutableStateFlow<List<Athlete>>

    suspend fun loadAthletes() {
        TODO("Not yet implemented")
    }

    suspend fun searchAthletes(
        searchText: String
    ) {
        TODO("Not yet implemented")
    }

}
