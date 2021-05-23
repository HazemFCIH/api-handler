<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        Create post
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="CreatePost">

                            <div class="form-group row">

                                <label for="title" class="col-4 col-form-label text-right" >Title</label>
                                <input type="text" name="title" id="title" v-model="form.title" required class="form-control">
                            </div>
                            <div class="form-group row">
                                <label for="body" class="col-4 col-form-label text-right" >body</label>
                                <textarea name="body" id="body" class="form-control" v-model="form.body"></textarea>
                            </div>
                            <div class="from-group row">
                                <div class="col-8 offset-4">
                                    <button type="submit" class="btn btn-primary">create</button>
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
import {CreatePost} from "../posts";

export default {
    name: "CreatePost",
    data(){
        return {
            form:{
                title : '',
                body:'',
            },
        }
    },
    methods :{
        CreatePost(){
            CreatePost(this.$data.form)
            .then(res =>{
                this.$router.push({path : '/dashboard'});
            }).catch(err => {
                console.log(err);
            })
        }

    },
}
</script>

<style scoped>

</style>
