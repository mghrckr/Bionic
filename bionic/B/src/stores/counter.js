import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter', {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async fetchJobs() {
      try {
        console.log('masuk acxios');
        const { data } = await axios({
          method: 'GET',
          url: `http://localhost:3020/api/pt-job-posts`
        })
        this.jobs = data
      } catch (err) {
        console.log(err)
      }
    },
    async register(name,email,phone,msg) {
      try {
        const apiUrl = 'http://localhost:3020/api/pt-job-applies'
        const { data } = await axios.post(apiUrl, name,email,phone,msg);
        console.log(data); 
      } catch (err) {
        console.log(err);
      }
    }
    ,
  }
})
