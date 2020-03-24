<template>
    <nav id="nav" class="navbar navbar-expand-sm bg-dark">
       <img id="nav_logo" class="nav_logo" alt="Vue logo" src="@/assets/logo.png">
      <router-link class="nav-link" to="/">Home</router-link> |
      <router-link class="nav-link" to="/add-river">Add river</router-link>
    </nav>
</template>
<script>
export default {
 name : 'Header'
}
 </script>

