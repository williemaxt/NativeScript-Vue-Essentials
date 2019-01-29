<template>
  <Page class="page">
    <ActionBar class="action-bar">
        <Label class="action-bar-title" text="Account" horizontalAlignment="left"></Label>
    </ActionBar>
      <ScrollView orientation="vertical">

        <StackLayout>

          <SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" textFieldBackgroundColor="white"/>

          <Switch checked="true" />

          <DatePicker :date="someDate" />

          <SegmentedBar>
            <SegmentedBarItem title="Home"/>
            <SegmentedBarItem title="Second"/>
            <SegmentedBarItem title="Final"/>
          </SegmentedBar>

          <Button class="btn" text="Send Post" @tap="makeRequest" />

          <Button class="btn" text="LogOut" @tap="goTo" />

          <Button class="btn" text="Final" @tap="goToFinal" />

        </StackLayout>

      </ScrollView>
  </Page>
</template>

<script>
import Home from "./Home" //IMPORTING THE HOME COMPONENT
import Final from "./Final" //IMPORTING THE FINAL COMPONENT
import * as http from "http"; //IMPORTING THE HTTP MODULE (FOR AJAX REQUESTS)
export default {
  data(){
    return{

    }
  },
  methods: {
    goTo(){ //THIS FUNCTION GOES TO A DIFFERENT ROUTE (PAGE)
      this.$navigateTo(Home, {clearHistory: true})
      console.log('click works!')
    },
    goToFinal(){
      console.log('final works');
      this.$navigateTo(Final, {clearHistory: true})
    },
    makeRequest(){ //THIS FUNCTION SENDS A POST REQUEST
      console.log('We tapped request')
      http.request({
        url: "https://httpbin.org/post",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({
          username: "username",
          password: "password"
        })
      }).then(response => {
        //establishing a variable for result and converting it ti JSON
        var result = response.content.toJSON();
        //entering the nested object called data
        result = result.data
        //parsing that as JSON
        result = JSON.parse(result)
        //logging the username property of the result
        console.log('The response is: ' + result.username)
      }, error => {
        console.error(error);
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
