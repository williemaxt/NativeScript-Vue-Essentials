<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <StackLayout>
            <Label class="info" horizontalAlignment="left" verticalAlignment="center">
                <FormattedString>
                    <Span class="fa" text.decode="&#xf135; "/>
                    <Span :text="message"/>
                </FormattedString>
            </Label>
            <Button class="btn" text="Login" @tap="goTo" />
        </StackLayout>
    </Page>
</template>
<script>
    import Login from "./Login"
    import Final from "./Final" //IMPORTING THE FINAL COMPONENT
    export default {
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        },
        methods: {
          goTo(){
            this.$navigateTo(Login, {clearHistory: true})
            console.log('click works!')
          }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;
    }
    .btn{
      height: 200px;
      border-radius: 100px;
      background: blue;
      color: white;
      width: 600px;
      font-weight: bold;
      background-image: linear-gradient(to right,purple,pink);
      box-shadow: 0 0 10px #333;
    }
</style>
