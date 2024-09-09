package br.com.asoncs.multi.passwords.ui.state

import br.com.asoncs.multi.passwords.model.Athlete

data class UiHomeAthleteState(
    val athletes: List<Athlete> = emptyList()
)
