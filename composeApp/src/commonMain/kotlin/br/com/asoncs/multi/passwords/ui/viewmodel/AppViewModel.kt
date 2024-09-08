package br.com.asoncs.multi.passwords.ui.viewmodel

import androidx.lifecycle.ViewModel
import br.com.asoncs.multi.passwords.data.Repository
import br.com.asoncs.multi.passwords.ui.state.UiHomeAthleteState
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

class AppViewModel(
    private val repository: Repository
) : ViewModel() {

    private val _uiHomeAthleteState = MutableStateFlow(UiHomeAthleteState())
    val uiHomeAthleteState = _uiHomeAthleteState.asStateFlow()

    suspend fun loadAthletes() {
        coroutineScope {
            repository.athletes().collect { athletes ->
                _uiHomeAthleteState.update {
                    it.copy(
                        athletes = athletes
                    )
                }
            }
        }
    }

}
