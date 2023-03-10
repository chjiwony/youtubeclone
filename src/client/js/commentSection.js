const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const addComment = (text) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  newComment.appendChild(icon);
  newComment.appendChild(span);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const { status } = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      //JSON() 이 text 가 아닌 array를 전달하는 것으로 인식하게
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }), //프론트엔드에서 array로 저장 , 백엔드에서 처리는 JSON.parse 로 각 값 object 화 구별
  });
  textarea.value = ""; //커멘트 비우기
  if (status === 201) {
    addComment(text);
  }
};
if (form) {
  form.addEventListener("submit", handleSubmit);
}
