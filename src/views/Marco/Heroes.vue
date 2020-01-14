<template>
  <b-container class="heldenhafterContainer"> 
    <h1>Helden</h1>
    <heroesList :heroes="heroes" @addHeroEvent="addHero"></heroesList>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeroesList from "@/views/Marco/HeroesList.vue";


@Component({
components: { HeroesList}
})
export default class Heroes extends Vue {

  private get heroes() {
   return this.$store.state.heroes;
  }   

  private set heroes(e: any) {
    this.$store.commit('setHeroes', e)
  }

  private newHero: string = '';

  private addHero(hero: any) {
    this.heroes.push(hero)

  }

  private deleteHero(id: number) {
    let newHeroList: any[] = this.heroes;
    this.heroes = [];
    newHeroList.splice(id,1);

    for (let i = 0; i < newHeroList.length; i++) {
      this.heroes.push({ name: newHeroList[i].name, id: i})
    }
  }
}
</script>

<style scoped>
</style>
