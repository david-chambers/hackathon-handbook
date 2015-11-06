# Put Map in App - ArcGIS Runtime SDK for Android


## Overview

This sample app and guide are a self-contained skeleton app to show the bare minimum required of what you need to do to put a map in your app using the ArcGIS Runtime SDK for Android.  This walk through will grant full access to the ArcGIS Runtime SDK for Android classes - a powerful mapping SDK targeted for android development with simple tools and lots of sample code to make your dreams a reality.  This guide aims to be a reference point for rapidly getting started and combines exisitng resources from official documentation.  It is tested at the most recent version of Google's Android Studio (1.4) to ensure minimal headaches and rapid set-up time.  You also may find the [sample](sample) project helpful to see a project with the steps outlined below already completed.  Lets get started:



## Add the Esri Android SDK


### Prerequisites

1. Android Studio from Google
2. A device that is development enabled


## Create the project
Open Android Studio and select 'Start a new Android Studio Project'

TODO: <image here>

In the 'New Project' window specify the application name, company domain, and a Project location.

TODO: <image here>

Specify the platforms your app will run on

TODO: <image here>

Select Blank Activity

TODO: <image here>

Customize the Activity

TODO: <image here>

Switch to project view

TODO: <image here>

Now, with version 1.4 of Android Studio a Floating Action Bar is included in the blank activity.  You can delete this by following these steps:  

TODO:
http://stackoverflow.com/questions/33205146/how-to-remove-email-icon-from-android-studio-emulation


## Add the ArcGIS Runtime for Android dependency

1. In the Project view select the projects root build.gradle file and add in the following code:

TODO: <image here>

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
[sample]: https://github.com/david-chambers/hackathon-handbook/tree/master/android/put_map_in_app/sample