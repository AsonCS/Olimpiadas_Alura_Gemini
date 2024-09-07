package br.com.asoncs.multi.passwords.ui.components

import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import br.com.asoncs.multi.passwords.data.athletes

@Preview
@Composable
private fun AthletePreview() {
    Athlete(
        athlete = athletes.first()
    )
}
