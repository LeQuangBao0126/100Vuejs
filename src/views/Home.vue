<template>
  <div class="home">
    <h1>Home Page Videos</h1>
    <div class="video-container">
    
     <div v-for="video in videos" :key="video.id">
      <router-link :to="{ name: 'video-watch', params: {id:video.id }}">
      <div class="video-box">
         <img style="max-height:100px" :src="video.thumbnail" />
          <div class="description">
              <h3>{{video.name}}</h3>
              <p v-html="video.description"></p>
          </div> 
      </div>
       </router-link>
     </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// @ts-ignore'
import api from '../services/api';
import axios from 'axios';
// @ts-ignore
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    // this.loadVideos();
    this.$store.dispatch("loadVideos");
  },
  computed:{
      videos (){
          return this.$store.state.videos
      }
  }
}
</script>

<style lang="scss" scoped>
    .video-container{
        padding : 55px 100px;
        background-color: #f6f0f0;; 
        .description{
          text-align: left;
          margin-left: 90px;
          padding-left: 30px;
          margin-top: 27px;
          margin-bottom: 27px;
          border-left: 1px solid #f1e5e5
        }
        .video-box{
          margin-top:10px;
          margin-bottom:10px;
          box-shadow: 0px 10px 23px 1px #c4bdbd;
          background-color: #eaeaea;
          border-radius:10px;
          display:flex;
          justify-content: flex-start;
          align-items: center;
        }
    }
</style>

