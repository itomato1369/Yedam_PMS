// bindCommentEvents 댓글 입력을 할 수 있는 함수
function bindCommentEvents() {
  // issue_update_comment.html에 있는 id commentSaveButton를 가져옴
  const saveButton = document.getElementById("commentSaveButton");
  saveButton.addEventListener("click", function () {
    // id commentInput의 값을 담는 변수
    const content = document.getElementById("commentInput").value;
    console.log("댓글 전송 예정", content);
    // 요청만 날림 백엔드 미구현
    fetch("/issuedetails/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jobNo: 1,
        coment: content,
      }),
    });
    alert("댓글 전송 백엔드 미구현");
  });
}
