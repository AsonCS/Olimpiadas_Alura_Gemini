package br.com.asoncs.multi.passwords.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable

@Composable
fun AppTheme(
    @Suppress("SimplifyBooleanWithConstants")
    isDarkTheme: Boolean = false && isSystemInDarkTheme(),
    isWidthSizeExpanded: Boolean = false,
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colors = if (isDarkTheme)
            themeDarkColors
        else
            themeLightColors,
        shapes = themeShapes,
        typography = if (isWidthSizeExpanded)
            themeTypographyExpanded
        else
            themeTypography
    ) {
        Surface(
            contentColor = appColors().background,
            content = content
        )
    }
}
