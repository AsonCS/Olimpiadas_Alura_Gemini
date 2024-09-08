package br.com.asoncs.multi.passwords

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.util.Log
import androidx.activity.ComponentActivity

class AndroidPlatform : Platform {

    var application: Application? = null
    var currentActivity: ComponentActivity? = null

    private val context: Context?
        get() = currentActivity ?: application

    override val name: String = "Android ${Build.VERSION.SDK_INT}"

    override fun openLink(
        url: String
    ) {
        runCatching {
            Log.d(this::class.java.simpleName, "openLink url=$url")
            context?.startActivity(
                Intent(
                    Intent.ACTION_VIEW,
                    Uri.parse(url)
                )
            )
        }.onFailure {
            Log.e(this::class.java.simpleName, "openLink", it)
        }.getOrNull()
    }

}

@SuppressLint("StaticFieldLeak")
val androidPlatform = AndroidPlatform()
actual val platform: Platform get() = androidPlatform
