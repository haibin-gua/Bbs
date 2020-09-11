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
        },
        message:{
            username:{
                required:'请输入用户名',
                minlength:'用户名长度不能小于6个字符',
                maxlength:'用户名长度不能大于12个字符'
            },
            pwd:{
                required:'请输入密码',
                minlength:'密码长度不能小于6个字符',
                maxlength:'密码长度不能大于12个字符'
            }
        }
        });
    });