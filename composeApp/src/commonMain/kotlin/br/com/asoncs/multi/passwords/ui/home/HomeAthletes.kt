package br.com.asoncs.multi.passwords.ui.home

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import br.com.asoncs.multi.passwords.ui.components.Athlete
import br.com.asoncs.multi.passwords.ui.viewmodel.AppViewModel
import org.koin.compose.viewmodel.koinViewModel

@Composable
fun HomeAthletes(
    modifier: Modifier = Modifier,
    appViewModel: AppViewModel = koinViewModel()
) {
    val uiState by appViewModel.uiHomeAthleteState.collectAsState()

    LazyColumn(
        modifier
            .fillMaxWidth(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        items(
            items = uiState.athletes,
            key = { it.id }
        ) { athlete ->
            Athlete(athlete)
        }
    }

    LaunchedEffect(Unit) {
        appViewModel.loadAthletes()
    }
}
