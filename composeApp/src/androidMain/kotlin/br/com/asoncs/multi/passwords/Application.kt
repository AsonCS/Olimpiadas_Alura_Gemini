package br.com.asoncs.multi.passwords

import android.app.Application

@Suppress("MemberVisibilityCanBePrivate")
class Application : Application() {

    override fun onCreate() {
        super.onCreate()
        androidPlatform.application = this
    }

    override fun onLowMemory() {
        androidPlatform.application = null
        super.onLowMemory()
    }

    override fun onTerminate() {
        androidPlatform.application = null
        super.onTerminate()
    }

}
