<template>
    {{ loadData.map((d) => d.region ) }}
</template>

<script>
import request from './request';

export default({
    data(){
        return{
            data:[],
            firstIndex: 0,
            lastIndex: 0,
            sliceData: []
        }
    },
    methods:{
        async getAllCountries(){
            const response = await fetch(request.getAllCountries);
            this.data = await response.json()
            this.total = this.data.length;
        },
        async getbyRegion(){
            const response = 
            await fetch(request.getbyRegion(this.$store.state.currentRegion));
            this.data = await response.json()
            this.total = this.data.length;
        }
    },
    computed: {
        loadData(){
            if(this.$store.state.currentRegion == "All" ){
                this.getAllCountries()
                this.lastIndex = this.$store.state.currentPage * 10;
                this.firstIndex = this.lastIndex - 10;
                this.sliceData = this.data.slice(this.firstIndex, this.lastIndex)
            } else {
                this.getbyRegion()
            }
            return this.sliceData
        }, 
        total:{
            get(){
                return this.$store.state.total
            },
            set(value){
                this.$store.commit("SET_TOTAL", value)
            }
         }
    }
});
</script>