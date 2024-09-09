package br.com.asoncs.multi.passwords.ui

import androidx.compose.runtime.Composable
import br.com.asoncs.multi.passwords.di.koinApplication
import br.com.asoncs.multi.passwords.ui.home.HomeAthletes
import br.com.asoncs.multi.passwords.ui.theme.AppTheme
import org.jetbrains.compose.ui.tooling.preview.Preview
import org.koin.compose.KoinApplication

@Composable
@Preview
fun App() {
    KoinApplication(::koinApplication) {
        AppTheme {
            HomeAthletes()
        }
    }
}
