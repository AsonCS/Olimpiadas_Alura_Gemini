package br.com.asoncs.multi.passwords.ui.home

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import br.com.asoncs.multi.passwords.ui.DevicePreview
import br.com.asoncs.multi.passwords.ui.theme.AppTheme

@DevicePreview
@Composable
private fun FooterPreview() {
    AppTheme {
        Box {
            Footer(
                Modifier
                    .align(Alignment.BottomCenter)
            )
        }
    }
}
