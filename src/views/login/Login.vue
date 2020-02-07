// 用户登录
<template>
  <div>
    <!-- 导航栏 -->
    <navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-right">
          <div class="row">
            <div class="col-md-6 text-left">
              <br />
              <br />
              <img
                alt=""
                src="@/assets/imgs/社会主义核心价值观.png"
                width="525"
                height="315"
              />
            </div>
            <div class="col-md-6 ">
              <h3>&nbsp;</h3>
              <div
                class="panel panel-default panel-body col-md-8 col-md-offset-2"
              >
                <br />
                <br />
                <br />
                <div class="form-group text-left">
                  <label>用户名</label>
                  <input
                    type="text"
                    class="form-control"
                    name="M00301"
                    id="user"
                  />
                  <p id="userMessage" style="color: red;">${userMessage }</p>
                </div>
                <div class="form-group text-left">
                  <label>パスワード</label>
                  <input
                    type="password"
                    class="form-control"
                    name="M00303"
                    id="password"
                  />
                  <p id="passwordMessage" style="color: red;">
                    ${passwordMessage }
                  </p>
                </div>
                <div class="col-md-12">
                  <button
                    id=""
                    type="button"
                    class="btn btn-primary col-md-4 col-md-offset-1"
                    onclick="loginCheck();"
                  >
                    登録
                  </button>
                  <span class="col-md-2"></span>
                  <button type="reset" class="btn btn-default col-md-4">
                    キャンセル
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Body End -->
  </div>
</template>

<script>
import { login } from "@/api/login.js";
import $ from jquery

export default {
  name: "Login",
  data: () => ({
    user: {
      username: null,
      password: null
    }
  }),
  methods: {
    login: function() {
      login(this.user);
    }
  },
  components: {
    navbar: () => import("@/components/LoginNavbar")
  },
  mounted() {
    $("#user").bind("input propertychange", function() {
      var text = $("#user").val();
      var textlen = $("#user").val().length;
      if (textlen > 3) {
        //alert("weishu");
        $("#userMessage").html("担当者コード欄に3桁を入力してください");
        var lenText = text.substring(0, 3);
        $("#user").val(lenText);
      }
    }),
      $("#user").keyup(function() {
        //強制入力タイプは半角文字です
        var str = $(this).val();
        //alert(str + "2");
        var result = "";
        for (var i = 0; i < str.length; i++) {
          if (str.charCodeAt(i) == 12288) {
            //alert("?");
            result += String.fromCharCode(str.charCodeAt(i) - 12256);
            continue;
          }
          if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
            //alert("?");
            $("#userMessage").html(
              "担当者コード欄に半角数字を入力してください"
            );
            //result += String.fromCharCode(str.charCodeAt(i) - 65248);
            result += "";
          } else {
            //alert("?");
            //$("#userMessage").html("担当者コード欄に半角数字を入力してください");
            result += String.fromCharCode(str.charCodeAt(i));
          }
        }
        $(this).val(result);

        //強制入力タイプは数字です
        var c = $(this);
        //alert(c.val() + "1");
        if (/[^\d]/.test(c.val())) {
          $("#userMessage").html("担当者コード欄に半角数字を入力してください");
          var temp = c.val().replace(/[^\d]/g, "");
          $(this).val(temp);
        }
      });
  }
};
</script>
