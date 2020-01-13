<template>
  <b-container>
    <h1>Helden</h1>
    <div v-for="hero in heroes" :key="hero.id">
      <p>{{ hero.name }}</p>
      <b-button type="button" @click="deleteHero(hero.id)">delete</b-button>
    </div>
    <input v-model="newHero" />
    <b-button type="button" @click="addHero">add Hero</b-button>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Heroes extends Vue {
  // @Prop() private helden!: string[];

  private heroes: object[] = [
    { name: "Peter Pan", id: 0 },
    { name: "Superman", id: 1 }
  ];

  private newHero: string = "";

  private addHero() {
    const id = this.heroes.length;
    const hero = { name: this.newHero, id };

    this.heroes.push(hero);
    this.newHero = "";
  }
  private deleteHero(id: number) {
    let newHeroList: any = this.heroes;
    this.heroes = [];
    newHeroList.splice(id, 1);

    for (let i = 0; i < newHeroList.length; i++) {
      this.heroes.push({ name: newHeroList[i].name, id: i });
    }
  }
}
</script>
