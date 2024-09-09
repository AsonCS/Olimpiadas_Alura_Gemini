package br.com.asoncs.multi.passwords.ui.home

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import br.com.asoncs.multi.passwords.model.Athlete
import br.com.asoncs.multi.passwords.ui.DevicePreview
import br.com.asoncs.multi.passwords.ui.state.UiHomeAthleteState.Success
import br.com.asoncs.multi.passwords.ui.theme.AppTheme
import br.com.asoncs.multi.passwords.ui.viewmodel.AppViewModel
import kotlinx.coroutines.flow.MutableStateFlow

@DevicePreview
@Composable
private fun HomePreview() {
    AppTheme {
        Home(
            Modifier,
            viewModel
        )
    }
}

private val viewModel = object : AppViewModel() {
    override fun uiHomeAthleteState() = MutableStateFlow(
        Success(
            athletes = (0..10).map {
                Athlete(
                    description = "description $it",
                    id = it,
                    name = "name $it",
                    instagram = "instagram $it",
                    wiki = "wiki $it"
                )
            }
        )
    )
}
