<template>
    {{ data.map((d) => d.region ) }}
</template>

<script>
import request from './request';
export default({
    data(){
        return{
            data:[],
        }
    },
    methods:{
        async getAllCountries(){
            const response = await fetch(request.getAllCountries);
            this.data = await response.json();
        },
        async getbyRegion(){
            const response = await fetch(request.getbyRegion('americas'));
            this.data = await response.json()
        }
    },
    created(){
        this.getbyRegion();
    }
});
</script>