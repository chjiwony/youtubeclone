import Video from "../models/Video";

// Video.find({}, (error, videos) => {
//   return res.render("home", {pageTitle:"Home", videos});
// });
export const home = async (req, res) => {
  const videos = await Video.find({}); //find 를 먼저 가져옴, error는 신경안씀.. 이건 try catch로
  return res.render("home", { pageTitle: "Home", videos }); //뒤에 뭐가 실행되지 않게 하기 위해 return 함. return 없어도 된다.
};

export const watch = async (req, res) => {
  const { id } = req.params; //const id = req.params.id;
  const video = await Video.findById(id);
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
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

export const postUpload = async (req, res) => {
  // here we will add a video to the videos array.
  const { title, description, hashtags } = req.body;
  //방법2 오브젝트 따로 안만들고 자동생성, 그러나 에러발생가능 try/error
  try {
    await Video.create({
      title,
      description,

      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    // await video.save();
    // 방법1 JS 오브젝트를 만들고 저장
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
