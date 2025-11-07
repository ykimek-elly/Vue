import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import ShareReviews from './pages/ShareReviews.vue';
import PropsEx from './pages/PropsEx.vue';
import ReviewAdd from './pages/ReviewAdd.vue';
import EmitEx from './pages/EmitEx.vue';
import RefEx from './pages/RefEx.vue';


//1. 페이지 경로 (길 안내표!)
const routes = [
    {path : "/" , component : ShareReviews},
    {path : "/props" , component : PropsEx},
    {path : "/reviewAdd" , component : ReviewAdd},
    {path : "/emit" , component : EmitEx},
    {path : "/ref" , component : RefEx}
];

// 2. 라우터 생성(페이지 관리자)
const router = createRouter({
    history : createWebHistory(),
    routes
});

// 3. 내가 만드는 vue파일이랑 router랑 연결하기
createApp(App).use(router).mount('#app')