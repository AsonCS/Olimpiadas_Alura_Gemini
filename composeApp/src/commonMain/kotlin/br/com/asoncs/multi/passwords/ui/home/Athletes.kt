package br.com.asoncs.multi.passwords.ui.home

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import br.com.asoncs.multi.passwords.model.Athlete
import br.com.asoncs.multi.passwords.ui.components.Athlete

@Composable
fun Athletes(
    athletes: List<Athlete>,
    modifier: Modifier = Modifier
) {
    LazyColumn(
        modifier
            .fillMaxWidth(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        items(
            items = athletes,
            key = { it.id }
        ) { athlete ->
            Athlete(athlete)
        }
    }
}
