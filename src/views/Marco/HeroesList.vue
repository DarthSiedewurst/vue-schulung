<template>
  <b-container class="heldenhafterContainer"> 
    <div  v-for="hero in heroes" :key="hero.id" >
        <h3 class="heldenhaft">{{ hero.name }}</h3>
        <b-button class="heldenhafterButton" type="button" @click="deleteHero(hero.id)">löschen</b-button>
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
export default class HeroesList extends Vue {
    @Prop() private heroes!: object[];
  

  private newHero: string = '';

  
  private addHero() {
    const id = this.heroes.length;
    const hero = {name: this.newHero, id}
    this.$emit('addHeroEvent', hero);

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
  	.heldenhaft {
      color: crimson;
      background-color: aqua;
      text-align: center;
      border: 1px solid;
      padding: 10px;
      box-shadow: 5px 10px;
      margin-right: 200px; 
      margin-left: 200px; 
    }
    .heldenhafterButton {
      margin-bottom: 50px;
    }
    .heldenhafterContainer{
      text-align: center;
    }
</style>
