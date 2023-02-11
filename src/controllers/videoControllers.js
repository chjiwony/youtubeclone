import Video from "../models/Video";

// Video.find({}, (error, videos) => {
//   return res.render("home", {pageTitle:"Home", videos});
// });
export const home = async (req, res) => {
  const videos = await Video.find({}); //find 를 먼저 가져옴, error는 신경안씀.. 이건 try catch로
  return res.render("home", { pageTitle: "Home", videos });
};

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
