 <template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="pt-3">
                <h3>Login</h3>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 class="mt-3">
                <v-form v-model="valid" ref="form">
                    <h4>Login form</h4>
                    <v-text-field label="Email" v-model="user.email" :rules="emailrules" required></v-text-field>
                    <v-text-field label="Password" v-model="user.password" :rules="passwordrules" required></v-text-field>
                    <v-flex class="mt-3">
                        <v-checkbox
  
                        v-model="checkbox"
                        label="Remember me"
                        ></v-checkbox>
                        <v-btn text to="/register" color="primary"> signup</v-btn><br/>
                <v-btn @click="login" class="mt-3">Login</v-btn>
                <v-btn class="ml-3 mt-3">cancel</v-btn>
                
            </v-flex>
                </v-form>
            </v-flex>
            
        </v-layout>
    </v-container>
</template>"

<script>
import axios from 'axios';
const api = 'http://localhost:3000/users/login';
export default {
    
    data(){
        return {
            users:[],
           user:{
               email:'',
               password:''
           },
            emailrules:[
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
         passwordrules:[
            (v) => !!v || 'password is required',

        ],
        }
        
    },
    methods:{
       login(){
           this.$refs.form.validate();
           let User={
               email:this.user.email,
               password:this.user.password
           }
           axios.post(api,User)
           .then(()=>{
               
               this.$store.commit("setAuthentication", true);
                              
               this.$router.push('/home');

           })
           
       }
    }
}
</script>

<style>

</style>
