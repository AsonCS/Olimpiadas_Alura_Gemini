package br.com.asoncs.multi.passwords.ui.state

import br.com.asoncs.multi.passwords.model.Athlete

sealed class UiHomeAthleteState {
    data object Loading : UiHomeAthleteState()

    data class Empty(
        val isEmptyText: Boolean
    ) : UiHomeAthleteState()

    data class Success(
        val athletes: List<Athlete> = emptyList()
    ) : UiHomeAthleteState()
}
