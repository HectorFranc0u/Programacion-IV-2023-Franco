~<template>
    <div>
        <h3>Filtros por region</h3>
        <div v-for="region in allRegions" :key ="region.id">
            <input type="Radio" name="selectRegion" 
            
            v-model="currentRegion"> 
            {{region}}
        </div>        
    </div>
    <br />
    {{ $store.state.currentRegion }} <br/> <br />
</template>

<script>
export default{
    data(){
        return{
            allRegions:
            ['all', 'Europe', 'Asia', 'Africa', 'Americas', 'Oceania', 'Antartic']
        }
    },
    computed: {
        currentRegion:{
            get(){
                return this.$store.state.currentRegion
            },
            set(value){
                this.$store.commit("SET_REGION", value)
            }
        }
    }
}
</script>