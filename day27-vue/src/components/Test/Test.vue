<script setup>
</script>

<template>
    <div class="wrap">
        <div class="container">
            <header>
                <nav>
                    <ul class="nav">
                    <li><h3>Vue Travel</h3></li>
                    <li>Destinations</li>
                    <li>Trips</li>
                    <li>Trips</li>
                    <li>Reviews</li>
                    <li><button>Login</button></li>
                    </ul>
                    
                </nav>
            </header>

            <main>
                <banner>
                    <div class="main-banner">
                        <div class="main-banner-input-search">
                            <input type="text" placeholder="where you you want to go?"/>
                            <img src="/src/assets/magnifying-glass-solid-full.svg" alt="돋보기"/>
                        </div>
                        <div>
                            <input type="text" placeholder="시작일">
                            <input type="text" placeholder="도착일">
                        </div>
                    </div>
                </banner>
                
                <div class="center-content">
                    <h1> Popular Destinations</h1>
                    <div class="thumb-box">
                        <img src="" alt="">
                    </div>
                    
                </div>



            </main>

            <footer></footer>
        </div>
    </div>

</template>

<style scoped>
.wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  text-align: center;

  display: flex;
  justify-content: center;
}
.container{
    width: 960px;
    background: #ddd;
}
ul{
    list-style: none;
}
.nav{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.nav h3{
    
}


.main-banner{
    width: 100%;
    height: 300px;
    background-image: url('/travel1.jpg');
}


.main-banner-input-search{

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: #fff;

}
.main-banner-input-search input{
    outline: none;
}
.main-banner-input-search img{
    width: 2rem;
}
</style>