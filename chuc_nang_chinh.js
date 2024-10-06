function moCuaHang() {
    location.href = "shop.html";
}

function moGioiThieu() {
    location.href = "about.html";
}

function moLienHe() {
    location.href = "contact.html";
}

function quayLaiTrangChu() {
    location.href = "index.html";
}

function guiMail() {
    var ten = document.getElementById("input-name").value;
    var sdt = document.getElementById("input-phone").value;
    var tinNhan = document.getElementById("textarea-message").value;
    alert(ten + " đã gửi tin nhắn như sau : " + tinNhan + "\nChúng tôi sẽ liên hệ với bạn qua số " + sdt);
}