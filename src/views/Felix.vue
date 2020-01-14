<template>
<b-container>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="icon-bar">
  <a class="active" href="#"><i class="fa fa-home"></i></a>
  <a href="/"><i class="fa fa-search"></i></a>
  <a href="#"><i class="fa fa-envelope"></i></a>
  <a href="#"><i class="fa fa-globe"></i></a>
  <a href="#"><i class="fa fa-trash"></i></a>
    </div>
  
    <div class="mt-2">
      Selected: <strong>{{ selected }}</strong>
    </div>
    <Navigation urlBack="/marco" urlForward="/G" back="Marco" forward="G"></Navigation>
    <HelloWorld msg="Felix coole Webseite!" /> 
    <h1>"Woohooooo"</h1>

<b-carousel
      id="1-FPS-Mooovieeeeee"
      v-model="slide"
      :interval="1000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Super schnelles Auto"
        text="Auto fährt los"
        img-src="../assets/SlomoCar/1.png"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/SlomoCar/2.png">
        <h1>Auto gibt Gas!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="@/assets/SlomoCar/3.png"><h1>Auto fährt noch schneller!</h1></b-carousel-slide>

      <b-carousel-slide img-src="@/assets/SlomoCar/4.png"><h1>Auto fährt schneller als die Polizei erlaubt!</h1></b-carousel-slide>

      <b-carousel-slide img-src="@/assets/SlomoCar/5.png"><h1>Auto fährt aus Bild!</h1></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      
    </b-carousel>



<div>
  <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">
          
<b-carousel
      id="carousel-2"
      v-model="slide"
      :interval="1000"
      controls
      indicators
      background=" #ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>


      </p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">

<b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>

        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>

</div>
</b-container>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import HelloWorld from "@/components/HelloWorld.vue";
@Component({
components: { HelloWorld ,Navigation}
})
export default class Felix extends Vue {
  private selected = null;
}

</script>
<style scoped>
.icon-bar {
  width: 100%; /* Full-width */
  background-color: #555; /* Dark-grey background */
  overflow: auto; /* Overflow due to float */
}

.icon-bar a {
  float: left; /* Float links side by side */
  text-align: center; /* Center-align text */
  width: 20%; /* Equal width (5 icons with 20% width each = 100%) */
  padding: 12px 0; /* Some top and bottom padding */
  transition: all 0.3s ease; /* Add transition for hover effects */
  color: white; /* White text color */
  font-size: 36px; /* Increased font size */
}

.icon-bar a:hover {
  background-color: lightblue; /* Add a hover color */
}

.active {
  background-color: blue; /* Add an active/current color */
}
</style>