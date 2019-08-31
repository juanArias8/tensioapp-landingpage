<template>
  <div>
    <!--Home section-->
    <div id="home" class="home">
      <div class="contact-extra">
        <ul class="left">
          <li>¿Tienes alguna pregunta?</li>
          <li><i class="material-icons">phone_enabled</i>
            <p>+57 320 7669526</p></li>
          <li><i class="material-icons">email</i>
            <p>info@tensioapp.com.co</p></li>
        </ul>

        <ul class="right">
          <li><img src="./../assets/icons/icons-facebook.svg" alt="facebook icon"></li>
          <li><img src="./../assets/icons/icons-instagram.svg" alt="instagram icon"></li>
          <li><img src="./../assets/icons/icons-twitter.svg" alt="twitter icon"></li>
        </ul>
      </div>

      <div class="navbar-container">
        <Navbar></Navbar>
      </div>

      <div class="main-content">
        <div class="text">
          <h3><b>+1000</b> usuarios protegidos</h3>
          <p class="home-text">
            Trabajando contigo por tu bienestar
          </p>
          <a href="#services" class="btn btn-primary">Solicita el tuyo ahora</a>
        </div>

        <div class="image">
          <img src="../assets/images/bracelet.jpg" alt="bracelet image">
        </div>
      </div>
    </div>
    <!--Home section-->


    <!--About section-->
    <div id="about" class="container">
      <div class="row about-mission">
        <div class="col s12 l3 image-container">
          <img src="../assets/icons/startup.svg" alt="mission image">
        </div>
        <div class="col s12 l9 text-container">
          <h2>visión</h2>
          <hr>
          <p>
            En el año 2022, seremos reconocidos por tener el mejor dispositivo personal, para la toma de presión
            arterial
            del mercado colombiano, continuaremos ofreciendo acompañamiento, seguridad y confianza cuando nuestros
            usuarios adquieran nuestro producto.
          </p>
        </div>
      </div>

      <div class="row about-vision">
        <div class="col s12 l9 text-container">
          <h2>Misión</h2>
          <hr>
          <p>
            Ayudar a nuestros usuarios con el autocontrol de la presión arterial, reduciendo riesgos como los
            accidentes
            cerebrovasculares o enfermedades del sistema circulatorio, brindando así seguridad en las actividades
            realizadas en el día a día.
          </p>
        </div>
        <div class="col s12 l3 image-container">
          <img src="../assets/icons/eye.svg" alt="vision image">
        </div>
      </div>

      <div class="card-items-header">
        <i class="material-icons">arrow_right</i>
        <p><b>¿</b> Por qué nos seleccionan nuestros clientes <b>?</b></p>
        <i class="material-icons">arrow_left</i>
      </div>

      <div class="row">
        <div class="col s12 l4 card-item">
          <img src="../assets/icons/product1.svg" alt="product image" class="card-image">
          <div class="description">
            <h4>Producto</h4>
            <p>
              Ofrecer un producto con la más alta calidad y fiabilidad para todos nuestros clientes
            </p>
          </div>
        </div>

        <div class="col s12 l4 card-item">
          <img src="../assets/icons/clipboard.svg" alt="clipboard image" class="card-image">
          <div class="description">
            <h4>Asesoría</h4>
            <p>
              Ofrecer acompañamiento contínuo a nuestros clientes, atender las solicitudes y dudas
            </p>
          </div>
        </div>

        <div class="col s12 l4 card-item">
          <img src="../assets/icons/heart.svg" alt="heart image" class="card-image">
          <div class="description">
            <h4>Motivación</h4>
            <p>
              Motivar a nuestros usuarios a mantener un buen control de salud y seguir buenas prácticas
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--About section-->

    <div class="image-separator"></div>

    <!--Services section-->
    <div id="services" class="services-container">
      <div class="services">
        <div class="service-row">
          <div class="number-container">
            <p>1</p>
          </div>
          <h4>Compra</h4>
          <p class="text-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus ea eligendi harum inventore iste
          </p>
        </div>

        <div class="service-row">
          <div class="number-container">
            <p>2</p>
          </div>
          <h4>Personaliza</h4>
          <p class="text-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus ea eligendi harum inventoreiste
          </p>
        </div>

        <div class="service-row">
          <div class="number-container">
            <p>3</p>
          </div>
          <h4>Configura</h4>
          <p class="text-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus ea eligendi harum inventore iste
          </p>
        </div>
      </div>

      <div class="terms center-align">
        <h2>¿Interesado en adquirir TensioApp?</h2>
        <p class="flow-text">
          Mira el videotutorial y aprende cómo funciona
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0diO_ncnpNs" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <a href="#services" class="btn btn-primary">Solicita el tuyo ahora</a>
      </div>
    </div>
    <!--Services section-->


    <!--Contact section-->
    <div id="contact" class="contact-container">
      <div class="title right-align">
        <h2>¿Tienes dudas?</h2>
      </div>

      <div class="contact-main">
        <div class="contact-form">
          <form @submit="sendCar" class="form-container center-align" id="carForm">
            <p class="flow-text">Formulario de contacto</p>

            <div class="input-field col s12">
              <input v-model="name" id="name" name="name" type="text" class="validate"
                     required minlength="2" maxlength="20">
              <label for="name">Nombre</label>
              <span class="helper-text" data-error="valor no válido" data-success="correcto"></span>
            </div>

            <div class="input-field col s12">
              <input v-model="email" id="email" name="email" type="text" class="validate"
                     required minlength="1" maxlength="50">
              <label for="email">Correo</label>
              <span class="helper-text" data-error="valor no válido" data-success="correcto"></span>
            </div>

            <div class="input-field col s12">
              <input v-model="message" id="message" name="message" type="text" class="validate"
                     required minlength="10" maxlength="500">
              <label for="message">Mensaje</label>
              <span class="helper-text" data-error="valor no válido" data-success="correcto"></span>
            </div>

            <div v-if="responseStatus" class="form-response">
              <p :class="[responseStatus ? 'success-message' : 'fail-message']">{{responseMessage}}</p>
            </div>

            <div class="center-align">
              <button class="btn primary-button" type="submit">Enviar</button>
            </div>
          </form>
        </div>

        <div class="contact-extra">
          <div class="contact-schedule">
            <p class="flow-text">Horarios</p>
            <b>Lunes-Viernes</b>
            <small>8:00am - 5:00pm</small>
            <b>Lunes-Viernes</b>
            <small>8:00am - 5:00pm</small>
          </div>

          <div class="contact-info">
            <p class="flow-text">Datos </p>
            <hr>
            <span><i class="material-icons">room</i> Rionegro Ant CO</span>
            <span><i class="material-icons">phone</i> +57 9876223455</span>
            <span><i class="material-icons">email</i> info@tensioapp.com.co</span>
          </div>
        </div>
      </div>
    </div>
    <!--Contact section-->

    <!--Footer section-->
    <div class="footer-container">
      <div class="footer-main">
        <div>
          <p class="title"><b>Tensio</b>|App</p>
          <p class="title-text">Trabajando contigo por tu bienestar</p>
        </div>
        <div class="social-network">
          <p class="follow-text">Síguenos en redes</p>
          <ul class="right">
            <li><img src="./../assets/icons/icons-facebook.svg" alt="facebook icon"></li>
            <li><img src="./../assets/icons/icons-instagram.svg" alt="instagram icon"></li>
            <li><img src="./../assets/icons/icons-twitter.svg" alt="twitter icon"></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© copyright 2019 Juan David Arias. All rigths reserved.</p>
      </div>
    </div>
    <!--Footer section-->
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  const responseSuccessMessage = 'Operación exitosa'
  const responseFailMessage = 'Operación fallida'

  export default {
    name: 'Landing',
    components: { Navbar },
    data () {
      return {
        responseStatus: null,
        responseMessage: '',
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      sendCar: function (e) {
        e.preventDefault()

        if (this.checkForm()) {
          const data = this.buildData()
          this.responseStatus = true
          this.responseMessage = responseSuccessMessage
        }
      },
      checkForm: function () {
        this.errors = []

        if (!this.name) {
          this.errors.push('Nombre es requerido')
        }
        if (!this.email) {
          this.errors.push('Email es requerido')
        }
        if (!this.message) {
          this.errors.push('Mensaje es requerido')
        }

        if (!this.errors.length) {
          return true
        }
      },
      buildData () {
        return {
          'name': this.name,
          'email': this.email,
          'message': this.message
        }
      },
      resetForm () {
        if (this.responseStatus) {
          this.name = ''
          this.email = ''
          this.message = ''
        }
        setTimeout(() => {
          this.responseStatus = null
          this.responseMessage = ''
        }, 3000)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./../assets/styles/main";

  /*Home styles*/
  .home {
    height: 100vh !important;
    background-image: linear-gradient(to bottom, rgba(28, 88, 89, 0.70), rgba(98, 141, 134, 0.2)), url('../assets/images/home.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;

    .contact-extra {
      width: 100% !important;
      height: 70px !important;

      ul {
        display: flex;
        flex-direction: row;
        height: 40px !important;

        * {
          color: wheat;
        }

        &.left {
          margin-left: 150px !important;

          li {
            display: flex;
            height: 40px !important;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            i {
              margin: 0 10px 0 20px !important;
            }
          }
        }

        &.right {
          margin-right: 150px !important;

          li {
            display: flex;
            height: 50px !important;
            width: 50px !important;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: -5px;
            margin-left: 20px;
            color: wheat;
            cursor: pointer;

            img {
              height: 35px;
              width: 35px;
              color: wheat;
              background-color: wheat;
              border-radius: 10px;
              padding: 3px;
            }
          }
        }
      }
    }

    .navbar-container {
      width: 80%;
      margin-left: 10%;
      height: 80px;
    }

    .main-content {
      width: 80%;
      height: calc(100vh - 160px);
      margin-left: 10%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .text {
        flex: 50%;

        h3 {
          b {
            color: $primary-color;
          }
        }

        .home-text {
          font-size: 22px;
          padding-right: 30px;
        }

        .btn-primary {
          @extend %btn-primary;
        }
      }

      .image {
        flex: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          background-image: radial-gradient(circle, #8abcc7 65%, #1c5859);
          border: 10px double $primary-color;
          padding: 20px;
          height: 400px;
          width: 400px;
          border-radius: 50%;
        }
      }
    }
  }

  /*Home styles*/


  /*About styles*/
  .about-vision {
    text-align: right;

    .text-container {
      padding: 0 50px 0 0;
    }
  }

  .about-mission {
    text-align: left;

    .text-container {
      padding: 0 0 0 50px;
    }
  }

  .about-mission, .about-vision {
    h2 {
      color: $primary-color;
    }

    p {
      font-size: 1.4rem;
      color: $primary-light-color;
    }

    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;

      img {
        height: 200px;
        width: 200px;
      }
    }
  }

  .card-items-header {
    border: solid $primary-light-color;
    border-width: 1px 0 1px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .material-icons {
      font-size: 70px;
      color: $primary-light-color;
    }

    p {
      font-size: 28px;

      b {
        font-size: 34px;
      }
    }
  }

  .card-item {
    text-align: center;

    .description {
      padding-left: 20px !important;
    }

    .card-image {
      height: 100px;
      width: 100px;
      margin-top: 40px;
    }

    h4 {
      color: $primary-color;
    }
  }

  /*About styles*/

  .image-separator {
    width: 100vw;
    height: 200px;
    background-image: url("../assets/images/heart_rate.png");
    background-position: center;
  }

  /*Services styles*/
  .services-container {
    background-color: lighten($primary-color, 70%);
    width: 100vw;
    padding: 20px 5vw 20px 5vw;
    display: flex;
    flex-direction: row;

    .services {
      flex: 40%;

      .service-row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 30px;
        padding-right: 70px;

        .number-container {
          height: 100px;
          width: 100px;
          border: 5px double $primary-light-color;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            font-size: 60px;
          }
        }

        h4 {
          margin-top: 10px;
          color: $primary-color;
        }

        .text-description {
          margin-top: -10px;
          color: $primary-light-color;
        }
      }
    }

    .terms {
      flex: 60%;

      iframe {
        width: 100% !important;
        height: 400px;
      }

      .btn-primary {
        @extend %btn-primary;
        margin-top: 30px;
      }
    }
  }

  /*Services styles*/


  /*Contact styles*/
  .contact-container {
    width: 90vw;
    padding: 20px 5vw 20px 5vw;

    .contact-main {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .contact-form {
        flex: 50%;
        padding: 10px 30px 30px 30px;

        .form-container {
          border: 1px solid $primary-color;
          padding: 10px 30px 30px 30px;

          .form-response {
            padding: 5px;
            border: 1px solid $primary-color;
            border-radius: 30px;

            .success-message {
              color: $green-color;
            }

            .fail-message {
              color: $red-color;
            }
          }

          button {
            @extend %btn-primary;
            width: 200px;
            margin-top: 15px;
          }
        }
      }

      .contact-extra {
        flex: 50%;
        display: flex;

        .contact-schedule {
          background-color: lighten($primary-color, 70%);
          border: 1px solid $primary-color;
          height: 300px;
          width: 300px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .contact-info {
          border: 1px solid $primary-color;
          height: 300px;
          width: 400px;
          margin-left: -100px;
          z-index: -100 !important;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 150px;

          span {
            display: flex;
            flex-direction: row;
            align-items: center;

            i {
              margin-right: 20px;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }

  /*Contact styles*/

  /*Footer styles*/
  .footer-container {
    height: 200px;
    background-image: linear-gradient(to bottom, rgba(98, 141, 134, 0), rgba(28, 88, 89, 0.7));

    .footer-main {
      padding: 50px 50px 50px;
      height: 150px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 40px;

        b {
          color: $primary-light-color;
        }
      }

      .title-text {
        margin-top: -50px;
      }

      .social-network {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        ul {
          margin-left: 30px;
        }
      }

      ul {
        display: flex;
        flex-direction: row;
        height: 60px !important;
        margin-top: 10px;

        &.right {
          margin-right: 150px !important;

          li {
            display: flex;
            height: 60px !important;
            width: 60px !important;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-right: 30px;
            cursor: pointer;

            img {
              height: 60px;
              width: 60px;
              color: white;
              background-color: white;
              border-radius: 10px;
              padding: 5px;
              border: 2px solid $primary-color;

              &:hover {
                background-color: $primary-color;
              }
            }
          }
        }
      }
    }

    .footer-bottom {
      height: 50px;
      background-color: $primary-color;
      padding: 2px 30px 2px 0;
      text-align: right;

      p {
        color: white;
        font-size: 14px;
      }
    }
  }

  /*Footer styles*/
</style>
