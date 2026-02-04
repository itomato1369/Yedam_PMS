const userModal = document.getElementById("userSelectModal");
const managerInput = document.getElementById("managerId");

userModal.querySelectorAll(".user-item").forEach((item) => {
  item.addEventListener("click", function () {
    managerInput.value = this.textContent.trim();

    // 이미 열려있는 modal 인스턴스를 가져와서 닫는
    // Bootstrap 공식 방식
    const modal = bootstrap.Modal.getInstance(userModal);
    modal.hide();
  });
});