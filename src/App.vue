<template>
  <v-app>
    
    <v-content>
     <compHeader/>
     <router-view/>
     <compfooter/>
    </v-content>
  </v-app>
</template>

<script>
import compHeader from './components/Header';
import compfooter from './components/footer';
export default {
  name: 'App',
  components: {
    compHeader,
    compfooter
  },
  data: () => ({
    //
  }),
};
</script>
