import Vue from "nativescript-vue";
import routes from "./router"; //IMPORTING THE ROUTES FOLDER



new Vue({
    //make this vue instance render from home component inside the routes folder
    render: h => h('frame', [h(routes.home)])
}).$start();
