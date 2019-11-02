<template>
    <v-app-bar app color="#4a148c">
        <v-toolbar-title  class="white--text ml-3">
         Trans   
        </v-toolbar-title>
        <v-flex offset-4>
        <v-toolbar-items >
            <v-btn text to="/home" class="white--text">Home</v-btn>
            <v-btn text to="/about" class="white--text">About</v-btn>
            <v-btn text to="/contact" class="white--text">Contact</v-btn>
            <v-spacer></v-spacer>
            <v-btn text to="/login" class="white--text">Login</v-btn>
        </v-toolbar-items>
        </v-flex>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>
