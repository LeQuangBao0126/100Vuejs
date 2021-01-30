<template>
  <div class="home">
    <h1>Home Page Videos</h1>
   
  </div>
</template>

<script>
// @ is an alias to /src
// @ts-ignore
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: ()=>{
    return {
        videos : [

        ]
    }
  }
}
</script>
