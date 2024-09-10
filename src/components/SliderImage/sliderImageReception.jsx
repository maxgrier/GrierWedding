
const getFileNames = async () => {
  try {
    // console.log('files ', files)
    // read('../../assets/images/portraits', function (err, contents) {
    //   console.log('contents ', contents)
    // })
    // const data = await fetch(
    //   "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony",
    //   { headers: { Accept: "application/vnd.github+full" } }
    // );
    // console.log(`Success! Status: ${data.status}. Rate limit remaining: ${data.headers["x-ratelimit-remaining"]}`)
    // const dataJson = await data.json();
    // let d = await formatData(dataJson);
    // return d;
  } catch (error) {
    console.log("error: ", error);
  }
};
// getFileNames()

let formattedData = [];
const formatData = async (data) => {
  data.map((item, idx) => {
    // if (idx < 150) {
      let temp = {
        // title: "First Slide",
        // description: "This is the first slider Image of our carousel",
        // urls: item.html_url + "?raw=true",
        urls: require("../../assets/images/Portraits/" + item.name + ""),
        layout:
          item.name.substring(0, item.name.length - 4).slice(-1) === "L"
            ? "landscape"
            : "portrait",
        name: item.name,
        // name2: item.name.substring(0, item.name.length - 4),
      };
      formattedData.push(temp);
    // }
  });

  // console.log("formatted data ", formattedData);
  return formattedData;
};

// let sliderImagePortraits = await getFileNames();
// export default sliderImagePortraits;

// https://photos.app.goo.gl/QiiVPyyg6BcCT7gD6
// https://drive.google.com/thumbnail?id=0B6wwyazyzml-OGQ3VUo0Z2thdmc&sz=w1000

let sliderImageReception = [
  {
    name: "DSC00010.jpg",
    url: "https://photos.app.goo.gl/QiiVPyyg6BcCT7gD6",
    url2: "https://drive.google.com/thumbnail?id=QiiVPyyg6BcCT7gD6",
  }
]

let sliderImageReception2 = await formatData(sliderImageReception);
export default sliderImageReception2;