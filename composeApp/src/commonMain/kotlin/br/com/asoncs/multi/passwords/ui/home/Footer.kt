package br.com.asoncs.multi.passwords.ui.home

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import br.com.asoncs.multi.passwords.ui.theme.appColorsFooter1
import br.com.asoncs.multi.passwords.ui.theme.appTypography

@Composable
fun Footer(
    modifier: Modifier = Modifier
) {
    Column(
        modifier
            .wrapContentHeight()
            .fillMaxWidth()
            .background(appColorsFooter1)
            .padding(
                vertical = 12.dp
            ),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        Text(
            "2024 - Atletas do Brasil. Todos os direitos reservados",
            style = appTypography().body1
        )
        Text(
            "Entre em contato pelo email: guilherme@atletas.com.br",
            style = appTypography().body1
        )
    }
}
