# Put Map in App - ArcGIS Runtime SDK for Android


## Overview

This sample app and guide are a self-contained skeleton app to show the bare minimum required of what you need to do to put a map in your app using the ArcGIS Runtime SDK for Android.  This walk through will grant full access to the ArcGIS Runtime SDK for Android classes - a powerful mapping SDK targeted for android development with simple tools and lots of sample code to make your dreams a reality.  This guide aims to be a reference point for rapidly getting started and combines exisitng resources from official documentation.  It is tested at the most recent version of Google's Android Studio (1.4) to ensure minimal headaches and rapid set-up time.  You also may find the [sample](put_map_in_app/sample) project helpful to see a project with the steps outlined below already completed.  Lets get started:



## Add the Esri Android SDK


### Prerequisites

1. Download and install [Android Studio][android-studio] from Google
2. An Android device that is [set up for development][developer-enabled-device]


## Create the project in Android Studio

Follow these steps in the android documentation for creating your first project

[Creating an Android Project][first-project]

Note: Now, with version 1.4 of Android Studio a Floating Action Bar is included in the blank activity.  You can delete this by following these [steps][floating-action] 

Note: In version 1.4 of Android Studio there are two files in the project view /app/src/res/layout.  Select 'empty activity' to default to a single version or replace content_main.xml with activity_main.xml references.

[Explanation][two-xml-files]

Awesome! First project created...it should look something like this in the 'Design' view.  Also test running it on an emulator or your physical device that is plugged in to USB

![Alt text](help_images/firstApp.jpg?raw=true "Optional Title")

## Add the ArcGIS Runtime for Android dependency

1. In the Android 'Project' view select the projects root build.gradle file and add in the following code

    ```
    allprojects {
        repositories {
            jcenter()
            // ADD ESRI MAVEN REPO
            maven {
                url 'http://esri.bintray.com/arcgis'
            }
        }
    }
    ```

    [Completed file here](put_map_in_app/sample/build.gradle)

2. Next, in the Android 'Project' view, open the app/ directory and double click on the modules build.gradle file.  Here we are going to add the dependency and packagingOptions:

    ```
    apply plugin: 'com.android.application'
    
    android {
        compileSdkVersion 22
        buildToolsVersion "22.0.1"
    
        defaultConfig {
            applicationId "com.esri.put_map_in_app"
            minSdkVersion 15
            targetSdkVersion 22
            versionCode 1
            versionName "1.0"
        }
        //ADD PACKAGING OPTIONS
        packagingOptions{
            exclude 'META-INF/LGPL2.1'
            exclude 'META-INF/LICENSE'
            exclude 'META-INF/NOTICE'
        }
        buildTypes {
            release {
                minifyEnabled false
                proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
            }
        }
    }
    
    dependencies {
        compile fileTree(dir: 'libs', include: ['*.jar'])
        testCompile 'junit:junit:4.12'
        compile 'com.android.support:appcompat-v7:22.2.1'
        compile 'com.android.support:design:22.2.1'
        //ADD ESRI DEPENDENCY
        compile 'com.esri.arcgis.android:arcgis-android:10.2.7'
    }
    ```
    [Completed file here](put_map_in_app/sample/app/build.gradle)

3. In the Android Studio toolbar, click Sync Project with Gradle  Files!


## Put the map in your app!

1. In the Project view window, under app, navigate to src > main > res > layout then double-click 'content_main.xml' 
2. At the bottom-left of the window, click Text to show the XML view of the layout.  By default, there are two tags in 'content_main.xml'
3. Select the entire TextView XML element and replace it with MapView element as shown below.  

    ```xml
    <com.esri.android.map.MapView
            android:id="@+id/map"
            android:layout_width="fill_parent"
            android:layout_height="fill_parent"
            mapoptions.MapType="Streets"
            mapoptions.center="34.056215, -117.195668"
            mapoptions.ZoomLevel="16">
    </com.esri.android.map.MapView>
    ```
    [Completed file here](put_map_in_app/sample/app/src/main/res/layout/content_main.xml)

4. In the Project view window, under app, navigate to src > main > and double-click 'AndroidManifest.xml'.  Here we will add in our permissions.  Android is a permissions-separated operating system. Depending on what ArcGIS capabilities you use in your app, you may need to add permissions to your manifest, as follows. Be sure not to include permissions for capabilities not included in your app.

    ArcGIS capabilities that require permissions:
    
    - Access to the Internet (most apps will require this)
    - Access to files on disk (some apps will require this)
    - Access to the device's GPS will require fine location permissions
    - Apps that use MapView will require using OpenGL 2.x.
    The following code example (for the AndroidManifest.xml file) includes permissions for all capabilities. 

    ```xml
        <uses-permission android:name="android.permission.INTERNET" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    
        <uses-feature
            android:glEsVersion="0x00020000"
            android:required="true" />
    ```
    [Completed file here](put_map_in_app/sample/app/src/main/AndroidManifest.xml)

5. Sync your Gradle Files and run your app!

![Alt text](http://i.imgur.com/vIf0lAD.gif?raw=true "Optional Title")
## Further Reading
Esri Guides on various topics are available as part of the [Android Documentation][android-docs], including initial [Install and Setup][install-setup] and [Add a Map to your app][add-map-to-app].

[android-docs]: https://developers.arcgis.com/android/guide/welcome-to-the-help-for-arcgis-runtime-sdk-for-android.htm
[install-setup]: https://developers.arcgis.com/android/guide/install-and-set-up.htm
[add-map-to-app]: https://developers.arcgis.com/android/guide/develop-your-first-map-app.htm
[android-studio]: https://developer.android.com/sdk/index.html
[developer-enabled-device]: http://developer.android.com/tools/device.html
[first-project]: http://developer.android.com/training/basics/firstapp/creating-project.html
[floating-action]: http://stackoverflow.com/questions/33205146/how-to-remove-email-icon-from-android-studio-emulation
[two-xml-files]: http://stackoverflow.com/questions/32880722/what-is-the-role-of-content-main-xml-in-android-studio-1-4
