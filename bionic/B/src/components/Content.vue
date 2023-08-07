<script>
import { useCounterStore } from '../stores/counter';
import { mapState, mapActions } from 'pinia';


export default {
    computed: {
        ...mapState(useCounterStore, ['jobs'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchJobs'])
    },
    created() {
        this.fetchJobs()
    }
}

</script>


<template>
    <div class="justify-center">
        <h3
            class="mb-4 ml-72 text-4xl font-extrabold leading-none tracking-tight text-green-600 md:text-5xl lg:text-6xl dark:text-white">
            {{ jobs[0]?.title }}
        </h3>
        <div class="ml-72" v-html="jobs[0]?.description?.txt">
        </div>
        <h3 class="ml-72" style="font-size: 18px; font-weight: bold;">
            Send Your Job Application
        </h3>

    </div>
</template>
  
  
  
  