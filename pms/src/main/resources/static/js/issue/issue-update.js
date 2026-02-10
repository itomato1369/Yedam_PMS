/**
 * 일감 수정페이지의 js
 *
 * 파일/ 모달창이 아니기에 DOMContentLoaded 필수
 *
 * 수정이력 / 댓글 fragment 전환을 담당
 */
document.addEventListener("DOMContentLoaded", function () {
  // id 가 historyButton인 값을 가져와서 변수에 넣는다
  // id 가 commentButton인 값을 가져와서 변수에 넣는다
  const historyButton = document.getElementById("historyButton");
  const commentButton = document.getElementById("commentButton");

  historyButton.addEventListener("click", loadHistoryArea);
  commentButton.addEventListener("click", loadCommentArea);
});
// IssueHistoryArea fragment 로드
function loadHistoryArea() {
  fetch("/issuedetails/history")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("subContentArea").innerHTML = html;
    })
    .catch((error) => {
      console.error("수정이력 fragment 로딩 실패", error.message);
    });
}
// CommentArea fragment로드
// loadCommentArea 함수 함수 선언식 저장된 댓글 불러오기
function loadCommentArea() {
  /* controller에서 내려주는 URL 추후에 수정
	   서버에서 준 fragment를
       res는 text로
	   그리고 id가 subContentArea인 곳에 html로
	   가져온다
    
	*/
  fetch("/issuedetails/comments")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("subContentArea").innerHTML = html;

      /* bindCommentEvents라는 함수가 있으면 그걸 실행하겠다
        typeof는 해당 변수의 데이터 타입을 문자열로 반환 
        issue_update.html에서 script로 다 읽어들이니까 거기서 찾는다
       */
      if (typeof bindCommentEvents === "function") {
        bindCommentEvents();
      }
    })
    .catch((error) => {
      console.error("댓글 fragment 로딩 실패", error.message);
    });
}

