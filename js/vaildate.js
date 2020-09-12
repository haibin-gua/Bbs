$().ready(function() {
    // 在键盘按下并释放及提交后验证提交表单
      $("#signinForm").validate({
        rules:{
            username:{
                required:true,
                minlength:6,
                maxlength:12
            },
            pwd:{
                required:true,
                minlength:6,
                maxlength:12
            }
        }
        });
        // 在键盘按下并释放及提交后验证提交表单
      $("#signupForm").validate({
        rules:{
            name:{
                required:true,
                maxlength:6
            },
            username:{
                required:true,
                minlength:6,
                maxlength:12
            },
            pwd:{
                required:true,
                minlength:6,
                maxlength:12
            }
        }
        });
    });