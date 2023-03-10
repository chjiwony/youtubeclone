const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      //JSON() 이 text 가 아닌 array를 전달하는 것으로 인식하게
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }), //프론트엔드에서 array로 저장 , 백엔드에서 처리는 JSON.parse 로 각 값 object 화 구별
  });
  textarea.value = ""; //커멘트 비우기
};
if (form) {
  form.addEventListener("submit", handleSubmit);
}
