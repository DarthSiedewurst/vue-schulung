<template>
  <b-container> 
    <h1>Helden</h1>
    <div v-for="hero in heroes" :key="hero.id">
        <p>{{ hero.name }}</p>
        <b-button type="button" @click="deleteHero(hero.id)">löschen</b-button>
    </div>
    <input v-model="newHero"/>
    <b-button type="button" @click="addHero"> Held hinzufügen</b-button>
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
