<template>
    <div>
        <h3>Filtros por region</h3>
        <div v-for="region in allRegions" :key  = "region.id">
            <input type="Radio" name="SelectRegion" :value="region"> {{ region }}
        </div>        
    </div>
</template>

<script>
export default{
    data(){
        return{
            allRegions:
            ['all', 'Europe', 'Asia', 'Africa', 'Americas', 'Oceania', 'Antartic']
        }
    }
}
</script>