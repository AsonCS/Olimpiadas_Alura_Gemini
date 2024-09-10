package br.com.asoncs.multi.passwords.ui.home

import androidx.compose.runtime.Composable
import br.com.asoncs.multi.passwords.ui.DevicePreview
import br.com.asoncs.multi.passwords.ui.theme.AppTheme

@DevicePreview
@Composable
private fun HeaderPreview() {
    AppTheme {
        Header(
            "",
            onSearchTextChange = {},
            onSearch = {}
        )
    }
}

@DevicePreview
@Composable
private fun HeaderPreviewWithSearchText() {
    AppTheme {
        Header(
            "Search text",
            onSearchTextChange = {},
            onSearch = {}
        )
    }
}
