<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import axios from 'axios'
import { reactive } from 'vue'
// import { onMounted } from 'vue'

// const url = 
// var data = null

// onMounted(() => {    
//     axios.get(url).then((response)=>{
//       data = response.data
//       console.log(response.data)
//     }).catch((error)=>{
//       console.log(error)
//     })
// })

export default {
  components: {
    Navbar,
    Hero,
    Card
  },

  data() {
    return {
      form: reactive({
        FirstName: null
      }),
      clicked: false,
      jsonData: {},
      farmJsonData: {},
      farmersURL: 'http://localhost:5000/api/farmers',
      farmerURL: 'http://localhost:5000/api/farmer',
      farmURL: 'http://localhost:5000/api/farmer-facility-details',
      farmID: null,
    }
  },

  methods: {
    async searchFarm() {
      if (this.farmID != null) {
        const request = {
          params: {
            FarmID: this.farmID
          }
        }

        await axios.get(this.farmURL, request).then((response) => {
          console.log('Farm details:')
          console.log(response.data.data[0])
          this.farmJsonData = response.data.data[0]
        })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    async search() {
      this.clicked = true
      const request = {
        params: {
          FirstName: this.form.FirstName
        }
      }
      await axios.get(this.farmerURL, request).then((response) => {
        console.log('Farmer details')
        console.log(response.data[0])
        this.farmID = response.data[0]['FarmID']
        this.searchFarm()
      })
        .catch((error) => {
          console.log(error)
        })
    },
  },

  mounted() {
    axios.get(this.farmersURL).then((response) => {
      this.jsonData = response.data[0]
      // console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<template>
  <div class="mb-10">
    <Navbar></Navbar>
  </div>
  <Hero title="Home" subtitle="This will be the dashboard landing page"></Hero>
  <!-- <p>{{ jsonData }}</p> -->
  <section class="bg-white w-auto mx-40 my-30">
    <div class="mb-5 flex justify-center">
      <input class="py-2 px-6 border rounded" type="text" v-model="form.FirstName" id="name" name="name"
        placeholder="Search by farmer" required>
    </div>
    <div class="flex justify-center space-x-4">
      <button @click="search"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">Search</button>
      <button @click="clear"
        class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
        type="submit">Clear</button>
    </div>
  </section>
  <div class="flex h-screen gap-4">
    <div v-if="clicked == true" class="w-1/4 h-full">
    <Card bg="bg-slate-200">
      <h1><strong>Farmer details</strong></h1><br>
      <h1>First Name: </h1>
      <div class="bg-white border rounded w-full py-2 px-3 mb-2">        
        <h1>{{ jsonData['FirstName'] }}</h1>
      </div><br>
      <h1>Surname: </h1>
      <div class="bg-white border rounded w-full py-2 px-3 mb-2">        
        <h1>{{ jsonData['Surname'] }}</h1>
      </div><br>
      <h1>Address: </h1>
      <div class="bg-white border rounded w-full py-2 px-3 mb-2">        
        <h1>{{ jsonData['PhysicalAddress'] }}</h1>
      </div><br>
      <h1>Email: </h1>
      <div class="bg-white border rounded w-full py-2 px-3 mb-2">        
        <h1>{{ jsonData['EmailAddress'] }}</h1>
      </div>
    </Card>
  </div>
  <div class="flex flex-col w-3/4 h-full space-y-4">
    <div v-if="clicked == true" class="h-1/3">
      <Card>
      <h1><strong>Farm details</strong></h1>
      <div class="grid grid-cols-3 gap-3">
        <h1>Name: {{ farmJsonData['FarmName'] }}</h1>
        <h1>Size (ha): {{ farmJsonData['LandSize'] }}</h1>
        <h1>Coordinates: {{ farmJsonData['CoordinatesLat'] }}</h1>
      </div><br>
      <div class="grid grid-cols-3 gap-3">
        <h1>District: {{ farmJsonData['District'] }}</h1>
        <h1>Arable Land Size (ha): {{ farmJsonData['ArableLandSize'] }}</h1>
        <h1>Land Ownership: {{ farmJsonData['LandOwnership'] }}</h1>
      </div>
    </Card>
    </div>
  </div>
  </div>
</template>
