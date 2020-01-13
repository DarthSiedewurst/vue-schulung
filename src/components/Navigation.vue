<template>
  <div class="hello">
    <router-link :to="urlBack"> <b-button>{{back}}</b-button> </router-link>
    <router-link :to="urlForward" class="float-right">
      <b-button>{{forward}}</b-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  @Prop() private back!: string;
  @Prop() private forward!: string;
  @Prop() private urlForward!: string;
  @Prop() private urlBack!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
