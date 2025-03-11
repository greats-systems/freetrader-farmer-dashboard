<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import axios from 'axios'
import { reactive } from 'vue'


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
      dashboardURL: 'http://localhost:5000/api/farmer-dashboard'
    }
  },

  methods: {
    async search() {
      this.clicked = true
      const request = {
        params: {
          FirstName: this.form.FirstName
        }
      }
      axios.get(this.dashboardURL, request).then((response)=>{
        console.log(response)
        this.jsonData = response.data[0]
      })
    },

    clear() {
      this.clicked = false
      this.form.FirstName = null
      this.jsonData = {}
    }
  },

  
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
  <div v-if="clicked == true" class="flex h-3/4 gap-4">
    <div class="w-1/4 h-full">
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
    <div v-if="this.jsonData['FarmerFacilityDetails']!=null" class="h-1/3">
      <Card>
      <h1><strong>Farm details</strong></h1>
      <div class="grid grid-cols-3 gap-3">
        <h1>Name: {{ jsonData['FarmerFacilityDetails']['FarmName'] }}</h1>
        <h1>Land Size (ha): {{ jsonData['FarmerFacilityDetails']['LandSize'] }}</h1>
        <h1>Physical Address: {{ jsonData['FarmerFacilityDetails']['PhysicalAddress'] }}</h1>
      </div><br>
      <div class="grid grid-cols-3 gap-3">
        <h1>District: {{ jsonData['FarmerFacilityDetails']['District'] }}</h1>
        <h1>Arable Land Size (ha): {{ jsonData['FarmerFacilityDetails']['ArableLandSize'] }}</h1>
        <h1>Land Type: {{ jsonData['FarmerFacilityDetails']['LandType'] }}</h1>
      </div>
    </Card>
    <div class="mt-10 h-1/3">
      <Card>
        <h1><strong>Crop Details</strong></h1>
        <div class="grid grid-cols-3 gap-3">
          <h1>Crop Name: {{ jsonData['FarmerFacilityDetails']['Crop']['CropName'] }}</h1>
          <h1>Season: {{ jsonData['FarmerFacilityDetails']['Crop']['Season'] }}</h1>
          <h1>Certificate ID: {{ jsonData['FarmerFacilityDetails']['Crop']['CertificateID'] }}</h1>
        </div>
      </Card>
    </div>
    </div>
  </div>
  </div>
</template>
