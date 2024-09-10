package br.com.asoncs.multi.passwords.ui.components

import androidx.compose.runtime.Composable
import br.com.asoncs.multi.passwords.model.Athlete
import br.com.asoncs.multi.passwords.ui.DevicePreview

@DevicePreview
@Composable
private fun AthletePreview() {
    Athlete(
        athlete = Athlete(
            description = "Rebeca Andrade é uma renomada ginasta brasileira que fez história em seu esporte. Conhecida por suas habilidades e capacidade atlética excepcionais, Andrade ganhou inúmeras medalhas nos Jogos Olímpicos e Campeonatos Mundiais, solidificando seu status como uma das maiores ginastas da história do Brasil. Sua dedicação, talento e determinação inspiraram inúmeros jovens atletas e trouxeram imenso orgulho ao seu país.",
            id = 1,
            name = "Rebeca Andrade",
            instagram = "https://www.instagram.com/rebecarandrade/",
            wiki = "https://pt.wikipedia.org/wiki/Rebeca_Andrade"
        )
    )
}
