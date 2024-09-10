package br.com.asoncs.multi.passwords.ui.theme

import androidx.compose.material.MaterialTheme
import androidx.compose.material.darkColors
import androidx.compose.material.lightColors
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

@Composable
fun appColors() = MaterialTheme.colors

val appColorsA1 = Color(0xff30475e)
val appColorsButton1 = Color(0xff30475e)
val appColorsButtonText1 = Color(0xfff5f7f8)
val appColorsFooter1 = Color(0xfff5f7f8)
val appColorsHeadline1 = Color(0xff222831)
val appColorsHeadline2 = Color(0xff30475e)
val appColorsInput1 = Color(0xff45474b)
val appColorsP1 = Color(0xff45474b)

val themeDarkColors = darkColors(
    background = Color(0xffdddddd),
    primary = appColorsHeadline1,
    primaryVariant = Color.Red,
    secondary = Color.Red,

    onBackground = appColorsP1
)

val themeLightColors = lightColors(
    background = Color(0xffdddddd),
    primary = appColorsHeadline1,
    primaryVariant = Color.Red,
    secondary = Color.Red,

    onBackground = appColorsP1
)
