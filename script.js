document.querySelector(".infor").style.display = "none";
document.querySelector(".secret").style.display = "block";

document.querySelector(".btn_check").addEventListener("click", function () {
  let checkimail = document.querySelector(".check_email").value;
  let trueemail = "sinhvien@funix.edu.vn";

  if (checkimail == trueemail) {
    document.querySelector(".secret").style.display = "none";
    document.querySelector(".infor").style.display = "block";
  } else if (!checkimail) {
    alert("⛔️ Vui lòng nhập email");
  } else {
    alert("⛔️ Đã nhập sai email, vui lòng nhập lại");
  }
});
// ẩn hiện phần kinh nghiệm
let viewmore = document.querySelector(".btn_Viewmore_exper");
let viewless = document.querySelector(".btn_Viewless_exper");
document
  .querySelector(".btn_Viewmore_exper")
  .addEventListener("click", function () {
    document.getElementById("exper").style.display = "block";
    document.querySelector(".hidden_exper").style.display = "none";
  });
document
  .querySelector(".btn_Viewless_exper")
  .addEventListener("click", function () {
    document.getElementById("exper").style.display = "none";
    document.querySelector(".hidden_exper").style.display = "block";
  });

// ẩn hiện phần học vấn

document
  .querySelector(".btn_Viewmore_study")
  .addEventListener("click", function () {
    document.getElementById("study").style.display = "block";
    document.querySelector(".hidden_study").style.display = "none";
  });
document
  .querySelector(".btn_Viewless_study")
  .addEventListener("click", function () {
    document.getElementById("study").style.display = "none";
    document.querySelector(".hidden_study").style.display = "block";
  });

// ẩn hiện phần hoạt động

document
  .querySelector(".btn_Viewmore_action")
  .addEventListener("click", function () {
    document.getElementById("action").style.display = "block";
    document.querySelector(".hidden_action").style.display = "none";
  });
document
  .querySelector(".btn_Viewless_action")
  .addEventListener("click", function () {
    document.getElementById("action").style.display = "none";
    document.querySelector(".hidden_action").style.display = "block";
  });

// ẩn hiện phần sở thích

document
  .querySelector(".btn_Viewmore_hobbit")
  .addEventListener("click", function () {
    document.getElementById("hobbit").style.display = "block";
    document.querySelector(".hidden_hobbit").style.display = "none";
  });
document
  .querySelector(".btn_Viewless_hobbit")
  .addEventListener("click", function () {
    document.getElementById("hobbit").style.display = "none";
    document.querySelector(".hidden_hobbit").style.display = "block";
  });

// ẩn hiện phần kỹ năng

document
  .querySelector(".btn_Viewmore_skill")
  .addEventListener("click", function () {
    document.getElementById("skill").style.display = "block";
    document.querySelector(".hidden_skill").style.display = "none";
  });
document
  .querySelector(".btn_Viewless_skill")
  .addEventListener("click", function () {
    document.getElementById("skill").style.display = "none";
    document.querySelector(".hidden_skill").style.display = "block";
  });

// ẩn hiện phần ngôn ngữ

document
  .querySelector(".btn_Viewmore_lang")
  .addEventListener("click", function () {
    document.getElementById("lang").style.display = "block";
    document.querySelector(".hidden_lang").style.display = "none";
  });
document
  .querySelector(".btn_Viewless_lang")
  .addEventListener("click", function () {
    document.getElementById("lang").style.display = "none";
    document.querySelector(".hidden_lang").style.display = "block";
  });
