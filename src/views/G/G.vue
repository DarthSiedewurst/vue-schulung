<template>
  <div>
      <b-container>
      <b-row>
        <b-col class="col-2">
          <p><router-link to="/G/heroes">Heroes</router-link></p>
          <p><router-link to="/G/villains">Villains</router-link></p>
        </b-col>
        <b-col class="col-10">
          <router-view/>
        </b-col>
      </b-row>
      </b-container>
    <Navigation urlBack="/Felix" urlForward="/Philipp" back="Felix" forward="Philipp"></Navigation>
    <center>yey</center> 
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";

@Component({
components: { Navigation}
})
export default class G extends Vue {
}
</script>
