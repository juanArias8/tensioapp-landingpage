<template>
  <nav>
    <p class="flow-text"><b>Tensio</b>|App</p>
    <ul>
      <li><a href="#home">Inicio</a></li>
      <li><a href="#about">Acerca</a></li>
      <li><a href="#services">Servicios</a></li>
      <li><a href="#contact">Contacto</a></li>
      <li><a href="buy">Comprar ahora</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped lang="scss">
  @import "./../assets/styles/main.scss";

  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white !important;
    color: $secondary-text-color;
    height: 80px !important;
    box-shadow: none !important;
    border: 1px solid $primary-color;
    padding: 0 30px 0 30px;

    p {
      font-size: 40px;

      b {
        color: $primary-light-color;
      }
    }

    ul {
      margin-left: 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      li {
        width: auto;
        margin: 0 20px 0 20px;

        a {
          color: $secondary-text-color;
          font-size: 18px;

          &:hover {
            cursor: pointer;
            color: $primary-color;
          }
        }
      }
    }
  }
</style>
