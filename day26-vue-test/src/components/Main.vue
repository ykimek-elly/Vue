<template>
    <main>
        <div class="main-container">
            <nav class="top-nav">
            <a href="">Home</a>
            <a href="">Browse</a>
            <a href="">Categories</a>
            <a href="">My Account</a>
            </nav>
            <div class="your-cart-list">
                <div class="your-cart-list-left">
                    <h1>YOUR CART</h1>
                    <h3>(2items)</h3>
                        <div class="your-cart-list-box">
                            <div class="your-cart-list-box-img">
                                <img src="https://m.media-amazon.com/images/M/MV5BN2M2YmY3YTItYTYzZS00OGVmLWFlNzAtYWMxMDY4NmQ2NzUwXkEyXkFqcGc@._V1_.jpg" alt="" />
                            </div>
                            <div class="your-cart-list-box-text">
                                <h3>The Silent Echo</h3>
                                <p>by Natt Haig</p>
                                <select id="quantity-select" name="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                </select>
                                <p>$19.99</p>
                            </div>
                        </div>
                        <div class="your-cart-list-box">
                            <div class="your-cart-list-box-img">
                                <img src="https://m.media-amazon.com/images/M/MV5BN2M2YmY3YTItYTYzZS00OGVmLWFlNzAtYWMxMDY4NmQ2NzUwXkEyXkFqcGc@._V1_.jpg" alt="" />
                            </div>
                            <div class="your-cart-list-box-text">
                                <h3>The Silent Echo</h3>
                                <p>by Natt Haig</p>
                                <select id="quantity-select" name="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                </select>
                                <p>$19.99</p>
                            </div>
                        </div>
                </div>
                <div class="your-cart-list-right">

                </div>
            </div>
            <div class="order-summary"> 
                
            </div>
        </div>
        

    </main>
</template>

<style scoped>
main{
    background: #efefef;
}
 .main-container{
    width: 860px;
    height: 860px;
    margin: 0 auto;
    background: #fff;
    border-radius: 1rem;
    padding: 2rem;
 }

 .top-nav{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

 }
  .top-nav a{
    text-decoration: none;
    color: #666;
    font-size: 14px;
    font-weight: 500;
  }


  .top-nav a:hover{
    text-decoration: underline;
    color: black;
    font-weight: 500;

    text-underline-offset: 10px;
  }
  .your-cart-list-left{
    width: 50%;

  }
  .your-cart-list-right{
    width: 50%;

  }
  .your-cart-list-box{
    padding: 20px;
    display: flex;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 1rem;
    margin-bottom: 20px;

  }
  .your-cart-list-box-img{
    width: 50%;
    padding: 20px;
  }

  .your-cart-list-box-img img{
    width: 100%;
  }
</style>