let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
}; //pug 적용, 괄호 안은 view 이름
export const watch = (req, res) => {
  const { id } = req.params; //const id = req.params.id;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
// {  return res.render("watch");};
export const getEdit = (req, res) => {
  //painting the form
  const { id } = req.params; //const id = req.params.id;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
  // saving the changes
};

// export default 는 한 파일에 한개 밖에 할 수 없다.
// export default 는 import 시 다른 이름으로 해도 상관없다.
// 그러나 여러 변수를 export 해야 할 때는 못쓴다.
