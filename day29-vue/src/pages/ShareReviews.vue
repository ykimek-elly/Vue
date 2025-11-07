<script setup>
import Card from "../components/shareReviews/Card.vue";
import { travelCards } from "../data/data.js"

console.log(travelCards);
</script>

<template>
    <section class="reviews">
        <h2>Reviews</h2>
        <h1>Share Your Adventures!</h1>
        <h6>Read reviews from fellow explorers around the world.</h6>

        <div class="reviews-menu">
            <button> + </button>
            <ul>
                <li>All</li>
                <li>Top Rated</li>
                <li>Photos</li>
            </ul>
        </div>

        <div class="review-action-search">
            <div class="review-action-box">
                <button>+ Whrite a Review</button>
                <label>
                    <input type="checkbox"> Like
                </label>
            </div>
            <div class="review-search-box">
                <span>🔍</span>
                <input type="text" placeholder="Search">
            </div>
        </div>

        <div class="review-cards">
            <Card 
              v-for="(card, index) in travelCards" 
              :key="index" 
              :cardInfo="card" 
            />
        </div>
    </section>
</template>

<style scoped>
.reviews{
    background: white;
    padding: 2rem;
    border-radius: 1rem;
}

.reviews-menu {
    display: flex;
    padding: 1rem 0;
}

.reviews-menu ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
    padding-left: 0.5rem;
    align-items: center;
}

.reviews-menu button {
    border: none;
    background: #000;
    color: white;
    border-radius: 0.3rem;
}

.reviews-menu li {
    color: #555;
    border: 1px solid #555;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 13px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.review-action-search{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.review-action-box{
    background: lightblue;
    padding: 1rem 0;
}

.review-action-box button{
    border: none;
    padding: 0.5rem;
    background: #000;
    color:white;
    border-radius: 0.5rem;
}

.review-cards{
    background: lightblue;
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
</style>