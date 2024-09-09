@file:OptIn(ExperimentalFoundationApi::class)

package br.com.asoncs.multi.passwords.ui.components

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.ClickableText
import androidx.compose.material.Card
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import br.com.asoncs.multi.passwords.model.Athlete
import br.com.asoncs.multi.passwords.platform
import br.com.asoncs.multi.passwords.ui.theme.appColors
import br.com.asoncs.multi.passwords.ui.theme.appColorsA1
import br.com.asoncs.multi.passwords.ui.theme.appColorsHeadline2
import br.com.asoncs.multi.passwords.ui.theme.appTypography
import br.com.asoncs.multi.passwords.util.log

const val TAG = "Athlete"

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
            var h2TextDecoration by remember {
                mutableStateOf(TextDecoration.None)
            }
            ClickableText(
                buildAnnotatedString {
                    val h1Style = appTypography().h2
                    withStyle(
                        SpanStyle(
                            color = appColorsHeadline2,
                            fontSize = h1Style.fontSize,
                            fontWeight = h1Style.fontWeight,
                            textDecoration = h2TextDecoration
                        )
                    ) {
                        append(athlete.name)
                    }
                },
                onClick = {
                    TAG.log("openLink: ${athlete.instagram}")
                    platform.openLink(athlete.instagram)
                },
                onHover = {
                    h2TextDecoration = if (it != null)
                        TextDecoration.Underline
                    else
                        TextDecoration.None
                }
            )

            Text(
                athlete.description,
                color = appColors().onBackground
            )

            var a1TextDecoration by remember {
                mutableStateOf(TextDecoration.None)
            }
            ClickableText(
                buildAnnotatedString {
                    withStyle(
                        SpanStyle(
                            color = appColorsA1,
                            textDecoration = a1TextDecoration
                        )
                    ) {
                        append("Mais informações")
                    }
                },
                onClick = {
                    TAG.log("openLink: ${athlete.wiki}")
                    platform.openLink(athlete.wiki)
                },
                onHover = {
                    a1TextDecoration = if (it != null)
                        TextDecoration.Underline
                    else
                        TextDecoration.None
                }
            )
        }
    }
}
