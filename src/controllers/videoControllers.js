const fakeUser = {
  username: "Nico",
  loggedIn: true,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser }); //pug 적용, 괄호 안은 view 이름
export const see = (req, res) => res.render("watch");
// {  return res.render("watch");};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");

// export default 는 한 파일에 한개 밖에 할 수 없다.
// export default 는 import 시 다른 이름으로 해도 상관없다.
// 그러나 여러 변수를 export 해야 할 때는 못쓴다.
