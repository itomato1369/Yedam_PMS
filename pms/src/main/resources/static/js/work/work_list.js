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

});
