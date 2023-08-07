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
    <div class="grid grid-cols-2 gap-4 justify-center ml-60">
        <div v-for="(job, index) in jobs" :key="job.id"
            class="max-w-sm p-6 bg-brown-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div class="flex justify-between items-center mb-2">
                <a href="#">
                    <h5 class="text-2xl font-bold tracking-tight text-green-600 dark:text-white">
                        {{ job.title }}
                    </h5>
                </a>
                <a href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    See Job
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 10">
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>
  
  
  
  