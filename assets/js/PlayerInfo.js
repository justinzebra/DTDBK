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
});
