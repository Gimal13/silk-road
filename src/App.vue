<template>
<div>
  <Header />
    <router-view />
  <Footer/>
  
</div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
      Header,
      Footer
  }
}
</script>

<style>

/* @font-face {
    font-family: "Krona One Regular"; 
    src: url("./assets/fonts/KronaOne-Regular.ttf") format("truetype"); 
    font-weight: bold; 
} */


@font-face {
  font-family: "KronaOne-Regular"; /* тут переименовать */
  src: url("./assets/fonts/KronaOne-Regular.ttf") format("truetype"); 
  font-style: normal; 
  font-weight: normal; 
} 

@font-face {
  font-family: "Oswald-Regular"; 
  src: url("./assets/fonts/Oswald-Regular.ttf") format("truetype"); 
  font-style: normal; 
  font-weight: normal; 
} 

@font-face {
  font-family: "PT Mono-Regular"; 
  src: url("./assets/fonts/PT Mono-Regular.ttf") format("truetype"); 
  font-style: normal; 
  font-weight: normal; 
} 


*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  font-size: inherit  ;
  padding: 0  ;
}
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
    
    
}

img {
  display: block;
}
article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

input {
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

button {
  border: none ; 
  outline: none;
  padding: 0;
  margin: 0;
}

button:active, button:focus {
  outline: none !important;
}

select { 
  border: none;
  background-color: inherit ;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
}

/* my styles */

body {
  
  background-color: #BBA773;
  
}



</style>
