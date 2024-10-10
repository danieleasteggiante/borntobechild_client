<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class Footer extends Vue {

}
</script>

<template>
  <footer class="footer bg-secondary bg-opacity-50 p-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h3 class="footer-title">About Us</h3>
          <p class="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="col-lg-4">
          <h3 class="footer-title">Contact Us</h3>
          <p class="footer-description">
            1234 Street Name, City Name, United States
          </p>
          <p class="footer-description">+1 123 456 7890</p>
          <p class="footer-description">
            <a href="mailto:test@test.it"> email me </a>
          </p>
        </div>
        <div class="col-lg-4">
          <h3 class="footer-title">Follow Us</h3>
          <p class="footer-description">
            <a href="#">Facebook</a>
          </p>
          <p class="footer-description">
            <a href="#">Twitter</a>
          </p>
          <p class="footer-description">
            <a href="#">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
