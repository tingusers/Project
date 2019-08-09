<template>
    <div class="headers">
        <Head/>
        <Content/>
    </div>
</template>
<script>
import Head from './index.vue';
import Content from '../content/index';
export default {
    name:"headers",
    components:{
        Head,
        Content,
    }
}
</script>
<style>
    .headers{
        width:100%;
        position: absolute;
        overflow-y: auto;
        top:0;
        bottom:0.46rem;
    }

</style>