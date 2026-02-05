document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.querySelector('form');
    const userIdInput = document.getElementById('userId');
    const idMsgArea = document.getElementById('idCheckMsg');
    
    const pwdInput = document.getElementById('passwd');
    const pwdConfirmInput = document.getElementById('passwordConfirm');
    const pwdMsgArea = document.getElementById('pwdCheckMsg');

    // --- [1] 아이디 중복 체크 (실시간) ---
    userIdInput.addEventListener('blur', function() {
        const userId = this.value;
        if (!userId) {
            idMsgArea.textContent = "";
            return;
        }

        fetch(`/users/check-id?userId=${userId}`)
            .then(response => response.json())
            .then(isExist => {
                if (isExist) {
                    idMsgArea.textContent = "이미 존재하는 아이디입니다.";
                    idMsgArea.style.color = "red";
                } else {
                    idMsgArea.textContent = "사용 가능한 아이디입니다.";
                    idMsgArea.style.color = "green";
                }
            });
    });

    // --- [2] 비밀번호 일치 체크 (실시간) ---
    function validatePassword() {
        const pwdValue = pwdInput.value;
        const confirmValue = pwdConfirmInput.value;

        if (!pwdValue || !confirmValue) {
            pwdMsgArea.textContent = "";
            return;
        }

        if (pwdValue === confirmValue) {
            pwdMsgArea.textContent = "비밀번호가 일치합니다.";
            pwdMsgArea.style.color = "green";
        } else {
            pwdMsgArea.textContent = "비밀번호가 일치하지 않습니다.";
            pwdMsgArea.style.color = "red";
        }
    }

    pwdInput.addEventListener('blur', validatePassword);
    pwdConfirmInput.addEventListener('blur', validatePassword);

    // --- [3] 최종 제출 시 검사 ---
    userForm.addEventListener('submit', function(event) {
        // 메시지가 빨간색인 게 하나라도 있으면 전송 막기
        if (idMsgArea.style.color === "red" || pwdMsgArea.style.color === "red") {
            event.preventDefault();
            alert("입력 정보를 다시 확인해주세요.");
        }
    });
});