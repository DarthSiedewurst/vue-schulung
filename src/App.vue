<template>
  <b-container id="app" :class="{nameClass: condition}">
    <div id="nav">
      <router-link to="/">Home </router-link> |
      <router-link to="/marco">Marco </router-link>|
      <router-link to="/Felix">Felix </router-link>|
      <router-link to="/G">G </router-link>|
      <router-link to="/Philipp">Philipp </router-link>|
      <button @click="toggle">Nightmode</button>
      <!--<button onclick="document.body.style.backgroundColor = 'black';">Green</button>-->
    </div>
    <p></p>
    <p></p>
    <router-view />
  </b-container>
</template>


<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
components: { }
})
export default class hauptseite extends Vue {

private condition:boolean = false;

private toggle(){
  this.condition = !this.condition;
}
/*  private toggleNightMode() {
    if(document.body.style.backgroundColor == '#FFF'){
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#FFF';
    } else {
      document.body.style.backgroundColor = '#FFF'
      document.body.style.color = '#000';
    }
  }*/
}

</script>
<style>
    body{
      background: #000 !important;
      color: #FFF !important;
      }
    .nameClass{
      background: #FFF !important;
      color: #000 !important;
    }
</style>
