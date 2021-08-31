<template>
    <div>
        
    </div>
</template>

<script>
import {teachers,recommend} from '@/http/api'
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    async created(){
        let {data:{data:res}} = await recommend()
        console.log(res);
    }
}
</script>

<style>

</style>
