import Video from "../models/Video";

export const home = (req, res) => {
  Video.find({}, (error, videos) => {
    console.log("error", error);
    console.log("videos", videos);
  });
  return res.render("home", { pageTitle: "Home", videos: [] });
}; //pug 적용, 괄호 안은 view 이름
export const watch = (req, res) => {
  const { id } = req.params; //const id = req.params.id;
  return res.render("watch", { pageTitle: `Watching` });
};
// {  return res.render("watch");};
export const getEdit = (req, res) => {
  //painting the form
  const { id } = req.params; //const id = req.params.id;

  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  return res.redirect(`/videos/${id}`);
  // saving the changes
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  // here we will add a video to the videos array.
  const { title } = req.body;

  return res.redirect("/");
};
