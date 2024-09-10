package br.com.asoncs.multi.passwords.ui.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.size
import androidx.compose.material.CircularProgressIndicator
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import br.com.asoncs.multi.passwords.ui.state.UiHomeAthleteState.Empty
import br.com.asoncs.multi.passwords.ui.state.UiHomeAthleteState.Loading
import br.com.asoncs.multi.passwords.ui.state.UiHomeAthleteState.Success
import br.com.asoncs.multi.passwords.ui.viewmodel.AppViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel

const val TAG_ATHLETE = "HomeAthlete"

@Composable
fun Home(
    modifier: Modifier = Modifier,
    appViewModel: AppViewModel = koinViewModel()
) {
    val uiState by appViewModel.uiHomeAthleteState().collectAsState()
    val scope = rememberCoroutineScope()
    var searchText by remember {
        mutableStateOf("")
    }

    Column(
        modifier
            .fillMaxHeight()
            .fillMaxWidth(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement
            .spacedBy(32.dp)
    ) {
        Header(
            searchText,
            onSearchTextChange = {
                searchText = it
            },
            onSearch = {
                scope.launch {
                    appViewModel.searchAthletes(searchText)
                }
            }
        )

        when (uiState) {
            is Empty -> Text(
                if ((uiState as Empty).isEmptyText)
                    "Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte"
                else
                    "Nada foi encontrado",
                Modifier
                    .fillMaxWidth(0.7f)
                    .weight(1f),
                textAlign = TextAlign.Center
            )

            Loading -> Box(
                Modifier
                    .weight(1f)
            ) {
                CircularProgressIndicator(
                    Modifier
                        .size(64.dp)
                )
            }

            is Success -> Athletes(
                (uiState as Success).athletes,
                Modifier
                    .weight(1f)
            )
        }

        Footer()
    }

    LaunchedEffect(Unit) {
        appViewModel.loadAthletes()
    }
}
