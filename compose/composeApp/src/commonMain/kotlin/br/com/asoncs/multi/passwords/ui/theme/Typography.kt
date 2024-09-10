package br.com.asoncs.multi.passwords.ui.theme

import androidx.compose.material.MaterialTheme
import androidx.compose.material.Typography
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import org.jetbrains.compose.resources.Font
import olimpiadas_alura_googlegemini.composeapp.generated.resources.Res
import olimpiadas_alura_googlegemini.composeapp.generated.resources.chakra_petch_bold
import olimpiadas_alura_googlegemini.composeapp.generated.resources.chakra_petch_bold_italic
import olimpiadas_alura_googlegemini.composeapp.generated.resources.chakra_petch_italic
import olimpiadas_alura_googlegemini.composeapp.generated.resources.chakra_petch_light
import olimpiadas_alura_googlegemini.composeapp.generated.resources.chakra_petch_light_italic
import olimpiadas_alura_googlegemini.composeapp.generated.resources.chakra_petch_medium
import olimpiadas_alura_googlegemini.composeapp.generated.resources.chakra_petch_medium_italic
import olimpiadas_alura_googlegemini.composeapp.generated.resources.chakra_petch_regular
import olimpiadas_alura_googlegemini.composeapp.generated.resources.chakra_petch_semi_bold
import olimpiadas_alura_googlegemini.composeapp.generated.resources.chakra_petch_semi_bold_italic

@Composable
fun appTypography() = MaterialTheme.typography

@Composable
fun themeTypography(): Typography {
    val chakraPetch = FontFamily(
        Font(
            Res.font.chakra_petch_bold,
            FontWeight.Bold
        ),
        Font(
            Res.font.chakra_petch_bold_italic,
            FontWeight.Bold,
            FontStyle.Italic
        ),
        Font(
            Res.font.chakra_petch_italic,
            FontWeight.Normal,
            FontStyle.Italic
        ),
        Font(
            Res.font.chakra_petch_light,
            FontWeight.Light
        ),
        Font(
            Res.font.chakra_petch_light_italic,
            FontWeight.Light,
            FontStyle.Italic
        ),
        Font(
            Res.font.chakra_petch_medium,
            FontWeight.Medium
        ),
        Font(
            Res.font.chakra_petch_medium_italic,
            FontWeight.Medium,
            FontStyle.Italic
        ),
        Font(
            Res.font.chakra_petch_regular,
            FontWeight.Normal
        ),
        Font(
            Res.font.chakra_petch_semi_bold,
            FontWeight.SemiBold
        ),
        Font(
            Res.font.chakra_petch_semi_bold_italic,
            FontWeight.SemiBold,
            FontStyle.Italic
        )
    )

    return Typography(
        body1 = TextStyle(
            fontFamily = chakraPetch
        ),
        h1 = TextStyle(
            fontFamily = chakraPetch,
            fontSize = 26.sp,
            fontWeight = FontWeight.Bold
        ),
        h2 = TextStyle(
            fontFamily = chakraPetch,
            fontSize = 20.sp,
            fontWeight = FontWeight.Bold
        )
    )
}

@Composable
fun themeTypographyExpanded(): Typography = themeTypography()
