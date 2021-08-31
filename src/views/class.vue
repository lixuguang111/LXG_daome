<template>
    <div>
        
    </div>
</template>

<script>
import teachers from '@/http/api'
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    async created(){
        let res = await teachers()
        console.log(res);
    }
}
</script>

<style>

</style>
