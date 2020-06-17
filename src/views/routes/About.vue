<template>
  <div class="about">
    <div class="content-wrapper">
      <Navbar />
      <div class="about-wrapper">
        <section class="who">
          <img src="@/views/images/real-ava.jpg" class="ava" />
          <h2>Who am I ?</h2>
          <p>
            My name is Nguyen Tien Duc, also called TiDu Nguyen. <br />
            I am a student at International University (IU) - Vietnam National
            University - Ho Chi Minh <br />
            I am K18, with student ID: ITITIU18029
          </p>
        </section>
        <hr />
        <section class="what">
          <h2>What is this ?</h2>
          <p>
            This is a small web application to help IU students to generate all
            possible schedules based on their chosen courses
          </p>
        </section>
        <hr />
        <section class="why">
          <h2>Why this page ?</h2>
          <p>
            After 2 semesters at IU, me and my friends have been so frustrated
            with the course registration process.
          </p>
          <p>
            Each semester, we can choose on average 5 - 6 courses. Each courses
            has on average 4 difference classes to choose. So, the total number
            of of schedules to consider is about 4<sup>5</sup> to 4<sup>6</sup>.
          </p>

          <p />
          <p>
            If we use the school system (EduSoftWeb at the moment), we would
            have to manually add one class of each course to our schedule, if
            the time block is already taken in the schedule, we skip that class.
          </p>
          <p>
            Even if we can remember well all the taken time blocks of a schedule
            and exclude all unsuitable classes faster, we still ended up
            repeating the process on EduSoftWeb for a few dozens of schedules.
          </p>
          <p>
            And all IU students know how slow EduSoftWeb is, it is a
            multiple-pages web application. Therefore, every time we add a new
            class to a schedule, it needs to reload the page, access the
            database, and who knows what else ...
          </p>
          <p>
            And what if we have found out 1 possible schedule. How can we find
            the next possible one. Oh, unlucky, EduSoftWeb only allows us to
            store 1 schedule at a time, so we need to write the old schedule
            somewhere, on paper, in a spreadsheet, ..., then, adjusting some
            classes to create a new schedule
          </p>
          <p>
            As a result of that frustration, most IU students ended up creating
            schedules on our own, either in a draft paper or in a spreadsheet to
            speed up the process
          </p>
          <p>
            My application aims to solve this frustration, by letting IU
            students enter all their chosen courses (with details about the
            sessions of each classes of each course). Then, with a single click
            to the generator page, they will see all the possible schedules
            based on their courses. Furthermore, students can also navigate
            around to see and compares each schedules, without the need to write
            out each schedule to a paper or a spreadsheet.
          </p>
          <p>
            Finally, the frustration can be solved. The time taken for an IU
            student to find out all possible schedules before registering
            courses is greatly reduced, from several days to less than an hour.
          </p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.about {
  hr {
    color: var(--signup-btn-bg);
  }
  .about-wrapper {
    section {
      h2 {
        background: var(--logo-text);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
        margin-bottom: 0;
      }
      p {
        line-height: 2rem;
        text-indent: 2rem;
      }
    }
    width: auto;
    margin: 2rem;
    @media (min-width: 600px) {
      margin: 2rem auto;
      width: 70%;
      min-width: 400px;
    }
    .who {
      .ava {
        height: 200px;
        width: 200px;
        border-radius: 100px;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>

<script lang="ts">
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import Footer from "@/views/components/auxiliaries/Footer.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class About extends Vue {}
</script>
