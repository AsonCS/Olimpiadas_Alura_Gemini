@file:OptIn(ExperimentalResourceApi::class)

package br.com.asoncs.multi.passwords.data

import br.com.asoncs.multi.passwords.di.AppModule
import br.com.asoncs.multi.passwords.model.Athlete
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import org.jetbrains.compose.resources.ExperimentalResourceApi
import passwords.composeapp.generated.resources.Res

class Repository {

    suspend fun athletes(): Flow<List<Athlete>> {
        return flow {
            val athletes = Res
                .readBytes("files/athletes.json")
                .decodeToString()
            emit(AppModule.json.decodeFromString(athletes))
        }
    }

}
