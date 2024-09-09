import First from "../../assets/images/groups/DSC00220.jpg";
import Second from "../../assets/images/groups/DSC00317.jpg";
import Third from "../../assets/images/groups/DSC00337.jpg";
import Fourth from "../../assets/images/groups/DSC00364.jpg";
import Fifth from "../../assets/images/groups/DSC00537.jpg";
import Sixth from "../../assets/images/groups/DSC04655.jpg";

const getFileNames = async () => {
  try {
    // https://api.github.com/repos/maxgrier/PhotoRepo/contents/groups
    // const data = fetch("https://api.github.com/repos/maxgrier/PhotoRepo/groups/git/trees/main?recursive=1")
    const data = await fetch(
      "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups",
      { headers: { Accept: "application/vnd.github+full" } }
    );
    console.log("g data here ");
    const dataJson = await data.json();
    // console.log("git data ", dataJson);
    let d = await formatData(dataJson);
    return d;
    // return makeObjs(dataJson);
    // return dataJson
  } catch (error) {
    console.log("error: ", error);
  }
};

let formattedData = [];
const formatData = async (data) => {
  data.map((item) => {
    let temp = {
      // title: "First Slide",
      // description: "This is the first slider Image of our carousel",
      urls: item.html_url + "?raw=true",
      // urls: item.html_url,
      layout:
        item.name.substring(0, item.name.length - 4).slice(-1) === "L"
          ? "landscape"
          : "portrait",
      name: item.name,
      // name2: item.name.substring(0, item.name.length - 4),
    };
    formattedData.push(temp);
  });
  // console.log("formatted data ", formattedData);
  return formattedData;
};

// function getMeta(url) {
//   var w;
//   var h;
//   var img = new Image();
//   img.src = url;
//   img.onload = function () {
//     w = this.width;
//     h = this.height;
//   };
//   console.log("img ", img);
//   return { w: w, h: h };
// }

// "http://snook.ca/files/mootools_83_snookca.png" //1024x678
// "http://shijitht.files.wordpress.com/2010/08/github.png" //128x128

// var end = getMeta(
//   "https://github.com/maxgrier/PhotoRepo/blob/main/groups/DSC00220.jpg"
// );
// var w = end.w;
// var h = end.h;
// console.log(w + "width" + h + "height");

// const makeObjs = (data) => {
//   let items = [];
//   data.map((el) => {
//     var end = getMeta(el.html_url);
//     var w = end.w;
//     var h = end.h;
//     console.log("image ", w + "width" + h + "height");
//     const img = new Image();
//     img.img.onload = function () {
//       let width = this.width;
//       let height = this.height;

//       // Log the dimensions
//       console.log("Width: " + width + ", Height: " + height);
//     };
//     // img.onload = () => cb(null, img);
//     // img.onerror = (err) => cb(err);
//     // img.src = el.html_url;
//     // console.log('image ', img)
//     items.push({
//       title: el.name,
//       urls: el.html_url,
//       layout: "portrait",
//       name: el.name,
//       name2: el.name.split(".")[0],
//     });
//   });
//   return items;
// };

// {
//   "name": "DSC00220.jpg",
//   "path": "groups/DSC00220.jpg",
//   "sha": "b0537cdbaf867c9e493e1ac6178e86e7e34e9691",
//   "size": 9679968,
//   "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/groups/DSC00220.jpg?ref=main",
//   "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/groups/DSC00220.jpg",
//   "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b0537cdbaf867c9e493e1ac6178e86e7e34e9691",
//   "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/groups/DSC00220.jpg",
//   "type": "file",
//   "_links": {
//     "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/groups/DSC00220.jpg?ref=main",
//     "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b0537cdbaf867c9e493e1ac6178e86e7e34e9691",
//     "html": "https://github.com/maxgrier/PhotoRepo/blob/main/groups/DSC00220.jpg"
//   }
// "https://github.com/maxgrier/PhotoRepo/blob/main/ceremony/DSC00451.jpg?raw=true"

// let sliderImageGroups = await getFileNames();
// let sliderImageGroups = [{}]
// export default sliderImageGroups.slice(0,50);
// export default sliderImageGroups;

// export default formattedData;

