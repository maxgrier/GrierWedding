// import Groups from "../../assets/images/groups/DSC00220.jpg";
import Groups from "../../assets/images/groups/DSC00632.jpg";
// import Portraits from "../../assets/images/Portraits/DSC00045.jpg";
import Portraits from "../../assets/images/Portraits/DSC00178.jpg";
// import Ceremony from "../../assets/images/ceremony/DSC00451.jpg";
import Ceremony from "../../assets/images/ceremony/DSC04915.jpg";
import Reception from "../../assets/images/Reception/DSC05221.jpg";

import Third from "../../assets/DSC00717.jpg";

// export const getFileNames = async (section) => {
//   try {
//     // https://api.github.com/repos/maxgrier/PhotoRepo/contents/groups
//     // const data = fetch("https://api.github.com/repos/maxgrier/PhotoRepo/groups/git/trees/main?recursive=1")
//     const data = await fetch(
//       `https://api.github.com/repos/maxgrier/PhotoRepo/contents/${section}`,
//       { headers: { Accept: "application/vnd.github+full" } }
//     );
//     const dataJson = await data.json();
//     let d = await formatData(dataJson);
//     return d;
//   } catch (error) {
//     console.log("error: ", error);
//   }
// };

// let formattedData = [];
// const formatData = async (data) => {
//   data.map((item) => {
//     let temp = {
//       title: "First Slide",
//       description: "This is the first slider Image of our carousel",
//       urls: item.html_url + "?raw=true",
//       layout:
//         item.name.substring(0, item.name.length - 4).slice(-1) === "L"
//           ? "landscape"
//           : "portrait",
//       name: item.name,
//       name2: item.name.substring(0, item.name.length - 4),
//     };
//     formattedData.push(temp);
//   });
//   return formattedData;
// };

// let sections = ['']

// let sliderImageCeremony = await getFileNames('Ceremony');
// let sliderImageGroups = await getFileNames('Groups');
// let sliderImagePortraits = await getFileNames('Portraits');


export default [
  {
    title: "Portraits",
    link: "/GrierWedding/Portraits",
    description: "This is the second slider Image of our carousel",
    urls: Portraits,
    layout: 'portriat',
    // name: "DSC00045.jpg",
    // name2: "DSC00045",
    name: "DSC00178.jpg",
    name2: "DSC00178",
    count: 140,
  },
  {
    title: "Groups",
    link: "/GrierWedding/Groups",
    description: "This is the first slider Image of our carousel",
    urls: Groups,
    layout: 'portriat',
    // name: "DSC00220.jpg",
    // name2: "DSC00220",
    name: "DSC00632.jpg",
    name2: "DSC00632",
    count: 94,
  },
  {
    title: "Ceremony",
    link: "/GrierWedding/Ceremony",
    description: "This is the second slider Image of our carousel",
    urls: Ceremony,
    layout: 'portriat',
    // name: "DSC00451.jpg",
    // name2: "DSC00451",
    name: "DSC04915.jpg",
    name2: "DSC04915",
    count: 77,
  },
  {
    title: "Reception",
    link: "/GrierWedding/Reception",
    description: "This is the second slider Image of our carousel",
    urls: Reception,
    layout: 'portriat',
    // name: "DSC00451.jpg",
    // name2: "DSC00451",
    name: "DSC05221.jpg",
    name2: "DSC05221",
    count: 182,
  },
  // {
  //   title: "Third Slide",
  //   description: "This is the Third slider Image of our carousel",
  //   urls: Third,
  //   name: "DSC00717.jpg",
  //   name2: "DSC00717",
  // }
  // {
  //   title: "Fourth Slide",
  //   description: "This is the Fourth slider Image of our carousel",
  //   urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg",
  // },
  // {
  //   title: "Fifth Slide",
  //   description: "This is the Fifth slider Image of our carousel",
  //   urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(147).jpg",
  // },
  // {
  //   title: "Sixth Slide",
  //   description: "This is the Sixth slider Image of our carousel",
  //   urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
  // },
  // {
  //   title: "Seventh Slide",
  //   description: "This is the Seventh slider Image of our carousel",
  //   urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(102).jpg",
  // },
];