<template>
  <div style="background-color: #ebf0db; padding-bottom:10px">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style="font-family: 'Mukta', sans-serif;"
    >
      <a class="navbar-brand" style="font-size:30px">
        DINOSAUR
        <img
          src="../img/handicrafts.png"
          alt=""
          style="width:50px;height:50px"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNavDropdown"
        style="font-size:20px"
      >
        <ul class="navbar-nav">
          <li class="nav-item" v-if="user">
            <a class="nav-link"
              ><router-link to="/Logout" style="color:#776d8a"
                >Logout</router-link
              ></a
            >
          </li>
        </ul>
      </div>
    </nav>

    <div>
      <h4 class="status badge badge-success">Admin: {{ user.displayName }}</h4>
    </div>

    <div style="font-family: 'Mitr', sans-serif; font-size:25px">
      <h1 style="text-align:center">การจัดการการจัดสรร</h1>
    </div>

    <div style="margin-left:485px;">
      <select v-model="selected" v-on:change="showInfo" class="selection-deco">
        <option disabled value="">กรุณาเลือกหน่วยงานรับบริจาค</option>
        <!-- break loop using .slice() -->
        <!-- <option value="AgencyA" v-for="(wh) in warehouses" :key="wh.id">
                    {{wh.name}}
                </option> -->
        <option value="AgencyA">ร้านปันกัน</option>
        <option value="AgencyB">มูลนิธิบ้านนกกระจิบ</option>
        <option value="AgencyC">บ้านกึ่งวิถีหญิง</option>
      </select>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    showInfo() {
      // console.log(this.user.displayName)
      this.$router.push({ path: "/" + this.selected });
    }
  },
  computed: {
    ...mapState("account", ["user"])
  }
};
</script>

<style>
h2 {
  text-align: center;
  margin: 15px auto 15px auto;
  color: whitesmoke;
}
.selection-deco {
  width: 450px;
  height: 35px;
  font-size: 20px;
  font-family: "Mitr", sans-serif;
}

.status {
  color: whitesmoke;
  text-align: left;
  margin: 20px 0px 5px 15px;
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  font-weight: bolder;
}
</style>
