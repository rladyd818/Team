function validate(elem) {
    var id = elem.value;
    var reg2 = /[a-z][0-9]+/;

    if ((reg2.test(id) && (id.length >= 5 || id.length <= 20))) {
        return true;
    } else {
        alert("5-20개 사이의 문자와 숫자만 가능합니다.");
        elem.focus();
        return false;
    }
}
function correct(elem1, elem2) {
    var pass = elem1.value;
    var pass1 = elem2.value;
    if (pass == pass1) {
        return true;
    }
    else {
        alert("비밀번호 불일치");
        elem1.focus();
        elem2.focus();
        return false;
    }

}

