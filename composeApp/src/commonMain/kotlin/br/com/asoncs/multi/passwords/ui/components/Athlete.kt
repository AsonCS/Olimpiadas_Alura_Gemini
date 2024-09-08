package br.com.asoncs.multi.passwords.ui.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.ClickableText
import androidx.compose.material.Card
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import br.com.asoncs.multi.passwords.model.Athlete
import br.com.asoncs.multi.passwords.platform

@Composable
fun Athlete(
    athlete: Athlete,
    modifier: Modifier = Modifier
) {
    Card(
        modifier
            .padding(8.dp),
        elevation = 2.dp,
        shape = RoundedCornerShape(8.dp)
    ) {
        Column(
            Modifier
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            ClickableText(
                buildAnnotatedString {
                    append(athlete.name)
                },
                style = TextStyle(
                    color = Color(0xff222831),
                    fontSize = 20.sp,
                    fontWeight = FontWeight.Bold
                ),
                onClick = {
                    platform.openLink(athlete.instagram)
                }
            )
            Text(
                athlete.description,
                color = Color(0xff45474B)
            )
            ClickableText(
                buildAnnotatedString {
                    append("Mais informações")
                },
                style = TextStyle(
                    color = Color(0xff30475E)
                ),
                onClick = {
                    platform.openLink(athlete.wiki)
                }
            )
        }
    }
}
