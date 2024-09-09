package br.com.asoncs.multi.passwords.ui.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Text
import androidx.compose.material.TextButton
import androidx.compose.material.TextField
import androidx.compose.material.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import br.com.asoncs.multi.passwords.ui.theme.appColorsButton1
import br.com.asoncs.multi.passwords.ui.theme.appColorsButtonText1
import br.com.asoncs.multi.passwords.ui.theme.appColorsHeadline1
import br.com.asoncs.multi.passwords.ui.theme.appColorsInput1
import br.com.asoncs.multi.passwords.ui.theme.appTypography

@Composable
fun Header(
    searchText: String,
    onSearchTextChange: (String) -> Unit,
    onSearch: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier
            .widthIn(
                max = 500.dp
            )
            .fillMaxWidth()
            .padding(32.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(32.dp)
    ) {
        Text(
            "Atletas do Brasil",
            Modifier,
            color = appColorsHeadline1,
            style = appTypography().h1,
            textAlign = TextAlign.Center
        )

        TextField(
            value = searchText,
            onValueChange = onSearchTextChange,
            Modifier
                .fillMaxWidth(),
            colors = TextFieldDefaults.textFieldColors(
                backgroundColor = Color.White,
                placeholderColor = appColorsInput1,
                textColor = appColorsInput1,

                disabledIndicatorColor = Color.Transparent,
                errorIndicatorColor = Color.Transparent,
                focusedIndicatorColor = Color.Transparent,
                unfocusedIndicatorColor = Color.Transparent
            ),
            placeholder = {
                Text(
                    "Digite o nome do atleta ou esporte",
                    Modifier
                )
            },
            shape = CircleShape
        )

        TextButton(
            onClick = onSearch,
            Modifier,
            colors = ButtonDefaults.buttonColors(
                backgroundColor = appColorsButton1
            ),
            shape = CircleShape
        ) {
            Text(
                "Pesquisar",
                Modifier
                    .padding(
                        horizontal = 8.dp,
                        vertical = 4.dp
                    ),
                color = appColorsButtonText1
            )
        }
    }
}
