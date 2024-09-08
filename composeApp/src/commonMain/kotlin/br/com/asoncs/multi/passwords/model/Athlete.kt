package br.com.asoncs.multi.passwords.model

import kotlinx.serialization.Serializable

@Serializable
data class Athlete(
    val description: String,
    val id: Int,
    val instagram: String,
    val name: String,
    val wiki: String
)