// ASK ABOUT 700,773,822,4655,


 let sliderImageGroups = [
  {
    "name": "DCS00392L.jpg",
    "path": "Groups/DCS00392L.jpg",
    "sha": "1f03fad3677e98961cbfb50b692861aa1a1d3577",
    "size": 5269851,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DCS00392L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DCS00392L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1f03fad3677e98961cbfb50b692861aa1a1d3577",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DCS00392L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DCS00392L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1f03fad3677e98961cbfb50b692861aa1a1d3577",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DCS00392L.jpg"
    }
  },
  {
    "name": "DSC00023.jpg",
    "path": "Groups/DSC00023.jpg",
    "sha": "2c101cbb46e11d01d6bb5253d46b1c00cc948bdc",
    "size": 4758180,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00023.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00023.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2c101cbb46e11d01d6bb5253d46b1c00cc948bdc",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00023.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00023.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2c101cbb46e11d01d6bb5253d46b1c00cc948bdc",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00023.jpg"
    }
  },
  {
    "name": "DSC00031.jpg",
    "path": "Groups/DSC00031.jpg",
    "sha": "3cb167b0753db99415617f25a67c49f2bb2e23a6",
    "size": 6545393,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00031.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00031.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3cb167b0753db99415617f25a67c49f2bb2e23a6",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00031.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00031.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3cb167b0753db99415617f25a67c49f2bb2e23a6",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00031.jpg"
    }
  },
  {
    "name": "DSC00036.jpg",
    "path": "Groups/DSC00036.jpg",
    "sha": "941e06fe8e185d419324d20fac1ca643a0d65e50",
    "size": 7839584,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00036.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00036.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/941e06fe8e185d419324d20fac1ca643a0d65e50",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00036.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00036.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/941e06fe8e185d419324d20fac1ca643a0d65e50",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00036.jpg"
    }
  },
  {
    "name": "DSC00197L.jpg",
    "path": "Groups/DSC00197L.jpg",
    "sha": "68c0485e9cd9f064c9b83846545bda7fc1dbe8a2",
    "size": 8351267,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00197L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00197L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/68c0485e9cd9f064c9b83846545bda7fc1dbe8a2",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00197L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00197L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/68c0485e9cd9f064c9b83846545bda7fc1dbe8a2",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00197L.jpg"
    }
  },
  {
    "name": "DSC00202L.jpg",
    "path": "Groups/DSC00202L.jpg",
    "sha": "31a7ed5e10a090aeb48f3efd50b515802c7fc035",
    "size": 8400126,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00202L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00202L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/31a7ed5e10a090aeb48f3efd50b515802c7fc035",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00202L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00202L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/31a7ed5e10a090aeb48f3efd50b515802c7fc035",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00202L.jpg"
    }
  },
  {
    "name": "DSC00203L.jpg",
    "path": "Groups/DSC00203L.jpg",
    "sha": "f37e8f3bed8c727c4e6681444bd0814272150842",
    "size": 7897021,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00203L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00203L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f37e8f3bed8c727c4e6681444bd0814272150842",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00203L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00203L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f37e8f3bed8c727c4e6681444bd0814272150842",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00203L.jpg"
    }
  },
  {
    "name": "DSC00218.jpg",
    "path": "Groups/DSC00218.jpg",
    "sha": "6583acb170b2b1a7309da9edc3e416b321f8e756",
    "size": 7240342,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00218.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00218.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6583acb170b2b1a7309da9edc3e416b321f8e756",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00218.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00218.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6583acb170b2b1a7309da9edc3e416b321f8e756",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00218.jpg"
    }
  },
  {
    "name": "DSC00219.jpg",
    "path": "Groups/DSC00219.jpg",
    "sha": "0f44ee959f76b0cc7f737e089663ed731ef32b85",
    "size": 10736752,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00219.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00219.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0f44ee959f76b0cc7f737e089663ed731ef32b85",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00219.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00219.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0f44ee959f76b0cc7f737e089663ed731ef32b85",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00219.jpg"
    }
  },
  {
    "name": "DSC00220.jpg",
    "path": "Groups/DSC00220.jpg",
    "sha": "206acfc2f794b71d527399f5f6877ff1742717bd",
    "size": 9679968,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00220.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00220.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/206acfc2f794b71d527399f5f6877ff1742717bd",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00220.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00220.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/206acfc2f794b71d527399f5f6877ff1742717bd",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00220.jpg"
    }
  },
  {
    "name": "DSC00224.jpg",
    "path": "Groups/DSC00224.jpg",
    "sha": "f78d0fbcdafa910a5f820eb39b13fb9df004b639",
    "size": 10476871,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00224.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00224.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f78d0fbcdafa910a5f820eb39b13fb9df004b639",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00224.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00224.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f78d0fbcdafa910a5f820eb39b13fb9df004b639",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00224.jpg"
    }
  },
  {
    "name": "DSC00225.jpg",
    "path": "Groups/DSC00225.jpg",
    "sha": "3ab07938a4b80e76e5ac75c68c58aa6f9892d72d",
    "size": 8204351,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00225.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00225.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3ab07938a4b80e76e5ac75c68c58aa6f9892d72d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00225.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00225.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3ab07938a4b80e76e5ac75c68c58aa6f9892d72d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00225.jpg"
    }
  },
  {
    "name": "DSC00229.jpg",
    "path": "Groups/DSC00229.jpg",
    "sha": "10635981da0be932e568c52232cef5c2b1c77153",
    "size": 6504991,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00229.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00229.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/10635981da0be932e568c52232cef5c2b1c77153",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00229.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00229.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/10635981da0be932e568c52232cef5c2b1c77153",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00229.jpg"
    }
  },
  {
    "name": "DSC00230.jpg",
    "path": "Groups/DSC00230.jpg",
    "sha": "23ef1f44bef6b60a698bcb0c26a058d436000744",
    "size": 6480511,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00230.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00230.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/23ef1f44bef6b60a698bcb0c26a058d436000744",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00230.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00230.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/23ef1f44bef6b60a698bcb0c26a058d436000744",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00230.jpg"
    }
  },
  {
    "name": "DSC00232.jpg",
    "path": "Groups/DSC00232.jpg",
    "sha": "6e3ff2e3ce06053427ff8eb70cad27ef98f11d5d",
    "size": 7342259,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00232.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00232.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6e3ff2e3ce06053427ff8eb70cad27ef98f11d5d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00232.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00232.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6e3ff2e3ce06053427ff8eb70cad27ef98f11d5d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00232.jpg"
    }
  },
  {
    "name": "DSC00234L.jpg",
    "path": "Groups/DSC00234L.jpg",
    "sha": "c789280330471819a424ff16912d4369ce147648",
    "size": 7952280,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00234L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00234L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c789280330471819a424ff16912d4369ce147648",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00234L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00234L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c789280330471819a424ff16912d4369ce147648",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00234L.jpg"
    }
  },
  {
    "name": "DSC00240.jpg",
    "path": "Groups/DSC00240.jpg",
    "sha": "ccc714513cb7a5781458e5aa2c573b29d46fb9c2",
    "size": 6901177,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00240.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00240.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ccc714513cb7a5781458e5aa2c573b29d46fb9c2",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00240.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00240.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ccc714513cb7a5781458e5aa2c573b29d46fb9c2",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00240.jpg"
    }
  },
  {
    "name": "DSC00247.jpg",
    "path": "Groups/DSC00247.jpg",
    "sha": "25ae21cc2b08df27f742ca490f698115073f1212",
    "size": 6800756,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00247.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00247.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/25ae21cc2b08df27f742ca490f698115073f1212",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00247.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00247.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/25ae21cc2b08df27f742ca490f698115073f1212",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00247.jpg"
    }
  },
  {
    "name": "DSC00249.jpg",
    "path": "Groups/DSC00249.jpg",
    "sha": "ca2b9bbc4b4d07db709e6c039652417adf4ea81b",
    "size": 6835687,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00249.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00249.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ca2b9bbc4b4d07db709e6c039652417adf4ea81b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00249.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00249.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ca2b9bbc4b4d07db709e6c039652417adf4ea81b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00249.jpg"
    }
  },
  {
    "name": "DSC00257.jpg",
    "path": "Groups/DSC00257.jpg",
    "sha": "7ca7f9d2aaee31827dfee9621926c98ca44dc13b",
    "size": 6848120,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00257.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00257.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7ca7f9d2aaee31827dfee9621926c98ca44dc13b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00257.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00257.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7ca7f9d2aaee31827dfee9621926c98ca44dc13b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00257.jpg"
    }
  },
  {
    "name": "DSC00259.jpg",
    "path": "Groups/DSC00259.jpg",
    "sha": "27e42688a7610ae9c315dec0f9f9496d05da07b9",
    "size": 5563772,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00259.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00259.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/27e42688a7610ae9c315dec0f9f9496d05da07b9",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00259.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00259.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/27e42688a7610ae9c315dec0f9f9496d05da07b9",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00259.jpg"
    }
  },
  {
    "name": "DSC00260.jpg",
    "path": "Groups/DSC00260.jpg",
    "sha": "5a50b4785aaacb66b8b3e239dfbb6936255111f6",
    "size": 6783259,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00260.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00260.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5a50b4785aaacb66b8b3e239dfbb6936255111f6",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00260.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00260.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5a50b4785aaacb66b8b3e239dfbb6936255111f6",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00260.jpg"
    }
  },
  {
    "name": "DSC00262.jpg",
    "path": "Groups/DSC00262.jpg",
    "sha": "98dc8c372938e85497e4bc90e432e622a8ad79af",
    "size": 7362297,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00262.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00262.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/98dc8c372938e85497e4bc90e432e622a8ad79af",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00262.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00262.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/98dc8c372938e85497e4bc90e432e622a8ad79af",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00262.jpg"
    }
  },
  {
    "name": "DSC00278.jpg",
    "path": "Groups/DSC00278.jpg",
    "sha": "1ecd56191a4139582022e4ada87ff18a399e6959",
    "size": 6995005,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00278.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00278.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1ecd56191a4139582022e4ada87ff18a399e6959",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00278.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00278.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1ecd56191a4139582022e4ada87ff18a399e6959",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00278.jpg"
    }
  },
  {
    "name": "DSC00283.jpg",
    "path": "Groups/DSC00283.jpg",
    "sha": "2548c30e6a4d243c2352eefa1567cc39402b21ce",
    "size": 6464854,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00283.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00283.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2548c30e6a4d243c2352eefa1567cc39402b21ce",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00283.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00283.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2548c30e6a4d243c2352eefa1567cc39402b21ce",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00283.jpg"
    }
  },
  {
    "name": "DSC00289.jpg",
    "path": "Groups/DSC00289.jpg",
    "sha": "bef7e1ac28b84d1cc5cd81cca48940f0e01f1b42",
    "size": 5020908,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00289.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00289.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bef7e1ac28b84d1cc5cd81cca48940f0e01f1b42",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00289.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00289.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bef7e1ac28b84d1cc5cd81cca48940f0e01f1b42",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00289.jpg"
    }
  },
  {
    "name": "DSC00296.jpg",
    "path": "Groups/DSC00296.jpg",
    "sha": "42b8d9a6053fb9e85a64024fc5db40694780ca2c",
    "size": 5537445,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00296.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00296.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/42b8d9a6053fb9e85a64024fc5db40694780ca2c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00296.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00296.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/42b8d9a6053fb9e85a64024fc5db40694780ca2c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00296.jpg"
    }
  },
  {
    "name": "DSC00298.jpg",
    "path": "Groups/DSC00298.jpg",
    "sha": "368f3b43fe7fc2280c6fcccaaff29349149c3764",
    "size": 5349050,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00298.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00298.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/368f3b43fe7fc2280c6fcccaaff29349149c3764",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00298.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00298.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/368f3b43fe7fc2280c6fcccaaff29349149c3764",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00298.jpg"
    }
  },
  {
    "name": "DSC00300.jpg",
    "path": "Groups/DSC00300.jpg",
    "sha": "b9e1d12f94fb8120c2918649ab023d4be491b65d",
    "size": 5456470,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00300.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00300.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b9e1d12f94fb8120c2918649ab023d4be491b65d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00300.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00300.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b9e1d12f94fb8120c2918649ab023d4be491b65d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00300.jpg"
    }
  },
  {
    "name": "DSC00307.jpg",
    "path": "Groups/DSC00307.jpg",
    "sha": "86e934694c0412cb92d69f2eeefa22f1284090c3",
    "size": 5978420,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00307.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00307.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/86e934694c0412cb92d69f2eeefa22f1284090c3",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00307.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00307.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/86e934694c0412cb92d69f2eeefa22f1284090c3",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00307.jpg"
    }
  },
  {
    "name": "DSC00308.jpg",
    "path": "Groups/DSC00308.jpg",
    "sha": "5dec2eb6614073cf2b23a58fd4f7cbce94df540b",
    "size": 6618452,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00308.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00308.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5dec2eb6614073cf2b23a58fd4f7cbce94df540b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00308.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00308.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5dec2eb6614073cf2b23a58fd4f7cbce94df540b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00308.jpg"
    }
  },
  {
    "name": "DSC00310.jpg",
    "path": "Groups/DSC00310.jpg",
    "sha": "d4412e01f63a100a9aa6d1ed6a2c6f6c7a0c4743",
    "size": 6855036,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00310.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00310.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d4412e01f63a100a9aa6d1ed6a2c6f6c7a0c4743",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00310.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00310.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d4412e01f63a100a9aa6d1ed6a2c6f6c7a0c4743",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00310.jpg"
    }
  },
  {
    "name": "DSC00311.jpg",
    "path": "Groups/DSC00311.jpg",
    "sha": "8d6b598b91d1a2b5b3d0a94e851217c81c72b651",
    "size": 6339467,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00311.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00311.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8d6b598b91d1a2b5b3d0a94e851217c81c72b651",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00311.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00311.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8d6b598b91d1a2b5b3d0a94e851217c81c72b651",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00311.jpg"
    }
  },
  {
    "name": "DSC00317.jpg",
    "path": "Groups/DSC00317.jpg",
    "sha": "4e188995db1e2137aa14140a6d3f975b6f7f8720",
    "size": 4869235,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00317.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00317.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4e188995db1e2137aa14140a6d3f975b6f7f8720",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00317.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00317.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4e188995db1e2137aa14140a6d3f975b6f7f8720",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00317.jpg"
    }
  },
  {
    "name": "DSC00337L.jpg",
    "path": "Groups/DSC00337L.jpg",
    "sha": "eec164db6842a007448ecdb534e0bf0dea1dc5b6",
    "size": 4439556,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00337L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00337L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/eec164db6842a007448ecdb534e0bf0dea1dc5b6",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00337L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00337L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/eec164db6842a007448ecdb534e0bf0dea1dc5b6",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00337L.jpg"
    }
  },
  {
    "name": "DSC00345L.jpg",
    "path": "Groups/DSC00345L.jpg",
    "sha": "6f950c9da9891e6af9c35b5a15e727bced38141f",
    "size": 6734755,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00345L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00345L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6f950c9da9891e6af9c35b5a15e727bced38141f",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00345L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00345L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6f950c9da9891e6af9c35b5a15e727bced38141f",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00345L.jpg"
    }
  },
  {
    "name": "DSC00349.jpg",
    "path": "Groups/DSC00349.jpg",
    "sha": "acfb24c29dfa690295a435156e62863704180e3a",
    "size": 6088937,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00349.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00349.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/acfb24c29dfa690295a435156e62863704180e3a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00349.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00349.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/acfb24c29dfa690295a435156e62863704180e3a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00349.jpg"
    }
  },
  {
    "name": "DSC00369L.jpg",
    "path": "Groups/DSC00369L.jpg",
    "sha": "c03cd10a3561f78ac37df1cca1c724d7997aaa22",
    "size": 6989275,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00369L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00369L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c03cd10a3561f78ac37df1cca1c724d7997aaa22",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00369L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00369L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c03cd10a3561f78ac37df1cca1c724d7997aaa22",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00369L.jpg"
    }
  },
  {
    "name": "DSC00371L.jpg",
    "path": "Groups/DSC00371L.jpg",
    "sha": "670944572de7ec3058ebb737466f840f36b9382e",
    "size": 6932574,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00371L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00371L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/670944572de7ec3058ebb737466f840f36b9382e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00371L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00371L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/670944572de7ec3058ebb737466f840f36b9382e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00371L.jpg"
    }
  },
  {
    "name": "DSC00375.jpg",
    "path": "Groups/DSC00375.jpg",
    "sha": "9e3bdcfdf6d6f5bffe3e45732307ee851fc78e7c",
    "size": 7690637,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00375.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00375.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9e3bdcfdf6d6f5bffe3e45732307ee851fc78e7c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00375.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00375.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9e3bdcfdf6d6f5bffe3e45732307ee851fc78e7c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00375.jpg"
    }
  },
  {
    "name": "DSC00376L.jpg",
    "path": "Groups/DSC00376L.jpg",
    "sha": "9fb4a578671894a6703cd0746bf7c1d93051917a",
    "size": 5338221,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00376L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00376L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9fb4a578671894a6703cd0746bf7c1d93051917a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00376L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00376L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9fb4a578671894a6703cd0746bf7c1d93051917a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00376L.jpg"
    }
  },
  {
    "name": "DSC00379L.jpg",
    "path": "Groups/DSC00379L.jpg",
    "sha": "e4557e832180b08e998f0fdeeae407c7754f075a",
    "size": 6478953,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00379L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00379L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e4557e832180b08e998f0fdeeae407c7754f075a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00379L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00379L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e4557e832180b08e998f0fdeeae407c7754f075a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00379L.jpg"
    }
  },
  {
    "name": "DSC00382L.jpg",
    "path": "Groups/DSC00382L.jpg",
    "sha": "e28b4f02e0f48ee56163c68abba84e44a6a43915",
    "size": 5591172,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00382L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00382L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e28b4f02e0f48ee56163c68abba84e44a6a43915",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00382L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00382L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e28b4f02e0f48ee56163c68abba84e44a6a43915",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00382L.jpg"
    }
  },
  {
    "name": "DSC00384L.jpg",
    "path": "Groups/DSC00384L.jpg",
    "sha": "be960846f461203a966d3269f3115c6be34daaca",
    "size": 5158067,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00384L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00384L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/be960846f461203a966d3269f3115c6be34daaca",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00384L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00384L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/be960846f461203a966d3269f3115c6be34daaca",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00384L.jpg"
    }
  },
  {
    "name": "DSC00392L.jpg",
    "path": "Groups/DSC00392L.jpg",
    "sha": "1f03fad3677e98961cbfb50b692861aa1a1d3577",
    "size": 5269851,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00392L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00392L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1f03fad3677e98961cbfb50b692861aa1a1d3577",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00392L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00392L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1f03fad3677e98961cbfb50b692861aa1a1d3577",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00392L.jpg"
    }
  },
  {
    "name": "DSC00522.jpg",
    "path": "Groups/DSC00522.jpg",
    "sha": "385c070d807aae57c3964816274573306f6af104",
    "size": 6192067,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00522.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00522.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/385c070d807aae57c3964816274573306f6af104",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00522.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00522.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/385c070d807aae57c3964816274573306f6af104",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00522.jpg"
    }
  },
  {
    "name": "DSC00525.jpg",
    "path": "Groups/DSC00525.jpg",
    "sha": "3feeb021c4b8f7c3b6973a14ff8c5d2411a1e5a4",
    "size": 6444652,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00525.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00525.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3feeb021c4b8f7c3b6973a14ff8c5d2411a1e5a4",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00525.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00525.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3feeb021c4b8f7c3b6973a14ff8c5d2411a1e5a4",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00525.jpg"
    }
  },
  {
    "name": "DSC00529L.jpg",
    "path": "Groups/DSC00529L.jpg",
    "sha": "bc2075d0664caed2a26cd4182301638991d070dc",
    "size": 6789074,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00529L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00529L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bc2075d0664caed2a26cd4182301638991d070dc",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00529L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00529L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bc2075d0664caed2a26cd4182301638991d070dc",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00529L.jpg"
    }
  },
  {
    "name": "DSC00537L.jpg",
    "path": "Groups/DSC00537L.jpg",
    "sha": "bd8c5cb0bbf2677655ded77f306cdd9c2798829e",
    "size": 6171568,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00537L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00537L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bd8c5cb0bbf2677655ded77f306cdd9c2798829e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00537L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00537L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bd8c5cb0bbf2677655ded77f306cdd9c2798829e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00537L.jpg"
    }
  },
  {
    "name": "DSC00540L.jpg",
    "path": "Groups/DSC00540L.jpg",
    "sha": "7c075d57a12f420e36c45dd2fa25d5d096e983d2",
    "size": 6516430,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00540L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00540L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7c075d57a12f420e36c45dd2fa25d5d096e983d2",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00540L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00540L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7c075d57a12f420e36c45dd2fa25d5d096e983d2",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00540L.jpg"
    }
  },
  {
    "name": "DSC00549L.jpg",
    "path": "Groups/DSC00549L.jpg",
    "sha": "d515767db12fffc055fb9eab6e387473556e3fca",
    "size": 7204930,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00549L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00549L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d515767db12fffc055fb9eab6e387473556e3fca",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00549L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00549L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d515767db12fffc055fb9eab6e387473556e3fca",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00549L.jpg"
    }
  },
  {
    "name": "DSC00584.jpg",
    "path": "Groups/DSC00584.jpg",
    "sha": "9970937ae4f506683ac4ecd4b67a9e05014c7466",
    "size": 5774312,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00584.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00584.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9970937ae4f506683ac4ecd4b67a9e05014c7466",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00584.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00584.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9970937ae4f506683ac4ecd4b67a9e05014c7466",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00584.jpg"
    }
  },
  {
    "name": "DSC00589L.jpg",
    "path": "Groups/DSC00589L.jpg",
    "sha": "468b2fb4ae4a5cc08cb1e9c0673b965f612e4814",
    "size": 7202630,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00589L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00589L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/468b2fb4ae4a5cc08cb1e9c0673b965f612e4814",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00589L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00589L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/468b2fb4ae4a5cc08cb1e9c0673b965f612e4814",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00589L.jpg"
    }
  },
  {
    "name": "DSC00591.jpg",
    "path": "Groups/DSC00591.jpg",
    "sha": "bce95bcaad9742ba27ff77c0667c53cc817d7df6",
    "size": 7619823,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00591.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00591.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bce95bcaad9742ba27ff77c0667c53cc817d7df6",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00591.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00591.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bce95bcaad9742ba27ff77c0667c53cc817d7df6",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00591.jpg"
    }
  },
  {
    "name": "DSC00606L.jpg",
    "path": "Groups/DSC00606L.jpg",
    "sha": "45e27444bee3faeed76ef18cefa6daf98662c9c6",
    "size": 6564111,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00606L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00606L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/45e27444bee3faeed76ef18cefa6daf98662c9c6",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00606L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00606L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/45e27444bee3faeed76ef18cefa6daf98662c9c6",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00606L.jpg"
    }
  },
  {
    "name": "DSC00618.jpg",
    "path": "Groups/DSC00618.jpg",
    "sha": "c8f5dedbf4cc0670f28b434184ec7a6ea80975c3",
    "size": 5703065,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00618.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00618.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c8f5dedbf4cc0670f28b434184ec7a6ea80975c3",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00618.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00618.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c8f5dedbf4cc0670f28b434184ec7a6ea80975c3",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00618.jpg"
    }
  },
  {
    "name": "DSC00619.jpg",
    "path": "Groups/DSC00619.jpg",
    "sha": "8fa008d23cdd5c9686d8b0acf5f9f02a5163860e",
    "size": 5725881,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00619.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00619.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8fa008d23cdd5c9686d8b0acf5f9f02a5163860e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00619.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00619.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8fa008d23cdd5c9686d8b0acf5f9f02a5163860e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00619.jpg"
    }
  },
  {
    "name": "DSC00632.jpg",
    "path": "Groups/DSC00632.jpg",
    "sha": "1a2e1ad214229268373c9383406eafb94f44bcd7",
    "size": 5361369,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00632.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00632.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1a2e1ad214229268373c9383406eafb94f44bcd7",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00632.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00632.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1a2e1ad214229268373c9383406eafb94f44bcd7",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00632.jpg"
    }
  },
  {
    "name": "DSC00640.jpg",
    "path": "Groups/DSC00640.jpg",
    "sha": "e95f9a0e27c123ded13df044cdf355d6da104e4d",
    "size": 5404083,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00640.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00640.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e95f9a0e27c123ded13df044cdf355d6da104e4d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00640.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00640.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e95f9a0e27c123ded13df044cdf355d6da104e4d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00640.jpg"
    }
  },
  {
    "name": "DSC00648.jpg",
    "path": "Groups/DSC00648.jpg",
    "sha": "ba2a39b0e1a61c259e09e1ff6fa48c5626d3acf9",
    "size": 5860091,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00648.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00648.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ba2a39b0e1a61c259e09e1ff6fa48c5626d3acf9",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00648.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00648.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ba2a39b0e1a61c259e09e1ff6fa48c5626d3acf9",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00648.jpg"
    }
  },
  {
    "name": "DSC00652.jpg",
    "path": "Groups/DSC00652.jpg",
    "sha": "e4031dec94133e347c6c59211430cc2fb3c81aea",
    "size": 6848047,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00652.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00652.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e4031dec94133e347c6c59211430cc2fb3c81aea",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00652.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00652.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e4031dec94133e347c6c59211430cc2fb3c81aea",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00652.jpg"
    }
  },
  {
    "name": "DSC00655.jpg",
    "path": "Groups/DSC00655.jpg",
    "sha": "3e7fc7a1ddc8f5467b6f37e3c03fde6ec770721e",
    "size": 5844351,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00655.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00655.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3e7fc7a1ddc8f5467b6f37e3c03fde6ec770721e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00655.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00655.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3e7fc7a1ddc8f5467b6f37e3c03fde6ec770721e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00655.jpg"
    }
  },
  {
    "name": "DSC00724L.jpg",
    "path": "Groups/DSC00724L.jpg",
    "sha": "5c33a1c97e7c8a72a8818567a41643e1ef04ab40",
    "size": 7260720,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00724L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00724L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5c33a1c97e7c8a72a8818567a41643e1ef04ab40",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00724L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00724L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5c33a1c97e7c8a72a8818567a41643e1ef04ab40",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00724L.jpg"
    }
  },
  {
    "name": "DSC00731L.jpg",
    "path": "Groups/DSC00731L.jpg",
    "sha": "5a88c3eee2f1b5e743c906770d2c6a6efe1a52e2",
    "size": 7123193,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00731L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00731L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5a88c3eee2f1b5e743c906770d2c6a6efe1a52e2",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00731L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00731L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5a88c3eee2f1b5e743c906770d2c6a6efe1a52e2",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00731L.jpg"
    }
  },
  {
    "name": "DSC00751L.jpg",
    "path": "Groups/DSC00751L.jpg",
    "sha": "6409eeb809a6e8dbc4d6c07c2e5a08bb37a0afe5",
    "size": 7006477,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00751L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00751L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6409eeb809a6e8dbc4d6c07c2e5a08bb37a0afe5",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00751L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00751L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6409eeb809a6e8dbc4d6c07c2e5a08bb37a0afe5",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00751L.jpg"
    }
  },
  {
    "name": "DSC00782.jpg",
    "path": "Groups/DSC00782.jpg",
    "sha": "098ae5c4acd72d3cab219bf2afdb4408d3cb5a14",
    "size": 7178333,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00782.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00782.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/098ae5c4acd72d3cab219bf2afdb4408d3cb5a14",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00782.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00782.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/098ae5c4acd72d3cab219bf2afdb4408d3cb5a14",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00782.jpg"
    }
  },
  {
    "name": "DSC00797L.jpg",
    "path": "Groups/DSC00797L.jpg",
    "sha": "e8430ed2f0e9de10a12f34a4cef34a953d68308d",
    "size": 3913825,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00797L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00797L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e8430ed2f0e9de10a12f34a4cef34a953d68308d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00797L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00797L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e8430ed2f0e9de10a12f34a4cef34a953d68308d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00797L.jpg"
    }
  },
  {
    "name": "DSC00801.jpg",
    "path": "Groups/DSC00801.jpg",
    "sha": "fd1f931935463a8d3b018d1baa49e79efbde0cc0",
    "size": 3418332,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00801.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00801.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/fd1f931935463a8d3b018d1baa49e79efbde0cc0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00801.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00801.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/fd1f931935463a8d3b018d1baa49e79efbde0cc0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00801.jpg"
    }
  },
  {
    "name": "DSC00803.jpg",
    "path": "Groups/DSC00803.jpg",
    "sha": "21488c6ee5885656ba2d5ac3d51246bb23fe4fef",
    "size": 3328338,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00803.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00803.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/21488c6ee5885656ba2d5ac3d51246bb23fe4fef",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00803.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00803.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/21488c6ee5885656ba2d5ac3d51246bb23fe4fef",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00803.jpg"
    }
  },
  {
    "name": "DSC00808.jpg",
    "path": "Groups/DSC00808.jpg",
    "sha": "0afabda6ba95f14597d81b106c26ff128c79884d",
    "size": 3396779,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00808.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00808.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0afabda6ba95f14597d81b106c26ff128c79884d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00808.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00808.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0afabda6ba95f14597d81b106c26ff128c79884d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00808.jpg"
    }
  },
  {
    "name": "DSC00815.jpg",
    "path": "Groups/DSC00815.jpg",
    "sha": "af544c7c832ad24ceffa365708c16dc940d19b97",
    "size": 3702288,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00815.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00815.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/af544c7c832ad24ceffa365708c16dc940d19b97",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC00815.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC00815.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/af544c7c832ad24ceffa365708c16dc940d19b97",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC00815.jpg"
    }
  },
  {
    "name": "DSC04643L.jpg",
    "path": "Groups/DSC04643L.jpg",
    "sha": "18abaeab0eeb112b0bf0dd6eba54ec36e387a36c",
    "size": 5617737,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04643L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04643L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/18abaeab0eeb112b0bf0dd6eba54ec36e387a36c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04643L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04643L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/18abaeab0eeb112b0bf0dd6eba54ec36e387a36c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04643L.jpg"
    }
  },
  {
    "name": "DSC04650L.jpg",
    "path": "Groups/DSC04650L.jpg",
    "sha": "17abeb7063fd0467e70567afa982f96368521c56",
    "size": 6995105,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04650L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04650L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/17abeb7063fd0467e70567afa982f96368521c56",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04650L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04650L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/17abeb7063fd0467e70567afa982f96368521c56",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04650L.jpg"
    }
  },
  {
    "name": "DSC04653.jpg",
    "path": "Groups/DSC04653.jpg",
    "sha": "6480d1b8715ab34ffe607243a4929f6e51b8d956",
    "size": 6124330,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04653.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04653.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6480d1b8715ab34ffe607243a4929f6e51b8d956",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04653.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04653.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6480d1b8715ab34ffe607243a4929f6e51b8d956",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04653.jpg"
    }
  },
  {
    "name": "DSC04654.jpg",
    "path": "Groups/DSC04654.jpg",
    "sha": "7a74a1ccf88586d45789fc9f075325475a203538",
    "size": 6475778,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04654.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04654.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7a74a1ccf88586d45789fc9f075325475a203538",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04654.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04654.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7a74a1ccf88586d45789fc9f075325475a203538",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04654.jpg"
    }
  },
  {
    "name": "DSC04655.jpg",
    "path": "Groups/DSC04655.jpg",
    "sha": "4835dce147755933c4f50ccb50435c573980b77a",
    "size": 6971104,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04655.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04655.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4835dce147755933c4f50ccb50435c573980b77a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04655.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04655.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4835dce147755933c4f50ccb50435c573980b77a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04655.jpg"
    }
  },
  {
    "name": "DSC04658.jpg",
    "path": "Groups/DSC04658.jpg",
    "sha": "3d2761366cf6eca425efbaf56790b88128954792",
    "size": 5846905,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04658.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04658.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3d2761366cf6eca425efbaf56790b88128954792",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04658.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04658.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3d2761366cf6eca425efbaf56790b88128954792",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04658.jpg"
    }
  },
  {
    "name": "DSC04661.jpg",
    "path": "Groups/DSC04661.jpg",
    "sha": "13f3a7cbb3bf10b5d33a8eb7d23550bf6a796e20",
    "size": 6531693,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04661.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04661.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/13f3a7cbb3bf10b5d33a8eb7d23550bf6a796e20",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04661.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04661.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/13f3a7cbb3bf10b5d33a8eb7d23550bf6a796e20",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04661.jpg"
    }
  },
  {
    "name": "DSC04663.jpg",
    "path": "Groups/DSC04663.jpg",
    "sha": "d70979ed18352a9f6e88bdde84b0917d84b1593d",
    "size": 5220340,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04663.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04663.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d70979ed18352a9f6e88bdde84b0917d84b1593d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04663.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04663.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d70979ed18352a9f6e88bdde84b0917d84b1593d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04663.jpg"
    }
  },
  {
    "name": "DSC04665L.jpg",
    "path": "Groups/DSC04665L.jpg",
    "sha": "e466b396d014e8644a4781acb524045fb5635895",
    "size": 6558825,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04665L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04665L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e466b396d014e8644a4781acb524045fb5635895",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04665L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04665L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e466b396d014e8644a4781acb524045fb5635895",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04665L.jpg"
    }
  },
  {
    "name": "DSC04667L.jpg",
    "path": "Groups/DSC04667L.jpg",
    "sha": "39bebd11db2a4b7f29af89c8c8ae8d3c7053e517",
    "size": 8334401,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04667L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04667L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/39bebd11db2a4b7f29af89c8c8ae8d3c7053e517",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04667L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04667L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/39bebd11db2a4b7f29af89c8c8ae8d3c7053e517",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04667L.jpg"
    }
  },
  {
    "name": "DSC04674L.jpg",
    "path": "Groups/DSC04674L.jpg",
    "sha": "eebd543253756a15e9c819a212fe62e0fc44abe1",
    "size": 8147573,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04674L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04674L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/eebd543253756a15e9c819a212fe62e0fc44abe1",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04674L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04674L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/eebd543253756a15e9c819a212fe62e0fc44abe1",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04674L.jpg"
    }
  },
  {
    "name": "DSC04680L.jpg",
    "path": "Groups/DSC04680L.jpg",
    "sha": "72bf341405d16fd959fbc031c1111299028d29f6",
    "size": 6751587,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04680L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04680L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/72bf341405d16fd959fbc031c1111299028d29f6",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04680L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04680L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/72bf341405d16fd959fbc031c1111299028d29f6",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04680L.jpg"
    }
  },
  {
    "name": "DSC04690L.jpg",
    "path": "Groups/DSC04690L.jpg",
    "sha": "e08130f771224c6c033eb90b34d6879e6c64535d",
    "size": 4673537,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04690L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04690L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e08130f771224c6c033eb90b34d6879e6c64535d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04690L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04690L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e08130f771224c6c033eb90b34d6879e6c64535d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04690L.jpg"
    }
  },
  {
    "name": "DSC04708L.jpg",
    "path": "Groups/DSC04708L.jpg",
    "sha": "bdaa985c227601185d9b63fd57a98c93be82a94f",
    "size": 4792503,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04708L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04708L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bdaa985c227601185d9b63fd57a98c93be82a94f",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04708L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04708L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bdaa985c227601185d9b63fd57a98c93be82a94f",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04708L.jpg"
    }
  },
  {
    "name": "DSC04726L.jpg",
    "path": "Groups/DSC04726L.jpg",
    "sha": "080d5116c819b598fedb945ef39c814187f888e0",
    "size": 4622800,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04726L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04726L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/080d5116c819b598fedb945ef39c814187f888e0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04726L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04726L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/080d5116c819b598fedb945ef39c814187f888e0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04726L.jpg"
    }
  },
  {
    "name": "DSC04730L.jpg",
    "path": "Groups/DSC04730L.jpg",
    "sha": "9bd26d9eeb4e96b98fe1a09b3ffcf5c7af524d6e",
    "size": 4658619,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04730L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04730L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9bd26d9eeb4e96b98fe1a09b3ffcf5c7af524d6e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04730L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04730L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9bd26d9eeb4e96b98fe1a09b3ffcf5c7af524d6e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04730L.jpg"
    }
  },
  {
    "name": "DSC04747L.jpg",
    "path": "Groups/DSC04747L.jpg",
    "sha": "4de0bb787e96def865770d3818c1bae464b7d828",
    "size": 5002403,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04747L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04747L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4de0bb787e96def865770d3818c1bae464b7d828",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04747L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04747L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4de0bb787e96def865770d3818c1bae464b7d828",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04747L.jpg"
    }
  },
  {
    "name": "DSC04761L.jpg",
    "path": "Groups/DSC04761L.jpg",
    "sha": "9ab44461f9d9775864bc0e56f17205c893b29723",
    "size": 4894823,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04761L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04761L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9ab44461f9d9775864bc0e56f17205c893b29723",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04761L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04761L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9ab44461f9d9775864bc0e56f17205c893b29723",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04761L.jpg"
    }
  },
  {
    "name": "DSC04762L.jpg",
    "path": "Groups/DSC04762L.jpg",
    "sha": "a7bfd74bca476cda849c8691f1110bdb27f5eeb8",
    "size": 6361095,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04762L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04762L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a7bfd74bca476cda849c8691f1110bdb27f5eeb8",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04762L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04762L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a7bfd74bca476cda849c8691f1110bdb27f5eeb8",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04762L.jpg"
    }
  },
  {
    "name": "DSC04776L.jpg",
    "path": "Groups/DSC04776L.jpg",
    "sha": "2e4e91f2279b826dcda7c8ea469ff9b255082cdd",
    "size": 6340241,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04776L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04776L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2e4e91f2279b826dcda7c8ea469ff9b255082cdd",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04776L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04776L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2e4e91f2279b826dcda7c8ea469ff9b255082cdd",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04776L.jpg"
    }
  },
  {
    "name": "DSC04780L.jpg",
    "path": "Groups/DSC04780L.jpg",
    "sha": "1f81e1465e090968c468d4f8a23d739f616f342e",
    "size": 6237718,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04780L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04780L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1f81e1465e090968c468d4f8a23d739f616f342e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04780L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04780L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1f81e1465e090968c468d4f8a23d739f616f342e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04780L.jpg"
    }
  },
  {
    "name": "DSC04783L.jpg",
    "path": "Groups/DSC04783L.jpg",
    "sha": "4987ea428595c1f849961f8f4cdbd989525baab5",
    "size": 6068074,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04783L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04783L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4987ea428595c1f849961f8f4cdbd989525baab5",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04783L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04783L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4987ea428595c1f849961f8f4cdbd989525baab5",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04783L.jpg"
    }
  },
  {
    "name": "DSC04968L.jpg",
    "path": "Groups/DSC04968L.jpg",
    "sha": "f79f7f20fe3e2160cde0b62607a9c11773e5e5e2",
    "size": 6456831,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04968L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04968L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f79f7f20fe3e2160cde0b62607a9c11773e5e5e2",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Groups/DSC04968L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups/DSC04968L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f79f7f20fe3e2160cde0b62607a9c11773e5e5e2",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DSC04968L.jpg"
    }
  }
]
let sliderImageGroups2 = await formatData(sliderImageGroups)

