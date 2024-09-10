package br.com.asoncs.multi.passwords.di

import br.com.asoncs.multi.passwords.data.Repository
import br.com.asoncs.multi.passwords.ui.viewmodel.AppViewModel
import kotlinx.serialization.json.Json
import org.koin.core.module.dsl.viewModel
import org.koin.dsl.koinApplication
import org.koin.dsl.module

fun koinApplication() = koinApplication {
    modules(
        module {
            // Repository
            factory<Repository> {
                Repository.Impl(get())
            }

            // ViewModel
            viewModel<AppViewModel> {
                AppViewModel.Impl(
                    repository = get()
                )
            }

            factory {
                Json {
                    ignoreUnknownKeys = true
                }
            }
        }
    )
}
