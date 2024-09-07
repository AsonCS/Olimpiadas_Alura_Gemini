package br.com.asoncs.multi.passwords.ui.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Card
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import br.com.asoncs.multi.passwords.model.Athlete

@Composable
fun Athlete(
    athlete: Athlete,
    modifier: Modifier = Modifier
) {
    Card(
        modifier
            .padding(8.dp)
    ) {
        Column(
            Modifier
                .padding(8.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text(athlete.name)
            Text(athlete.description)
            Text(athlete.instagram)
            Text(athlete.wiki)
        }
    }
}
