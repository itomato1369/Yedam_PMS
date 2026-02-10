/**
 * 모달창에서 실제 id가 confirmSubmit인 확인 버튼의 이벤트를 감지
 * 확인 버튼을 누르면 id가  workUpdate인 태그를 가져와서 submit Method를 실행
 * submit Method가 POST방식임 
 */
document.getElementById("confirmSubmit").addEventListener("click", function () {
  document.getElementById("workUpdate").submit();
});
