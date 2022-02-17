<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="$route.name == 'Home'">
            <a class="navbar-brand" style="font-size:30px">
              DINOSAUR
              <img src="../../img/handicrafts.png" alt="" style="width:50px;height:50px">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown" style="font-size:20px">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link"><router-link to="/" style="color: black">Home</router-link><span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/UnitWarehouse" style="color:#776d8a">Donation</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/Staff" style="color:#776d8a">Staff</router-link></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>