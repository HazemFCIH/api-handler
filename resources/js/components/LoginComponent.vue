<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-8">
            <div class="card">
                <div class="card-header">
                    Login
                </div>
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="form-group row" v-if="authError">
                            <p class="error">
                                {{authError}}
                            </p>
                        </div>
                        <div class="form-group row">

                            <label for="email" class="col-4 col-form-label text-right" >Email</label>
                            <input type="text" name="email" id="email" v-model="form.email" required class="form-control">
                        </div>
                        <div class="form-group row">
                            <label for="password" class="col-4 col-form-label text-right" >Password</label>
                            <input type="password" name="password" id="password" v-model="form.password" required class="form-control">
                        </div>
                        <div class="from-group row">
                            <div class="col-8 offset-4">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {login} from "../auth";

export default {
    data(){
        return{
            form:{
                email:'',
                password:'',
            },
            error:null,
        }
    },methods:{
        login(){
            this.$store.dispatch('login');
            login(this.$data.form).then(res => {
                this.$store.commit('loginSuccess',res);
                this.$router.push({path : '/dashboard'});
            }).catch(err =>{
                this.$store.commit('loginFailed',err)
            })
        }
    },computed:{
      authError(){
          return this.$store.getters.authError;

      },
        registeredUser() {
            return this.$store.getters.registeredUser;
        }
    },
    name: "login-component"
}
</script>

<style scoped>
.error{
    text-align: center;
    color: red;
}
</style>
