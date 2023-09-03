var username = "shenli";
    var password = "306825";

    // 验证用户输入的账号密码
    function checkLogin() {
      // 获取用户输入的账号密码
      var inputName = document.getElementById("Name").value;
      var inputPassword = document.getElementById("Password").value;

      // 比较用户输入的账号密码和预设的账号密码是否一致
      if (inputName == username && inputPassword == password) {
        // 如果一致，跳转到另一个界面
        window.location.href = "../index.html";
      } else {
        // 如果不一致，弹出提示信息，并阻止表单提交
        alert("账号或密码错误！");
        return false;
      }
    }