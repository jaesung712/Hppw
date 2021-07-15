function sendit(){
    const userpw = document.getElementById('userpw');
    const hp = document.getElementById('hp');


    const expHpText = /^\d{3}\d{3,4}\d{4}$/;
    const expuserpw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    if(userpw.value == ''){
        alert('비밀번호를 입력하세요');
        userpw.focus();
        return false;
    }
    if(!expuserpw.test(userpw.value)){
        alert('비밀번호에 숫자 문자 특수문자 하나씩 넣으시오');
        email.focus();
        return false;
    }

    if(hp.value == ''){
        alert('전화번호를 입력해보세요')
        email.focus();
        return false;
    }

    return true;
}