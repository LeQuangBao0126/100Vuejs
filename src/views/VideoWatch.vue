<template>
  <div class="about">
    {{video.id}}
    <h1 style="background-color:green;color:black">Video :{{video.name}}</h1>
    <img :src="video.thumbnail" style="height:200;width:500px" />
    <p v-html="video.description"></p>
    <video width="400" controls>
        <source :src="video.videoUrl" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default{
    computed :{
      video(){
        return this.$store.state.videos.find(vid => vid.id == this.$route.params.id); 
      }
        
    }
}
</script>

<style lang="scss" scoped>
   
</style>
