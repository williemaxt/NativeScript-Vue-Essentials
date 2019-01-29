<template>
  <Page class="page">

    <ActionBar class="action-bar">
        <Label class="action-bar-title" text="Final"></Label>
    </ActionBar>

      <ScrollView>

        <StackLayout>

          <Image :src="imageSrc" style="width:500;height:auto" />

          <Button class="btn" text="Get Gps" @tap="getGps" />

          <Button class="btn" text="Open Camera" @tap="openCamera" />

          <Button class="btn" text="LogOut" @tap="goTo" />

        </StackLayout>

      </ScrollView>

  </Page>
</template>

<script>
var geolocation = require("nativescript-geolocation"); //IMPORTING GEOLOCATION (REQUIRES PLUGIN)
import { Image } from "tns-core-modules/ui/image"
import * as camera from "nativescript-camera" //IMPORTING CAMERA (NEEDS NPM INSTALL)
import Home from "./Home" //IMPORTING THE HOME COMPONENT
import Login from "./Login"
export default {
  data(){
    return{
      imageSrc: ''
    }
  },
  methods:{
    goTo(){ //THIS FUNCTION GOES TO A DIFFERENT ROUTE (PAGE)
      this.$navigateTo(Home, {clearHistory: true})
      console.log('click works!')
    },
    getGps(){ //THIS FUNCTION WILL GET GPS
      var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
      then(function(loc) {
          if (loc) {
              //setting variables for geo location plugin properties
              var latitude = loc.latitude
              var longitude = loc.longitude
              var timestamp = loc.timestamp
              var altitude = loc.altitude
              //logging for development
              console.log("Current latitude is: " + latitude)
              console.log("Current longitude is: " + longitude)
              console.log("Current timestamp is: " + timestamp)
              console.log("Current altitude is: " + altitude)
          }
      }, function(e){
          console.log("Error: " + e.message);
      });
    },
    openCamera(){ //THIS FUNCTION WILL OPEN THE CAMERA
      camera.requestPermissions();

      camera.takePicture({ width: 700, height: 700, keepAspectRatio: true })
      .then(
        imageAsset => {
          this.imageSrc = '' //EMPTY THE IMAGE SOURCE BEFORE NEW PICTURE
          console.log("Result is an image asset instance");
          this.imageSrc = imageAsset;
        },
        error => console.log(error)
      )
      .catch(err => {
        console.log("Error -> " + err.message);
      });
    }
  }
}
</script>

<style scoped>
.btn{
  height: 200px;
  border-radius: 100px;
  background: blue;
  color: white;
  width: 600px;
  font-weight: bold;
  background-image: linear-gradient(to right,purple,blue);
  box-shadow: 0 0 10px #333;
}
.action-bar{
  background-image: linear-gradient(to right,purple,blue);
}
</style>
