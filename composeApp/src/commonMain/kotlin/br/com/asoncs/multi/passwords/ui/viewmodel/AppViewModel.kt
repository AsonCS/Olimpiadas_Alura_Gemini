package br.com.asoncs.multi.passwords.ui.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import br.com.asoncs.multi.passwords.data.Repository
import br.com.asoncs.multi.passwords.ui.state.UiHomeAthleteState
import br.com.asoncs.multi.passwords.ui.state.UiHomeAthleteState.Empty
import br.com.asoncs.multi.passwords.ui.state.UiHomeAthleteState.Loading
import br.com.asoncs.multi.passwords.ui.state.UiHomeAthleteState.Success
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

abstract class AppViewModel : ViewModel() {

    class Impl(
        private val repository: Repository
    ) : AppViewModel() {

        private val _uiHomeAthleteState = MutableStateFlow<UiHomeAthleteState>(
            Loading
        )

        override suspend fun loadAthletes() {
            viewModelScope.launch {
                repository.athletes.collect { athletes ->
                    _uiHomeAthleteState.update {
                        if (athletes.isEmpty())
                            Empty(false)
                        else
                            Success(athletes)
                    }
                }
            }
            repository.loadAthletes()
        }

        override suspend fun searchAthletes(
            searchText: String
        ) {
            if (searchText.isBlank()) {
                _uiHomeAthleteState.update {
                    Empty(true)
                }
                return
            }

            _uiHomeAthleteState.update {
                Loading
            }
            repository.searchAthletes(searchText)
        }

        override fun uiHomeAthleteState() = _uiHomeAthleteState.asStateFlow()

    }

    open suspend fun loadAthletes() {
    }

    open suspend fun searchAthletes(
        searchText: String
    ) {
    }

    abstract fun uiHomeAthleteState(): StateFlow<UiHomeAthleteState>

}
