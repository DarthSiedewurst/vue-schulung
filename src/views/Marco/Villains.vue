<template>
  <b-container> 
    <h1>Villains</h1>
    <div v-for="hero in heroes" :key="hero.id">
        <p>{{ hero.name }}</p>
        <b-button type="button" @click="deleteHero(hero.id)">löschen</b-button>
    </div>
    <input v-model="newHero"/>
    <b-button type="button" @click="addHero"> Villain hinzufügen</b-button>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
components: { }
})
export default class Heroes extends Vue {

  private heroes: object[] = [
    {name: 'Prinzessin Lillifee' , id: 0},
    {name: 'Die drei ???' , id: 1},
    {name: 'Teletubbies (super böse)' , id: 2},
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