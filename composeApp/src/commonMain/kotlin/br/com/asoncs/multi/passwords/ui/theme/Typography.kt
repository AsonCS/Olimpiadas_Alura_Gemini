package br.com.asoncs.multi.passwords.ui.theme

import androidx.compose.material.MaterialTheme
import androidx.compose.material.Typography
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

@Composable
fun appTypography() = MaterialTheme.typography

val themeTypography = Typography(
    h2 = TextStyle(
        fontSize = 20.sp,
        fontWeight = FontWeight.Bold
    )
)

val themeTypographyExpanded = Typography(
    h2 = TextStyle(
        fontSize = 24.sp,
        fontWeight = FontWeight.Bold
    )
)
