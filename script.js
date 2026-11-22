// 계좌번호 복사 버튼
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      showToast("계좌정보를 복사했습니다.");
    } catch {
      showToast("복사할 수 없습니다. 계좌정보를 직접 선택해 주세요.");
    }
  });
});
