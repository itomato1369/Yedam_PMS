/**
 *   일감 반려 사실상 권한 있는 사용자가 댓글 다는거임
 */
document.addEventListener("DOMContentLoaded", function () {
  // issue_reject_modal의 id가 confirmSubmit인 태그 가져옴
  const rejectButton = document.getElementById("rejectSubmit");
  const errMsg = document.getElementById("rejectErrorMessage");
  const reasonInput = document.getElementById("rejectComment");

  rejectButton.addEventListener("click", function () {
    const reason = reasonInput.value.trim();
    // 해당 일감 번호를 기준으로 담당자 찾아감
    const jobNo = rejectButton.dataset.jobNo;

    // errMsg 메세지 초기화
    errMsg.classList.add("d-none");

    if (!reason) {
      errMsg.classList.remove("d-none");
      return;
    }

    fetch("/issuedetails/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jobNo: 1,
        coment: content,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        alert("반려 사유가 등록 되었습니다");
      })
      .catch(() => {
        errMsg.textContent = "반려 처리중 오류가 발생했습니다";
        errMsg.classList.remove("d-none");
      });
  });

  // 반려 사유 입력하기 시작하면 에러 메세지 사라짐
  // input 이벤트는 값을 입력하기 시작하는 순간
  reasonInput.addEventListener("input", function () {
    errMsg.classList.add("d-none");
  });
});
