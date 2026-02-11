/**
 * DOMContentLoaded html파일을 다 만들고 나면 JavaScript 코드를 실행한다
 */
document.addEventListener("DOMContentLoaded", function () {
  /*	bootstrap-datepicker 플러그인은 jQuery만 알아듣는다 
  
    work_list.html에서 설정을 해놓았음
				class="datepicker"를 가진 input요소를 찾아서
				datepicker() method를 실행하겠다
				한국어 캘린더 사용을 위해 가져옴
			 */
  $(".datepicker").datepicker({
    format: "yyyy-mm-dd",
    language: "ko",
    autoclose: true,
  });
  /* 검색조건 추가 메뉴에서 항목을 클릭하면 
   class명이 add-condition인 걸다 가져와서 각각에
  변수명 menuItem으로  클릭 이벤트를 준다
  변수명 targeId는 data-target 아이디
  targetDiv는 그 아이디의 html요소를 가져옴
  if 만약 그 요소가 있으면 d-none을 지운다
 
  
  */
  document.querySelectorAll(".add-condition").forEach((menuItem) => {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-target");
      const targetDiv = document.getElementById(targetId);

      if (targetDiv) {
        targetDiv.classList.remove("d-none"); // 숨김해제
        targetDiv.querySelector("input").focus(); // 나타나면 바로 입력할 수 있도록
      }
    });
  });
  /* 닫기 버튼 클릭시 다시 숨긴다 d-none 활성화 
   btn-remove 클래스를 다 가져와서 각각에
   closeButton이라는 이름의 클릭 이벤트를 부여한다
   targetId는 data-target아이디이고
   targetDiv는 그 targetId의 아이디를 가져온다
   d-none이라는 class를 추가한다
   그리고 그 값도 초기화 한다
  */
  document.querySelectorAll(".btn-remove").forEach((closeButton) => {
    closeButton.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetDiv = document.getElementById(targetId);

      if (targetDiv) {
        targetDiv.classList.add("d-none");
        targetDiv.querySelector("input").value = "";
      }
    });
  });
  
  
});