export default  sliderImageGroups2

// let d = [
//   // export default [
//   {
//     title: "First Slide",
//     description: "This is the first slider Image of our carousel",
//     urls: First,
//     layout: "portrait",
//     name: "DSC000220.jpg",
//     name2: "DSC000220",
//   },
//   {
//     title: "Second Slide",
//     description: "This is the second slider Image of our carousel",
//     urls: Second,
//     layout: "portriat",
//     name: "DSC00317.jpg",
//     name2: "DSC00317",
//   },
//   {
//     title: "Third Slide",
//     description: "This is the second slider Image of our carousel",
//     urls: Third,
//     layout: "landscape",
//     name: "DSC00337.jpg",
//     name2: "DSC00337",
//   },
//   {
//     title: "Fourth Slide",
//     description: "This is the second slider Image of our carousel",
//     urls: Fourth,
//     layout: "portriat",
//     name: "DSC00364.jpg",
//     name2: "DSC00364",
//   },
//   {
//     title: "Fifth Slide",
//     description: "This is the Third slider Image of our carousel",
//     urls: Fifth,
//     layout: "landscape",
//     name: "DSC00537.jpg",
//     name2: "DSC00537",
//   },
//   {
//     title: "Sixth Slide",
//     description: "This is the Third slider Image of our carousel",
//     urls: Sixth,
//     layout: "portriat",
//     name: "DSC04655.jpg",
//     name2: "DSC04655",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00369.jpg"),
//     layout: "landscape",
//     name: "DSC00369.jpg",
//     name2: "DSC00369",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00382.jpg"),
//     layout: "landscape",
//     name: "DSC00382.jpg",
//     name2: "DSC00382",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00384.jpg"),
//     layout: "landscape",
//     name: "DSC00384.jpg",
//     name2: "DSC00384",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00392.jpg"),
//     layout: "landscape",
//     name: "DSC00392.jpg",
//     name2: "DSC00392",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00392.jpg"),
//     layout: "landscape",
//     name: "DSC00392.jpg",
//     name2: "DSC00392",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00522.jpg"),
//     layout: "portrait",
//     name: "DSC00522.jpg",
//     name2: "DSC00522",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00540.jpg"),
//     layout: "landscape",
//     name: "DSC00540.jpg",
//     name2: "DSC00540",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00618.jpg"),
//     layout: "portrait",
//     name: "DSC00618.jpg",
//     name2: "DSC00618",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00623.jpg"),
//     layout: "portrait",
//     name: "DSC00623.jpg",
//     name2: "DSC00623",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00700.jpg"),
//     layout: "landscape",
//     name: "DSC00700.jpg",
//     name2: "DSC00700",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00731.jpg"),
//     layout: "landscape",
//     name: "DSC00731.jpg",
//     name2: "DSC00731",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00751.jpg"),
//     layout: "landscape",
//     name: "DSC00751.jpg",
//     name2: "DSC00751",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00773.jpg"),
//     layout: "portrait",
//     name: "DSC00773.jpg",
//     name2: "DSC00773",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00781.jpg"),
//     layout: "portrait",
//     name: "DSC00781.jpg",
//     name2: "DSC00781",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00815.jpg"),
//     layout: "portrait",
//     name: "DSC00815.jpg",
//     name2: "DSC00815",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC00822.jpg"),
//     layout: "portrait",
//     name: "DSC00822.jpg",
//     name2: "DSC00822",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC04643.jpg"),
//     layout: "landscape",
//     name: "DSC04643.jpg",
//     name2: "DSC04643",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC04661.jpg"),
//     layout: "portrait",
//     name: "DSC04661.jpg",
//     name2: "DSC04661",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC04667.jpg"),
//     layout: "landscape",
//     name: "DSC04667.jpg",
//     name2: "DSC04667",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC04690.jpg"),
//     layout: "landscape",
//     name: "DSC04690.jpg",
//     name2: "DSC04690",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC04747.jpg"),
//     layout: "landscape",
//     name: "DSC04747.jpg",
//     name2: "DSC04747",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC04762.jpg"),
//     layout: "landscape",
//     name: "DSC04762.jpg",
//     name2: "DSC04762",
//   },
//   {
//     urls: require("../../assets/images/groups/new/DSC04968.jpg"),
//     layout: "landscape",
//     name: "DSC04968.jpg",
//     name2: "DSC04968",
//   },
//   // Remove this last one **** todo
//   {
//     urls: require("../../assets/images/groups/new/DSC04776.jpg"),
//     layout: "landscape",
//     name: "DSC04776.jpg",
//     name2: "DSC04776",
//   },
// ];
