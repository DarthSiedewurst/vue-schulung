<template>
  <b-container>
    <h1 class="hv_head">Helden</h1>
    <p></p>
    <div v-for="hero in heroes" :key="hero.id">
      <b-row>
        <b-col class="col-4">
          <p>{{ hero.name }}</p>
        </b-col>
        <b-col class="col-8">
          <p><b-button type="button" @click="deleteHero(hero.id)">löschen</b-button></p>
        </b-col>
      </b-row>
    </div>
      <b-row>
        <b-col class="col-4">
          <input v-model="newHero"/>
        </b-col>
        <b-col class="col-8">
          <b-button type="button" @click="addHero"> Held hinzufügen</b-button>
        </b-col>
      </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
components: { }
})
export default class Heroes extends Vue {

  private heroes: object[] = [
    {name: 'Jabba The Hut' , id: 0},
    {name: 'Aquaman' , id: 1},
    {name: 'Iron Man' , id: 2},
  ]

  private newHero: string = '';

  private addHero() {
    const id = this.heroes.length;
    const hero = {name: this.newHero, id}
    this.heroes.push(hero);
    this.newHero = '';
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
