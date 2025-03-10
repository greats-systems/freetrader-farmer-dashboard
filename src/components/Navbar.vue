<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="bg-orange-300 border-b">
    <div class="menu-item">
      <RouterLink to="/">Home</RouterLink>
    </div>
    <!-- <div class="menu-item">
      <RouterLink to="farmer-profile">Farmer Profile</RouterLink>
    </div> -->
    <div class="menu-item">
      <RouterLink to="farm">Farm Overview</RouterLink>
    </div>
    <div class="menu-item">
      <RouterLink to="crop-management">Crop Management</RouterLink>
    </div>
  </nav>
</template>

<style>
nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

nav .menu-item {
  color: orange;
  padding: 10px 30px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: white;
  border-bottom-color: #0d1dcf;
}

nav .menu-item {
  color: inherit;
  text-decoration: none;
}
</style>