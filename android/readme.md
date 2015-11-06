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

'''
allprojects {
    repositories {
        jcenter()
        // add the esri arcgis maven repo
        maven {
            url 'http://esri.bintray.com/arcgis'
        }
    }
}
'''



2. Next, open the app/ directory and double click on the modules build.gradle file.  Here we are going to add the dependency and packagingOptions:

TODO: <image here>

3. In the Android Studio toolbar, click Sync Project with Gradle  Files!


## Put the map in your app!

1. In the Project view window, under app, navigate to src > main > res > layout then double-click 'content_main.xml' 
2. At the bottom-left of the window, click Text to show the XML view of the layout.  By default, there are two tags in 'content_main.xml'
3. Select the entire TextView XML element and replace it with MapView element as shown below.  
4. Add in uses permissions (maybe put this higher up)?

## Further Reading
Guides on various topics are available as part of the [Geotrigger Documentation][geotrigger-docs], including interacting with the `AGSGTGeotriggerManager`, working with the Geotrigger API, and configuring push notifications. Information about other platforms and the API itself are also available.

The SDK's [reference doc](Docs) is also available in this repo.

[esri-site]: http://www.esri.com
[arcgis-dev-site]: https://developers.arcgis.com
[geotrigger-docs]: https://developers.arcgis.com/en/geotrigger-service
[geotrigger-api-ref]: https://developers.arcgis.com/en/geotrigger-service/api-reference
[CocoaPods]: http://cocoapods.org/
[android-studio]: https://developer.android.com/sdk/index.html
[developer-enabled-device]: http://developer.android.com/tools/device.html
[first-project]: http://developer.android.com/training/basics/firstapp/creating-project.html
[floating-action]: http://stackoverflow.com/questions/33205146/how-to-remove-email-icon-from-android-studio-emulation
[two-xml-files]: http://stackoverflow.com/questions/32880722/what-is-the-role-of-content-main-xml-in-android-studio-1-4
