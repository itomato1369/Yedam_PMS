/*
issue_update_modal의 id updateSubmit에 이벤트를 등록한다
issue_update.html의 form 태그id issueUpdate에 action post
 일감 수정 모달에서 수정사항 전송
*/
document.getElementById("updateSubmit").addEventListener("click", function () {
  document.getElementById("issueUpdate").submit();
});
