package br.com.asoncs.multi.passwords.ui.theme

import androidx.compose.material.MaterialTheme
import androidx.compose.material.darkColors
import androidx.compose.material.lightColors
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

@Composable
fun appColors() = MaterialTheme.colors

val appColorsHeadline2 = Color(0xff222831)
val appColorsA1 = Color(0xff30475E)
val appColorsP1 = Color(0xff45474B)

val themeDarkColors = darkColors(
    background = Color.White,
    primary = Color.Red,
    primaryVariant = Color.Red,
    secondary = Color.Red,

    onBackground = appColorsP1
)

val themeLightColors = lightColors(
    background = Color.White,
    primary = Color.Red,
    primaryVariant = Color.Red,
    secondary = Color.Red,

    onBackground = appColorsP1
)
