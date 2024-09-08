package br.com.asoncs.multi.passwords.ui

import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.lifecycle.viewmodel.compose.viewModel
import br.com.asoncs.multi.passwords.di.AppModule
import br.com.asoncs.multi.passwords.ui.home.HomeAthletes
import br.com.asoncs.multi.passwords.ui.viewmodel.AppViewModel
import org.jetbrains.compose.ui.tooling.preview.Preview

@Composable
@Preview
fun App(
    appViewModel: AppViewModel = viewModel { AppModule.appViewModel }
) {
    MaterialTheme {
        HomeAthletes(appViewModel)
    }
}
