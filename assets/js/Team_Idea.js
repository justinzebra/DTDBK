$(document).ready(function () {
    $("#AboutTeam").click(
        function (e) {
            e.preventDefault();
            $('.submenu').toggleClass('active');
            $('.submenu').slideToggle();
        }
    );

    $(".nav-list-item-link").click(function(event) {
        event.preventDefault(); // 阻止默认行为
        var href = $(this).attr("href"); // 获取链接的 href 属性值
        window.location.href = href; // 执行页面跳转
    });

    $("#Logo_icon").click(
        function (e) {
            e.preventDefault();
            $('.article_Box').html(`  <p data-aos="fade-up" data-aos-once="true"><strong>「目標不單是冠軍，而是要建立屬於數位系籃的文化」<br>從球員到教練團 從球經到後勤 每個人都是缺一不可的家人。<br>

            從數位系男籃開始，我們要樹立國北教大籃球隊的典範<br>
            提升學生乃至師長對於籃球運動的關注，
            <br>讓喜愛籃球的心共同凝聚成一股力量。</strong></p>`);

            $('.img_Box').html(`<img data-aos="fade-up" data-aos-once="true" src="./assets/My_img/橫圖.png" alt="">`);
        }
    );
    $("#wolf_icon").click(
        function (e) {
            e.preventDefault();
            $('.article_Box').html(`<P data-aos="fade-up" data-aos-once="true"><strong>LOGO概念<br>
            (1) 狼首：取自森林中狼的形象，狼是所有動物中最有種的，他甚至敢直視獵人的眼睛，希望球隊能保持不畏困難的態度與對勝利的飢渴。<br>
            (2) 籃球形狀徽章：放在狼首下方意味著球始終在掌控中，一如我們的比賽風格。<br>
            (3) 主要字體：以一款方正的極簡結構字體為參考，創造方正識別度高的英文字型，筆畫以直線條構成，象徵堅實、穩定與力量。</strong></P>`);

            $('.img_Box').html(` <img data-aos="fade-up" data-aos-once="true" src="./assets/My_img/形象LOGO圖.png" alt="">`);
        }
    );
    $("#basketball_icon").click(
        function (e) {
            e.preventDefault();
            $('.article_Box').html(`<P data-aos="fade-up" data-aos-once="true"><strong>「他不會 我會」是傳奇93學長陳亞生的經典名言，<br>
            時常溫柔地鼓勵對手勇敢出手 反正「他不會」，<br>
            並在對手以同樣金句鼓勵回來時 以「我會!」與進球回應對手， <br>以此達成一個友善的籃球氛圍。</strong></P>`);
            $('.img_Box').html(` <img data-aos="fade-up" data-aos-once="true" src="./assets/My_img/口號.png" alt="">`);
        }
    );

    
});
