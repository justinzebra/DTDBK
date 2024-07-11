$(document).ready(function () {
    $("#AboutTeam").click(
        function (e) {
            e.preventDefault();
            $('.submenu').toggleClass('active');
            $('.submenu').slideToggle();
        }
    );

    $(".nav-list-item-link").click(function (event) {
        event.preventDefault(); // 阻止默认行为
        var href = $(this).attr("href"); // 获取链接的 href 属性值
        window.location.href = href; // 执行页面跳转
    });
    // 解析 URL 中的参数
    const urlParams = new URLSearchParams(window.location.search);
    const character = urlParams.get('character');



    // 根据参数值显示相应人物信息
    if (character === '1') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/家祥.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 梁家祥<br>綽號 : Kevin<br>年級 : 大三<br>身高/體重 : 182cm/78kg<br>背號 : 7<br>位置 : 小前鋒<br><br> 「愛隊上的大家 開心打球 打球開心。」</strong></P>';
    } else if (character === '2') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/紹梵.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 洪紹梵<br>綽號 : damm_it<br>年級 : 大三<br>身高/體重 : 165cm/58kg<br>背號 : 21<br>位置 : 控球後衛</strong></P>';
    } else if (character === '3') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/執中.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 簡執中<br>綽號 : C.C<br>年級 : 碩三<br>身高/體重 : 160cm/65kg<br>背號 : 11<br>位置 : 得分後衛</strong></P>';
    } else if (character === '4') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/俊瑋.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 邱俊瑋<br>綽號 : C.C.W<br>年級 : 碩二<br>身高/體重 : 185cm/82kg<br>背號 : 27<br>位置 : 大前鋒<br><br>「學弟們加油。」</strong></P>';
    } else if (character === '5') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/修逸.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 呂修逸<br>綽號 : 老呂<br>年級 : 大四<br>身高/體重 : 188cm/72kg<br>背號 : 15<br>位置 : 中鋒<br><br><br>「不要覺得自己不是天才就輕易放棄<br>要相信自己的才能還沒完全發揮。」</strong></P></strong></P>';
    } else if (character === '6') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/威誠.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 陳威誠<br>綽號 : ChenChen<br>年級 : 大四<br>身高/體重 : 170cm/58kg<br>背號 : 5<br>位置 : 控球後衛<br><br><br>If life gives you lemons, make lemonade.</strong></P>';
    } else if (character === '7') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/塏峻.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 黃塏峻<br>綽號 :Kai<br>年級 : 大四<br>身高/體重 : 170cm/65kg<br>背號 : 87<br>位置 : 得分後衛<br><br><br>「映塏斜陽峻，<br>萱草悠悠香，<br>詩情寄高處，<br>心境自清涼。」</strong></P>';
    } else if (character === '8') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/柏松.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 簡柏松<br>綽號 : Benson<br>年級 : 大四<br>身高/體重 : 170cm/60kg<br>背號 : 23<br>位置 : 得分後衛<br><br>「不要讓未來的你後悔現在的自己。」</strong></P>';
    } else if (character === '9') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/文慶.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 許文慶<br>綽號 : 慶仔<br>年級 : 大二<br>身高/體重 : 177cm/67kg<br>背號 : 10<br>位置 : 小前鋒<br><br>「 一生懸命。」</strong></P>';
    } else if (character === '10') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/萬歲.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : Angelos Lin<br>綽號 : 萬歲<br>年級 : 大二<br>身高/體重 : 168cm/58kg<br>背號 : 22<br>位置 : 控球後衛</strong></P>';
    } else if (character === '11') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/曜丞.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 楊曜丞<br>綽號 : Terry<br>年級 : 大一<br>身高/體重 : 183cm/80kg<br>背號 : 98<br>位置 : 中鋒</strong></P>';
    } else if (character === '12') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/毅豪.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 何毅豪<br>綽號 : 半場專用<br>年級 : 大一<br>身高/體重 : 178cm/75kg<br>背號 : 40<br>位置 : 大前鋒</strong></P>';
    } else if (character === '13') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/芷聿03.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 林芷聿<br>綽號 : jiana<br>年級 : 大三<br><br>座右銘 :<br>沒有吃飽 怎麼減肥。</P>';
    } else if (character === '14') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/映萱.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 李映萱<br>綽號 : inxuan<br>年級 : 大三</strong></P>';
    } else if (character === '15') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/毓庭.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 林毓庭<br>綽號 : yuting<br>年級 : 大四<br><br>想說的話 :<br>球經雖然無法上場比賽<br>但我們會在場下賣力加油<br>成為球隊最強的後盾。</strong></P>';
    } else if (character === '16') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/宥瑄.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 黃宥瑄<br>綽號 : Xuan<br>年級 : 大四</strong></P>';
    } else if (character === '17') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/凱雯.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 詹凱雯<br>綽號 : lexieee<br>年級 : 大二</strong></P>';
    } else if (character === '18') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/子容.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 黃子容<br>綽號 : zirong<br>年級 : 大一</strong></P>';
    } else if (character === '19') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/宏碩.png" class="img-fluid mb-4" alt="">';
        document.getElementById('article_Box').innerHTML = '<P><strong>姓名 : 謝宏碩<br>綽號 : Shuo<br>年級 : 大一<br>身高/體重 : 182cm/60kg<br><br>座右銘 : 要快樂的打球。</strong></P>';
    } else {
        document.getElementById('article_Box').innerHTML = '<p>Character information not available.</p>';
    }


    if (character === '1') {
        document.getElementById('player_title').innerHTML = '<h1># 7 隊長-梁家祥 (F)</h1>';
    } else if (character === '2') {
        document.getElementById('player_title').innerHTML = '<h1># 21 副隊長-洪紹梵 (G)</h1>';
    } else if (character === '3') {
        document.getElementById('player_title').innerHTML = '<h1># 11 簡執中 (G)</h1>';
    } else if (character === '4') {
        document.getElementById('player_title').innerHTML = '<h1># 27 邱俊瑋 (F)</h1>';
    } else if (character === '5') {
        document.getElementById('player_title').innerHTML = '<h1># 15 呂修逸 (C)</h1>';
    } else if (character === '6') {
        document.getElementById('player_title').innerHTML = '<h1>#  5 陳威誠 (G)</h1>';
    } else if (character === '7') {
        document.getElementById('player_title').innerHTML = '<h1># 87 黃塏峻 (G)</h1>';
    } else if (character === '8') {
        document.getElementById('player_title').innerHTML = '<h1># 23 簡柏松 (G)</h1>';
    } else if (character === '9') {
        document.getElementById('player_title').innerHTML = '<h1># 10 許文慶 (F)</h1>';
    } else if (character === '10') {
        document.getElementById('player_title').innerHTML = '<h1># 22 Angelos Lin (G)</h1>';
    } else if (character === '11') {
        document.getElementById('player_title').innerHTML = '<h1># 98 楊曜丞 (C)</h1>';
    } else if (character === '12') {
        document.getElementById('player_title').innerHTML = '<h1># 40 何逸豪 (F)</h1>';
    } else if (character === '13') {
        document.getElementById('player_title').innerHTML = '<h1>球經-林芷聿</h1>';
    } else if (character === '14') {
        document.getElementById('player_title').innerHTML = '<h1>球經-李映萱</h1>';
    } else if (character === '15') {
        document.getElementById('player_title').innerHTML = '<h1>球經-林毓庭</h1>';
    } else if (character === '16') {
        document.getElementById('player_title').innerHTML = '<h1>球經-黃宥瑄</h1>';
    } else if (character === '17') {
        document.getElementById('player_title').innerHTML = '<h1>球經-詹凱雯</h1>';
    } else if (character === '18') {
        document.getElementById('player_title').innerHTML = '<h1>球經-黃子容</h1>';
    } else if (character === '19') {
        document.getElementById('player_title').innerHTML = '<h1>攝影-謝宏碩</h1>';
    } else {
        document.getElementById('player_title').innerHTML = '<p>Character information not available.</p>';
    }

    // 圖
    if (character === '1') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/中圖.png" class="img-fluid mb-4" alt="">';
    } else if (character === '2') {
        document.getElementById('img_Box').innerHTML = '<img src="assets/My_img/人物介紹/紹梵01.png" class="img-fluid mb-4" alt="">';
    } else if (character === '3') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/執中01.png" alt="">';
    } else if (character === '4') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/俊瑋02.png" alt="">';
    } else if (character === '5') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/修逸01.png" alt="">';
    } else if (character === '6') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/威誠01.png" alt="">';
    } else if (character === '7') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/塏峻01.png" alt="">';
    } else if (character === '8') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/柏松01.png" alt="">';
    } else if (character === '9') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/文慶01.png" alt="">';
    } else if (character === '10') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/萬歲01.png" alt="">';
    } else if (character === '11') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/曜丞01.png" alt="">';
    } else if (character === '12') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/毅豪01.png" alt="">';
    } else if (character === '13') {
        document.getElementById('img_Box').innerHTML = '  <img src="assets/My_img/人物介紹/芷聿.png" class="img-fluid mb-4" alt="">';
    } else if (character === '14') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/映萱01.png" alt="">';
    } else if (character === '15') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/毓庭01.png" alt="">';
    } else if (character === '16') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/宥瑄01.png" alt="">';
    } else if (character === '17') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/未知.png" alt="">';
    } else if (character === '18') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/未知.png" alt="">';
    } else if (character === '19') {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/宏碩01.png" alt="">';
    } else {
        document.getElementById('img_Box').innerHTML = ' <img src="../img/人物介紹/宏碩01.png" alt="">';
    }

});

