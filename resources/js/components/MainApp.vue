   <template>
    <div class="container-fluid">
<navigation/>
        <div class="content pt-4">
            <router-view></router-view>

        </div>
    </div>
</template>

<script>
    import Navigation from "./Navigation";
    export default {
        name: 'main-app',
        components: {Navigation},
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
