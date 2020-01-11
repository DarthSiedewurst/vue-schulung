<template>
  <div class="hello">
    <router-link :to="back"> <b-button>Zurück</b-button> </router-link>
    <router-link :to="forward" class="float-right">
      <b-button>Weiter</b-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  @Prop() private back!: string;
  @Prop() private forward!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
