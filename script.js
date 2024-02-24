* {
    margin:0px;
    padding:0px;
    box-sizing:border-box;
  }
  body {
    font-family:sans-serif;
    #f5f5f5;
  }
  .login-form {
    absolute;
    50%;
    50%;
    translate(-50%,-50%);
    90%;
    max-width:450px;
    #fff;
    20px 30px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    1px solid rgba(17, 12, 46, 0.15);
    border-radius: 10px;
  }
  .login-form .form-title {
    text-align:center;
    font-size:30px;
    font-weight:600;
    20px 0px 30px;
    #111;
  }
  .login-form .form-input {
    10px 0px;
  }
  .login-form .form-input label,
  .login-form .captcha label {
    block;
    font-size:15px;
    #111;
    margin-bottom:10px;
  }
  .login-form .form-input input {
    100%;
    10px;
    none;
    border-radius: 4px;
    1px solid #888;
    font-size:15px;
  }
  .login-form .captcha {
    15px 0px;
  }
  .login-form .captcha .preview {
    #555;
    100%;
    text-align:center;
    40px;
    line-height:40px;
    letter-spacing:8px;
    1px dashed #888;
    border-radius: 4px;
    font-family:"monospace";
  }
  .login-form .captcha .preview span {
    inline-block;
    user-select:none;
  }
  .login-form .captcha .captcha-form {
    flex;
  }
  .login-form .captcha .captcha-form input {
    100%;
    none;
    8px;
    border-radius: 4px;
    1px solid #888;
  }
  .login-form .captcha .captcha-form .captcha-refresh {
    40px;
    none;
    none;
    #888;
    border-radius: 4px;
    #eee;
    pointer;
  }
  #login-btn {
    margin-top:5px;
    100%;
    12px;
    none;
    none;
    font-size:15px;
    text-transform:uppercase;
    #4c81ff;
    border-radius: 5px;
    #fff;
    .3s;
    pointer;
  }
  #login-btn:hover{
    .8;
  }