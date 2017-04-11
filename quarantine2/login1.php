<?php include './common/head.html' ?>
<link rel="stylesheet" type="text/css" href="css/home.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
<script type="text/javascript" src="js/jquery.validate.js"></script>
<script type="text/javascript" src="js/home.js"></script>

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      
      <div class="login_banner middleTable" style="background:url(img/login_banner.jpg) center center;background-size:cover;">
          <div class="middleRow ">
              <div class="banner_inner ">
             
                  <div class="loginZone bg-white  ">
                        <div class="title title02  align-center blue ">
                        <div class="title_inner">
                            <img class="icon" src="img/icon_04.png">
                            用户登录
                        </div>
                        </div>
                        <form class="login-form" action="" method="post">
                              <div class="form-row waysRow">
                                    <div class="labelWrapper">
                                        <label id="commonLabel" for="commonway" class="radio">
                                            <input type="radio" class="labelFor" id="commonway" name="ways" checked="true">
                                            <div class="radioBox"></div>
                                            <span class="radioText">普通登录</span>
                                        </label>
                                    </div>

                                    <div class="labelWrapper">
                                        <label id="phoneLabel" for="phoneway" class="radio">
                                            <input type="radio" class="labelFor" id="phoneway" name="ways" >
                                            <div class="radioBox"></div>
                                            <span class="radioText">手机登录</span>
                                        </label>
                                    </div>
                              </div>
                              <div class="form-row ">
                                
                                <input type="text" class="input-base uname" id="user" name="username" placeholder="用户名">
                              </div>
                              <div class="form-row ">
                                <input type="password" class="input-base pword " name="password" placeholder="密码">
                              </div>
                              <div class="form-row ">
                                
                                <div class="verifyRow">
                                    <input type="text" class="input-base m-b verifyInput" name="password" placeholder="输入验证码">
                                    <a href="#">
                                        <div class="verifyImg">
                                            <img src="img/verifyimage.png">
                                            <div class="verifyText">换一张</div>
                                        </div>
                                    </a>
                                </div>
                                
                              </div>  
                              
                              <div class="form-row ">
                                <button id="submit" name="submit" class="login button">登&nbsp;&nbsp;录</button>
                              </div>
                              <div class="form-row">
                                    <p class="quick_sign_up ">
                                        没有账户？<a class="orange">快速注册</a>
                                        <a class="blue float-r">忘记密码</a>
                                    </p>
                              </div>
                        </form>
                      
                  </div>
                  
                  
              </div>
          </div>
      </div>
      <script type="text/javascript">
          
      </script>
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  
    
<?php include './common/foot.html' ?>    