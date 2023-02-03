export const trending = (req, res) => res.send("Home Page Videos");

export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
// export default 는 한 파일에 한개 밖에 할 수 없다.
// export default 는 import 시 다른 이름으로 해도 상관없다.
// 그러나 여러 변수를 export 해야 할 때는 못쓴다.
