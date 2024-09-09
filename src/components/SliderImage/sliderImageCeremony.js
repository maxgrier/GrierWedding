// import First from "../../assets/images/ceremony/DSC00451.jpg";
// import Second from "../../assets/images/ceremony/DSC00429.jpg";
// import Third from "../../assets/images/ceremony/DSC00396.jpg";
// import Third from "../../assets/DSC00717.jpg";

// let prefix = "https://github.com/maxgrier/WeddingPhotos/blob/main/src/assets/images/ceremony/new/"
// let postfix = "?raw=true"
// require("../../assets/images/ceremony/new/DSC04844.jpg"),



const getFileNames = async () => {
  try {
    const data = await fetch(
      "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony",
      { headers: { Accept: "application/vnd.github+full" } }
    );
    const dataJson = await data.json();
    let d = await formatData(dataJson);
    return d;
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
      layout:
        item.name.substring(0, item.name.length - 4).slice(-1) === "L"
          ? "landscape"
          : "portrait",
      name: item.name,
      // name2: item.name.substring(0, item.name.length - 4),
    };
    formattedData.push(temp);
  });
  console.log("formatted data ", formattedData);
  return formattedData;
};


// let sliderImageCeremony = await getFileNames();
// export default sliderImageCeremony;
// export default sliderImageCeremony.slice(0,50);


let prefix = "https://github.com/maxgrier/PhotoRepo/blob/main/ceremony/"
let postfix = "?raw=true"
// /PhotoRepo/tree/main/ceremony

let sliderImageCeremony = [
  {
    "name": "DSC00404.jpg",
    "path": "Ceremony/DSC00404.jpg",
    "sha": "32b2af2e4743c2b7108d13d859c97e350624a31d",
    "size": 6110605,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00404.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00404.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/32b2af2e4743c2b7108d13d859c97e350624a31d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00404.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00404.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/32b2af2e4743c2b7108d13d859c97e350624a31d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00404.jpg"
    }
  },
  {
    "name": "DSC00412.jpg",
    "path": "Ceremony/DSC00412.jpg",
    "sha": "b1c4d904715921c59547e3b55c6ab4550147ce72",
    "size": 6864390,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00412.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00412.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b1c4d904715921c59547e3b55c6ab4550147ce72",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00412.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00412.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b1c4d904715921c59547e3b55c6ab4550147ce72",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00412.jpg"
    }
  },
  {
    "name": "DSC00415.jpg",
    "path": "Ceremony/DSC00415.jpg",
    "sha": "0bb73cc361d513795b44ec7f7dcf0bd9cd7455d9",
    "size": 4967775,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00415.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00415.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0bb73cc361d513795b44ec7f7dcf0bd9cd7455d9",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00415.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00415.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0bb73cc361d513795b44ec7f7dcf0bd9cd7455d9",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00415.jpg"
    }
  },
  {
    "name": "DSC00422.jpg",
    "path": "Ceremony/DSC00422.jpg",
    "sha": "e647d3374ef4454f992f07702fb729a685a2e0fd",
    "size": 5104907,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00422.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00422.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e647d3374ef4454f992f07702fb729a685a2e0fd",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00422.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00422.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e647d3374ef4454f992f07702fb729a685a2e0fd",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00422.jpg"
    }
  },
  {
    "name": "DSC00426.jpg",
    "path": "Ceremony/DSC00426.jpg",
    "sha": "4a28861caf3b95c5fae6aa4dce0c3c892eedacc7",
    "size": 5774960,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00426.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00426.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4a28861caf3b95c5fae6aa4dce0c3c892eedacc7",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00426.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00426.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4a28861caf3b95c5fae6aa4dce0c3c892eedacc7",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00426.jpg"
    }
  },
  {
    "name": "DSC00429.jpg",
    "path": "Ceremony/DSC00429.jpg",
    "sha": "9c5790158398061282863cca18b6942108c0296f",
    "size": 7147241,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00429.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00429.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9c5790158398061282863cca18b6942108c0296f",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00429.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00429.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9c5790158398061282863cca18b6942108c0296f",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00429.jpg"
    }
  },
  {
    "name": "DSC00431.jpg",
    "path": "Ceremony/DSC00431.jpg",
    "sha": "c97ed5dc95235b9be24ceb9cd9da09026b7d39eb",
    "size": 6476672,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00431.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00431.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c97ed5dc95235b9be24ceb9cd9da09026b7d39eb",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00431.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00431.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c97ed5dc95235b9be24ceb9cd9da09026b7d39eb",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00431.jpg"
    }
  },
  {
    "name": "DSC00449.jpg",
    "path": "Ceremony/DSC00449.jpg",
    "sha": "5eeb8a1cc220804391a552daaa8ee85805317819",
    "size": 5320535,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00449.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00449.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5eeb8a1cc220804391a552daaa8ee85805317819",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00449.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00449.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5eeb8a1cc220804391a552daaa8ee85805317819",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00449.jpg"
    }
  },
  {
    "name": "DSC00451L.jpg",
    "path": "Ceremony/DSC00451L.jpg",
    "sha": "81d547e24bad07cd8aeb7a56ea11973ad18855d2",
    "size": 6559430,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00451L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00451L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/81d547e24bad07cd8aeb7a56ea11973ad18855d2",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00451L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00451L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/81d547e24bad07cd8aeb7a56ea11973ad18855d2",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00451L.jpg"
    }
  },
  {
    "name": "DSC00454L.jpg",
    "path": "Ceremony/DSC00454L.jpg",
    "sha": "b8f63fd910e927096a166017f4d244af509ba873",
    "size": 6563615,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00454L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00454L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b8f63fd910e927096a166017f4d244af509ba873",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00454L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00454L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b8f63fd910e927096a166017f4d244af509ba873",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00454L.jpg"
    }
  },
  {
    "name": "DSC00464.jpg",
    "path": "Ceremony/DSC00464.jpg",
    "sha": "caa0dc8971fb6464d8fdec4a02f6129bc5aa2ec2",
    "size": 6067317,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00464.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00464.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/caa0dc8971fb6464d8fdec4a02f6129bc5aa2ec2",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00464.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00464.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/caa0dc8971fb6464d8fdec4a02f6129bc5aa2ec2",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00464.jpg"
    }
  },
  {
    "name": "DSC00466.jpg",
    "path": "Ceremony/DSC00466.jpg",
    "sha": "76739cd8eecfc8fdc6b6b9c32fac692d134fe503",
    "size": 6672331,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00466.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00466.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/76739cd8eecfc8fdc6b6b9c32fac692d134fe503",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00466.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00466.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/76739cd8eecfc8fdc6b6b9c32fac692d134fe503",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00466.jpg"
    }
  },
  {
    "name": "DSC00468.jpg",
    "path": "Ceremony/DSC00468.jpg",
    "sha": "4917d47b9440957f97ebfa6cacf78b1b8ce80dc2",
    "size": 5533161,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00468.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00468.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4917d47b9440957f97ebfa6cacf78b1b8ce80dc2",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00468.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00468.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4917d47b9440957f97ebfa6cacf78b1b8ce80dc2",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00468.jpg"
    }
  },
  {
    "name": "DSC00474.jpg",
    "path": "Ceremony/DSC00474.jpg",
    "sha": "8fcfa9f1aeeac37c580f42fbee22f68147d3294e",
    "size": 5113276,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00474.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00474.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8fcfa9f1aeeac37c580f42fbee22f68147d3294e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00474.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00474.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8fcfa9f1aeeac37c580f42fbee22f68147d3294e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00474.jpg"
    }
  },
  {
    "name": "DSC00486.jpg",
    "path": "Ceremony/DSC00486.jpg",
    "sha": "44535d637a38354b2a9b5f2599fe37fbebdb1e6f",
    "size": 7939148,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00486.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00486.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/44535d637a38354b2a9b5f2599fe37fbebdb1e6f",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00486.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00486.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/44535d637a38354b2a9b5f2599fe37fbebdb1e6f",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00486.jpg"
    }
  },
  {
    "name": "DSC00488.jpg",
    "path": "Ceremony/DSC00488.jpg",
    "sha": "9559032cd373c412fc6275abcc82aac459840aff",
    "size": 5305713,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00488.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00488.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9559032cd373c412fc6275abcc82aac459840aff",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00488.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00488.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9559032cd373c412fc6275abcc82aac459840aff",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00488.jpg"
    }
  },
  {
    "name": "DSC00489.jpg",
    "path": "Ceremony/DSC00489.jpg",
    "sha": "87a85a1341c437cf9eb1ea22ff3e6b7ef9be0ac4",
    "size": 5295152,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00489.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00489.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/87a85a1341c437cf9eb1ea22ff3e6b7ef9be0ac4",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC00489.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC00489.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/87a85a1341c437cf9eb1ea22ff3e6b7ef9be0ac4",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC00489.jpg"
    }
  },
  {
    "name": "DSC04790.jpg",
    "path": "Ceremony/DSC04790.jpg",
    "sha": "e2fd7e5f006034c55a18c08ad1f0c91411875fb4",
    "size": 5766639,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04790.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04790.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e2fd7e5f006034c55a18c08ad1f0c91411875fb4",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04790.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04790.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e2fd7e5f006034c55a18c08ad1f0c91411875fb4",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04790.jpg"
    }
  },
  {
    "name": "DSC04793.jpg",
    "path": "Ceremony/DSC04793.jpg",
    "sha": "99f800518b0ba47bbc49b2121671c42813822ccb",
    "size": 5587490,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04793.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04793.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/99f800518b0ba47bbc49b2121671c42813822ccb",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04793.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04793.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/99f800518b0ba47bbc49b2121671c42813822ccb",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04793.jpg"
    }
  },
  {
    "name": "DSC04796.jpg",
    "path": "Ceremony/DSC04796.jpg",
    "sha": "f455d2486a63f103d9cd886d34ee87092dde40b5",
    "size": 7441748,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04796.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04796.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f455d2486a63f103d9cd886d34ee87092dde40b5",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04796.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04796.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f455d2486a63f103d9cd886d34ee87092dde40b5",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04796.jpg"
    }
  },
  {
    "name": "DSC04798.jpg",
    "path": "Ceremony/DSC04798.jpg",
    "sha": "d688fc26a19e69435290bf624b621fe322fcb32e",
    "size": 6593618,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04798.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04798.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d688fc26a19e69435290bf624b621fe322fcb32e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04798.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04798.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d688fc26a19e69435290bf624b621fe322fcb32e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04798.jpg"
    }
  },
  {
    "name": "DSC04800.jpg",
    "path": "Ceremony/DSC04800.jpg",
    "sha": "1fd4290d9084ad5f852176f33e974cac32fb0e0d",
    "size": 6596589,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04800.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04800.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1fd4290d9084ad5f852176f33e974cac32fb0e0d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04800.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04800.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1fd4290d9084ad5f852176f33e974cac32fb0e0d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04800.jpg"
    }
  },
  {
    "name": "DSC04802.jpg",
    "path": "Ceremony/DSC04802.jpg",
    "sha": "0835a09582491b520baecbec3c8ea782d96df258",
    "size": 7099109,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04802.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04802.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0835a09582491b520baecbec3c8ea782d96df258",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04802.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04802.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0835a09582491b520baecbec3c8ea782d96df258",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04802.jpg"
    }
  },
  {
    "name": "DSC04805.jpg",
    "path": "Ceremony/DSC04805.jpg",
    "sha": "2d795f05b54eb2d5a7c0d853e9b5f5bad7009d8a",
    "size": 6441841,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04805.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04805.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2d795f05b54eb2d5a7c0d853e9b5f5bad7009d8a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04805.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04805.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2d795f05b54eb2d5a7c0d853e9b5f5bad7009d8a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04805.jpg"
    }
  },
  {
    "name": "DSC04808.jpg",
    "path": "Ceremony/DSC04808.jpg",
    "sha": "893a4f1c366a03f183ba21ed98254b0fe60c7f29",
    "size": 5718005,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04808.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04808.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/893a4f1c366a03f183ba21ed98254b0fe60c7f29",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04808.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04808.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/893a4f1c366a03f183ba21ed98254b0fe60c7f29",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04808.jpg"
    }
  },
  {
    "name": "DSC04814.jpg",
    "path": "Ceremony/DSC04814.jpg",
    "sha": "63d0c4c00d7248054ebb6ad343f547889e1fc624",
    "size": 7023909,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04814.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04814.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/63d0c4c00d7248054ebb6ad343f547889e1fc624",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04814.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04814.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/63d0c4c00d7248054ebb6ad343f547889e1fc624",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04814.jpg"
    }
  },
  {
    "name": "DSC04816.jpg",
    "path": "Ceremony/DSC04816.jpg",
    "sha": "0d07a351086952e4812f1291ecc080db85b5ee5e",
    "size": 7122211,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04816.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04816.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0d07a351086952e4812f1291ecc080db85b5ee5e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04816.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04816.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0d07a351086952e4812f1291ecc080db85b5ee5e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04816.jpg"
    }
  },
  {
    "name": "DSC04817.jpg",
    "path": "Ceremony/DSC04817.jpg",
    "sha": "9353818931c5f2f12bdb556835fcfa714bd93e84",
    "size": 6006128,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04817.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04817.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9353818931c5f2f12bdb556835fcfa714bd93e84",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04817.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04817.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9353818931c5f2f12bdb556835fcfa714bd93e84",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04817.jpg"
    }
  },
  {
    "name": "DSC04819.jpg",
    "path": "Ceremony/DSC04819.jpg",
    "sha": "e600d41981d463e6b1e2e2e2f787833e00e7f457",
    "size": 5913226,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04819.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04819.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e600d41981d463e6b1e2e2e2f787833e00e7f457",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04819.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04819.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e600d41981d463e6b1e2e2e2f787833e00e7f457",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04819.jpg"
    }
  },
  {
    "name": "DSC04821.jpg",
    "path": "Ceremony/DSC04821.jpg",
    "sha": "7fd0afd4fc273b313b2e7b3be55a7ebaf1660374",
    "size": 6490691,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04821.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04821.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7fd0afd4fc273b313b2e7b3be55a7ebaf1660374",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04821.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04821.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7fd0afd4fc273b313b2e7b3be55a7ebaf1660374",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04821.jpg"
    }
  },
  {
    "name": "DSC04823.jpg",
    "path": "Ceremony/DSC04823.jpg",
    "sha": "e89763968a74783328dd0bbd956d4918fb28ac6e",
    "size": 6251187,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04823.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04823.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e89763968a74783328dd0bbd956d4918fb28ac6e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04823.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04823.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e89763968a74783328dd0bbd956d4918fb28ac6e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04823.jpg"
    }
  },
  {
    "name": "DSC04825.jpg",
    "path": "Ceremony/DSC04825.jpg",
    "sha": "a3fe921082e534e47d2a699004d3ed71735cd71b",
    "size": 5974628,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04825.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04825.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a3fe921082e534e47d2a699004d3ed71735cd71b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04825.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04825.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a3fe921082e534e47d2a699004d3ed71735cd71b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04825.jpg"
    }
  },
  {
    "name": "DSC04826.jpg",
    "path": "Ceremony/DSC04826.jpg",
    "sha": "1858c9141e40f0f0c71cf3d83bfb76bb7fc277cb",
    "size": 4367094,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04826.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04826.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1858c9141e40f0f0c71cf3d83bfb76bb7fc277cb",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04826.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04826.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1858c9141e40f0f0c71cf3d83bfb76bb7fc277cb",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04826.jpg"
    }
  },
  {
    "name": "DSC04828.jpg",
    "path": "Ceremony/DSC04828.jpg",
    "sha": "57daced835cbb3f4794ffd3dd5fb39a16381a78c",
    "size": 6169828,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04828.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04828.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/57daced835cbb3f4794ffd3dd5fb39a16381a78c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04828.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04828.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/57daced835cbb3f4794ffd3dd5fb39a16381a78c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04828.jpg"
    }
  },
  {
    "name": "DSC04831.jpg",
    "path": "Ceremony/DSC04831.jpg",
    "sha": "357f53e0fb15d08fde9dd81c945ae81bbac9b2db",
    "size": 4588827,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04831.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04831.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/357f53e0fb15d08fde9dd81c945ae81bbac9b2db",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04831.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04831.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/357f53e0fb15d08fde9dd81c945ae81bbac9b2db",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04831.jpg"
    }
  },
  {
    "name": "DSC04833.jpg",
    "path": "Ceremony/DSC04833.jpg",
    "sha": "bbf46769866ed107d7e91b2c83758c51e17e0b94",
    "size": 4443339,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04833.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04833.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bbf46769866ed107d7e91b2c83758c51e17e0b94",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04833.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04833.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bbf46769866ed107d7e91b2c83758c51e17e0b94",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04833.jpg"
    }
  },
  {
    "name": "DSC04835.jpg",
    "path": "Ceremony/DSC04835.jpg",
    "sha": "dc9cb615b46b93532f3dff1d5a4b406cfd8f966c",
    "size": 4434906,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04835.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04835.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/dc9cb615b46b93532f3dff1d5a4b406cfd8f966c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04835.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04835.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/dc9cb615b46b93532f3dff1d5a4b406cfd8f966c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04835.jpg"
    }
  },
  {
    "name": "DSC04838.jpg",
    "path": "Ceremony/DSC04838.jpg",
    "sha": "28e1619b11085818d7ca72be44ea8b58fa509711",
    "size": 6149037,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04838.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04838.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/28e1619b11085818d7ca72be44ea8b58fa509711",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04838.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04838.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/28e1619b11085818d7ca72be44ea8b58fa509711",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04838.jpg"
    }
  },
  {
    "name": "DSC04842.jpg",
    "path": "Ceremony/DSC04842.jpg",
    "sha": "c4faff71d6f2b6cccdfdcfeaa0b679f5046bea24",
    "size": 4546658,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04842.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04842.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c4faff71d6f2b6cccdfdcfeaa0b679f5046bea24",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04842.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04842.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c4faff71d6f2b6cccdfdcfeaa0b679f5046bea24",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04842.jpg"
    }
  },
  {
    "name": "DSC04844.jpg",
    "path": "Ceremony/DSC04844.jpg",
    "sha": "ed0e86d2d6429bbd9158fd6541bcf1fdbc6156e6",
    "size": 4631482,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04844.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04844.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ed0e86d2d6429bbd9158fd6541bcf1fdbc6156e6",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04844.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04844.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ed0e86d2d6429bbd9158fd6541bcf1fdbc6156e6",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04844.jpg"
    }
  },
  {
    "name": "DSC04846.jpg",
    "path": "Ceremony/DSC04846.jpg",
    "sha": "cd8cd93ae8a690bba5349ed3439ff17afbe5d808",
    "size": 5631770,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04846.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04846.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/cd8cd93ae8a690bba5349ed3439ff17afbe5d808",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04846.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04846.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/cd8cd93ae8a690bba5349ed3439ff17afbe5d808",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04846.jpg"
    }
  },
  {
    "name": "DSC04852.jpg",
    "path": "Ceremony/DSC04852.jpg",
    "sha": "587ecfdee54e7435ba7a7ac6729023a20ef42173",
    "size": 6132013,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04852.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04852.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/587ecfdee54e7435ba7a7ac6729023a20ef42173",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04852.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04852.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/587ecfdee54e7435ba7a7ac6729023a20ef42173",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04852.jpg"
    }
  },
  {
    "name": "DSC04854.jpg",
    "path": "Ceremony/DSC04854.jpg",
    "sha": "5fa9fa3721e605a7c9474e16a162abc8e83d0f9e",
    "size": 5280350,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04854.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04854.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5fa9fa3721e605a7c9474e16a162abc8e83d0f9e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04854.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04854.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5fa9fa3721e605a7c9474e16a162abc8e83d0f9e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04854.jpg"
    }
  },
  {
    "name": "DSC04855.jpg",
    "path": "Ceremony/DSC04855.jpg",
    "sha": "85bfc27d7e10ab07c1566df95666edb4d59c37d0",
    "size": 5113029,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04855.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04855.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/85bfc27d7e10ab07c1566df95666edb4d59c37d0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04855.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04855.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/85bfc27d7e10ab07c1566df95666edb4d59c37d0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04855.jpg"
    }
  },
  {
    "name": "DSC04858.jpg",
    "path": "Ceremony/DSC04858.jpg",
    "sha": "3b42cbff8f1e22aa29f78a5bec84858f5684ba85",
    "size": 5877090,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04858.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04858.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3b42cbff8f1e22aa29f78a5bec84858f5684ba85",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04858.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04858.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3b42cbff8f1e22aa29f78a5bec84858f5684ba85",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04858.jpg"
    }
  },
  {
    "name": "DSC04859.jpg",
    "path": "Ceremony/DSC04859.jpg",
    "sha": "0bfce81130dfb9670a0fbdeb2d98ebd05d03905f",
    "size": 6828237,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04859.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04859.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0bfce81130dfb9670a0fbdeb2d98ebd05d03905f",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04859.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04859.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0bfce81130dfb9670a0fbdeb2d98ebd05d03905f",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04859.jpg"
    }
  },
  {
    "name": "DSC04862.jpg",
    "path": "Ceremony/DSC04862.jpg",
    "sha": "627788d1fa07c9c2c5f3f8a633d4572920e19303",
    "size": 3957897,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04862.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04862.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/627788d1fa07c9c2c5f3f8a633d4572920e19303",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04862.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04862.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/627788d1fa07c9c2c5f3f8a633d4572920e19303",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04862.jpg"
    }
  },
  {
    "name": "DSC04863.jpg",
    "path": "Ceremony/DSC04863.jpg",
    "sha": "ef8cbe6101dd1ed6df1e2c749518e081e66d617b",
    "size": 3813846,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04863.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04863.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ef8cbe6101dd1ed6df1e2c749518e081e66d617b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04863.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04863.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ef8cbe6101dd1ed6df1e2c749518e081e66d617b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04863.jpg"
    }
  },
  {
    "name": "DSC04871.jpg",
    "path": "Ceremony/DSC04871.jpg",
    "sha": "0f34d2c33318f6c6ade2ba1f99e2deeacfc9598c",
    "size": 3898851,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04871.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04871.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0f34d2c33318f6c6ade2ba1f99e2deeacfc9598c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04871.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04871.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0f34d2c33318f6c6ade2ba1f99e2deeacfc9598c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04871.jpg"
    }
  },
  {
    "name": "DSC04875.jpg",
    "path": "Ceremony/DSC04875.jpg",
    "sha": "6611a4dafe7fca6ef4815de07f816324951fe7b0",
    "size": 3657488,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04875.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04875.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6611a4dafe7fca6ef4815de07f816324951fe7b0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04875.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04875.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6611a4dafe7fca6ef4815de07f816324951fe7b0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04875.jpg"
    }
  },
  {
    "name": "DSC04878.jpg",
    "path": "Ceremony/DSC04878.jpg",
    "sha": "421f433eabc404b6d780dcb91d64a3b59921bcb4",
    "size": 3885868,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04878.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04878.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/421f433eabc404b6d780dcb91d64a3b59921bcb4",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04878.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04878.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/421f433eabc404b6d780dcb91d64a3b59921bcb4",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04878.jpg"
    }
  },
  {
    "name": "DSC04880.jpg",
    "path": "Ceremony/DSC04880.jpg",
    "sha": "f9036896508acbd375a1b56b02fa400c4e92bb18",
    "size": 4163246,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04880.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04880.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f9036896508acbd375a1b56b02fa400c4e92bb18",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04880.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04880.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f9036896508acbd375a1b56b02fa400c4e92bb18",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04880.jpg"
    }
  },
  {
    "name": "DSC04882.jpg",
    "path": "Ceremony/DSC04882.jpg",
    "sha": "a213f1e4892eaeba91f4001a299d8f264a725252",
    "size": 4026006,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04882.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04882.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a213f1e4892eaeba91f4001a299d8f264a725252",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04882.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04882.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a213f1e4892eaeba91f4001a299d8f264a725252",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04882.jpg"
    }
  },
  {
    "name": "DSC04884.jpg",
    "path": "Ceremony/DSC04884.jpg",
    "sha": "ff60b75b6d8c6361bb0399ca56f7279a616d64a0",
    "size": 4322902,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04884.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04884.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ff60b75b6d8c6361bb0399ca56f7279a616d64a0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04884.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04884.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ff60b75b6d8c6361bb0399ca56f7279a616d64a0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04884.jpg"
    }
  },
  {
    "name": "DSC04889.jpg",
    "path": "Ceremony/DSC04889.jpg",
    "sha": "f111ac6101dd8d606d9c2b3f6c9bf174d29ed447",
    "size": 7543880,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04889.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04889.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f111ac6101dd8d606d9c2b3f6c9bf174d29ed447",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04889.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04889.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f111ac6101dd8d606d9c2b3f6c9bf174d29ed447",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04889.jpg"
    }
  },
  {
    "name": "DSC04893.jpg",
    "path": "Ceremony/DSC04893.jpg",
    "sha": "0fff3b378328c72fb238d6954eb794da291485bc",
    "size": 7702492,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04893.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04893.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0fff3b378328c72fb238d6954eb794da291485bc",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04893.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04893.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0fff3b378328c72fb238d6954eb794da291485bc",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04893.jpg"
    }
  },
  {
    "name": "DSC04898.jpg",
    "path": "Ceremony/DSC04898.jpg",
    "sha": "8ded06a80aff4ee06f8081c5c9b73737eb0a14af",
    "size": 8674553,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04898.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04898.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8ded06a80aff4ee06f8081c5c9b73737eb0a14af",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04898.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04898.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8ded06a80aff4ee06f8081c5c9b73737eb0a14af",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04898.jpg"
    }
  },
  {
    "name": "DSC04900.jpg",
    "path": "Ceremony/DSC04900.jpg",
    "sha": "2997739e5a94feab55468389c809365c4127ccbd",
    "size": 5809567,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04900.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04900.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2997739e5a94feab55468389c809365c4127ccbd",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04900.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04900.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2997739e5a94feab55468389c809365c4127ccbd",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04900.jpg"
    }
  },
  {
    "name": "DSC04902.jpg",
    "path": "Ceremony/DSC04902.jpg",
    "sha": "e267cc0614213fa1c2ebbe43189b8e631b274607",
    "size": 4793994,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04902.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04902.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e267cc0614213fa1c2ebbe43189b8e631b274607",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04902.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04902.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e267cc0614213fa1c2ebbe43189b8e631b274607",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04902.jpg"
    }
  },
  {
    "name": "DSC04903L.jpg",
    "path": "Ceremony/DSC04903L.jpg",
    "sha": "a7e46b8a6419e0e6e777bb0029667711eacbe23b",
    "size": 7169741,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04903L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04903L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a7e46b8a6419e0e6e777bb0029667711eacbe23b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04903L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04903L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a7e46b8a6419e0e6e777bb0029667711eacbe23b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04903L.jpg"
    }
  },
  {
    "name": "DSC04907.jpg",
    "path": "Ceremony/DSC04907.jpg",
    "sha": "1809d0137d39a0937525e2b9fef26bc05152c08e",
    "size": 5793009,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04907.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04907.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1809d0137d39a0937525e2b9fef26bc05152c08e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04907.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04907.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1809d0137d39a0937525e2b9fef26bc05152c08e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04907.jpg"
    }
  },
  {
    "name": "DSC04909L.jpg",
    "path": "Ceremony/DSC04909L.jpg",
    "sha": "763f82e58dbb75faf988e14c9299683ec3acd4d4",
    "size": 7354665,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04909L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04909L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/763f82e58dbb75faf988e14c9299683ec3acd4d4",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04909L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04909L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/763f82e58dbb75faf988e14c9299683ec3acd4d4",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04909L.jpg"
    }
  },
  {
    "name": "DSC04910.jpg",
    "path": "Ceremony/DSC04910.jpg",
    "sha": "a2d00ac8812dd193c3738cb16dd61b16744745c3",
    "size": 6864721,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04910.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04910.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a2d00ac8812dd193c3738cb16dd61b16744745c3",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04910.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04910.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a2d00ac8812dd193c3738cb16dd61b16744745c3",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04910.jpg"
    }
  },
  {
    "name": "DSC04915.jpg",
    "path": "Ceremony/DSC04915.jpg",
    "sha": "ca690ff1a37446e45fe8ccd7296bd2a2a9a5ea1f",
    "size": 6484391,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04915.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04915.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ca690ff1a37446e45fe8ccd7296bd2a2a9a5ea1f",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04915.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04915.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ca690ff1a37446e45fe8ccd7296bd2a2a9a5ea1f",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04915.jpg"
    }
  },
  {
    "name": "DSC04918.jpg",
    "path": "Ceremony/DSC04918.jpg",
    "sha": "0b609b5f23db8d378bfb67b792041dfae5ad8921",
    "size": 5897143,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04918.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04918.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0b609b5f23db8d378bfb67b792041dfae5ad8921",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04918.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04918.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0b609b5f23db8d378bfb67b792041dfae5ad8921",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04918.jpg"
    }
  },
  {
    "name": "DSC04923.jpg",
    "path": "Ceremony/DSC04923.jpg",
    "sha": "dcc6a8b76fb4b193edcfd1eb02fc96a3ce0ee86a",
    "size": 5645916,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04923.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04923.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/dcc6a8b76fb4b193edcfd1eb02fc96a3ce0ee86a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04923.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04923.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/dcc6a8b76fb4b193edcfd1eb02fc96a3ce0ee86a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04923.jpg"
    }
  },
  {
    "name": "DSC04929L.jpg",
    "path": "Ceremony/DSC04929L.jpg",
    "sha": "722df85a45cb6357cc6ecd98164f028f3761cc98",
    "size": 6624683,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04929L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04929L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/722df85a45cb6357cc6ecd98164f028f3761cc98",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04929L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04929L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/722df85a45cb6357cc6ecd98164f028f3761cc98",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04929L.jpg"
    }
  },
  {
    "name": "DSC04932L.jpg",
    "path": "Ceremony/DSC04932L.jpg",
    "sha": "2c6a396549d942cf89a31e116de726a2be669746",
    "size": 6505656,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04932L.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04932L.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2c6a396549d942cf89a31e116de726a2be669746",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04932L.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04932L.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2c6a396549d942cf89a31e116de726a2be669746",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04932L.jpg"
    }
  },
  {
    "name": "DSC04934.jpg",
    "path": "Ceremony/DSC04934.jpg",
    "sha": "6d7bf6f6467babc231c6c96d6eb3433ea97a7f12",
    "size": 6457936,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04934.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04934.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6d7bf6f6467babc231c6c96d6eb3433ea97a7f12",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04934.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04934.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6d7bf6f6467babc231c6c96d6eb3433ea97a7f12",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04934.jpg"
    }
  },
  {
    "name": "DSC04936.jpg",
    "path": "Ceremony/DSC04936.jpg",
    "sha": "cf72ff4fcda680ce84ad1d16852c2b64bf1a83b6",
    "size": 6033385,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04936.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04936.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/cf72ff4fcda680ce84ad1d16852c2b64bf1a83b6",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04936.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04936.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/cf72ff4fcda680ce84ad1d16852c2b64bf1a83b6",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04936.jpg"
    }
  },
  {
    "name": "DSC04940.jpg",
    "path": "Ceremony/DSC04940.jpg",
    "sha": "9a54015a5e38c12a64790325260a7b6a47c71826",
    "size": 6161099,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04940.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04940.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9a54015a5e38c12a64790325260a7b6a47c71826",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04940.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04940.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9a54015a5e38c12a64790325260a7b6a47c71826",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04940.jpg"
    }
  },
  {
    "name": "DSC04944.jpg",
    "path": "Ceremony/DSC04944.jpg",
    "sha": "455b471c131176a8a1525020ddc87f8de4a8013e",
    "size": 5353585,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04944.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04944.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/455b471c131176a8a1525020ddc87f8de4a8013e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04944.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04944.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/455b471c131176a8a1525020ddc87f8de4a8013e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04944.jpg"
    }
  },
  {
    "name": "DSC04951.jpg",
    "path": "Ceremony/DSC04951.jpg",
    "sha": "75d43a3535741fa61a74e4b0457c05caf65b1780",
    "size": 6562368,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04951.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04951.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/75d43a3535741fa61a74e4b0457c05caf65b1780",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04951.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04951.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/75d43a3535741fa61a74e4b0457c05caf65b1780",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04951.jpg"
    }
  },
  {
    "name": "DSC04953.jpg",
    "path": "Ceremony/DSC04953.jpg",
    "sha": "8d70276ffe716d859e7a42f620b07787fd84b962",
    "size": 5577109,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04953.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04953.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8d70276ffe716d859e7a42f620b07787fd84b962",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04953.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04953.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8d70276ffe716d859e7a42f620b07787fd84b962",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04953.jpg"
    }
  },
  {
    "name": "DSC04956.jpg",
    "path": "Ceremony/DSC04956.jpg",
    "sha": "98e26385fbedc08ddc0e9e27282b1fa7037ebf55",
    "size": 6044879,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04956.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04956.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/98e26385fbedc08ddc0e9e27282b1fa7037ebf55",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04956.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04956.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/98e26385fbedc08ddc0e9e27282b1fa7037ebf55",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04956.jpg"
    }
  },
  {
    "name": "DSC04959.jpg",
    "path": "Ceremony/DSC04959.jpg",
    "sha": "41c9c8bc16d925d2e7aa6e205900686f53448f25",
    "size": 6261023,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04959.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04959.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/41c9c8bc16d925d2e7aa6e205900686f53448f25",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04959.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04959.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/41c9c8bc16d925d2e7aa6e205900686f53448f25",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04959.jpg"
    }
  },
  {
    "name": "DSC04960.jpg",
    "path": "Ceremony/DSC04960.jpg",
    "sha": "7f67f9c3d31dd5ef6d42a3d4828d9464ef37a986",
    "size": 5736958,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04960.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04960.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7f67f9c3d31dd5ef6d42a3d4828d9464ef37a986",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Ceremony/DSC04960.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony/DSC04960.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7f67f9c3d31dd5ef6d42a3d4828d9464ef37a986",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Ceremony/DSC04960.jpg"
    }
  }
]

let sliderImageCeremony2 = await formatData(sliderImageCeremony)
export default sliderImageCeremony2;
// let t = [
// // export default [
//   {
//     title: "First Slide",
//     description: "This is the first slider Image of our carousel",
//     // urls: First,
//     urls: prefix + "DSC00451.jpg" + postfix,
   
//     layout: "landscape",
//     name: "DSC00045.jpg",
//     name2: "DSC00045",
//   },
//   {
//     title: "Second Slide",
//     description: "This is the second slider Image of our carousel",
//     // urls: Second,
//     urls: prefix + "DSC00429.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC00429.jpg",
//     name2: "DSC00429",
//   },
//   {
//     title: "Second Slide",
//     description: "This is the second slider Image of our carousel",
//     // urls: Third,
//     urls: prefix + "DSC00396.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC00396.jpg",
//     name2: "DSC00396",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC00468.jpg"),
//     urls: prefix + "DSC00468.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC00468.jpg",
//     name2: "DSC00468",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC00474.jpg"),
//     urls: prefix + "DSC00474.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC00474.jpg",
//     name2: "DSC00474",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC00676.jpg"),
//     urls: prefix + "DSC00676.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC00676.jpg",
//     name2: "DSC00676",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC00710.jpg"),
//     urls: prefix + "DSC00710.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC00710.jpg",
//     name2: "DSC00710",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC00716.jpg"),
//     urls: prefix + "DSC00716.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC00716.jpg",
//     name2: "DSC00716",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04796.jpg"),
//     urls: prefix + "DSC04796.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04796.jpg",
//     name2: "DSC04796",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04800.jpg"),
//     urls: prefix + "DSC04800.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04800.jpg",
//     name2: "DSC04800",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04808.jpg"),
//     urls: prefix + "DSC04808.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04808.jpg",
//     name2: "DSC04808",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04814.jpg"),
//     urls: prefix + "DSC04814.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04814.jpg",
//     name2: "DSC04814",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04816.jpg"),
//     urls: prefix + "DSC04816.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04816.jpg",
//     name2: "DSC04816",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04819.jpg"),
//     urls: prefix + "DSC04819.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04819.jpg",
//     name2: "DSC04819",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04821.jpg"),
//     urls: prefix + "DSC04821.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04821.jpg",
//     name2: "DSC04821",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04825.jpg"),
//     urls: prefix + "DSC04825.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04825.jpg",
//     name2: "DSC04825",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04831.jpg"),
//     urls: prefix + "DSC04831.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04831.jpg",
//     name2: "DSC04831",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04835.jpg"),
//     urls: prefix + "DSC04835.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04835.jpg",
//     name2: "DSC04835",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04838.jpg"),
//     urls: prefix + "DSC04838.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04838.jpg",
//     name2: "DSC04838",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04844.jpg"),
//     urls: prefix + "DSC04844.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04844.jpg",
//     name2: "DSC04844",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04854.jpg"),
//     urls: prefix + "DSC04854.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04854.jpg",
//     name2: "DSC04854",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04855.jpg"),
//     urls: prefix + "DSC04855.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04855.jpg",
//     name2: "DSC04855",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04858.jpg"),
//     urls: prefix + "DSC04858.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04858.jpg",
//     name2: "DSC04858",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04863.jpg"),
//     urls: prefix + "DSC04863.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04863.jpg",
//     name2: "DSC04863",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04871.jpg"),
//     urls: prefix + "DSC04871.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04871.jpg",
//     name2: "DSC04871",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04878.jpg"),
//     urls: prefix + "DSC04878.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04878.jpg",
//     name2: "DSC04878",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04880.jpg"),
//     urls: prefix + "DSC04880.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04880.jpg",
//     name2: "DSC04880",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04882.jpg"),
//     urls: prefix + "DSC04882.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04882.jpg",
//     name2: "DSC04882",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04898.jpg"),
//     urls: prefix + "DSC04898.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04898.jpg",
//     name2: "DSC04898",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04902.jpg"),
//     urls: prefix + "DSC04902.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04902.jpg",
//     name2: "DSC04902",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04909.jpg"),
//     urls: prefix + "DSC04909.jpg" + postfix,
//     layout: "landscape",
//     name: "DSC04909.jpg",
//     name2: "DSC04909",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04915.jpg"),
//     urls: prefix + "DSC04915.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04915.jpg",
//     name2: "DSC04915",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04918.jpg"),
//     urls: prefix + "DSC04918.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04918.jpg",
//     name2: "DSC04918",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04929.jpg"),
//     urls: prefix + "DSC04929.jpg" + postfix,
//     layout: "landscape",
//     name: "DSC04929.jpg",
//     name2: "DSC04929",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04932.jpg"),
//     urls: prefix + "DSC04932.jpg" + postfix,
//     layout: "landscape",
//     name: "DSC04932.jpg",
//     name2: "DSC04932",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04934.jpg"),
//     urls: prefix + "DSC04934.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04934.jpg",
//     name2: "DSC04934",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04936.jpg"),
//     urls: prefix + "DSC04936.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04936.jpg",
//     name2: "DSC04936",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04959.jpg"),
//     urls: prefix + "DSC04959.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04959.jpg",
//     name2: "DSC04959",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC04960.jpg"),
//     urls: prefix + "DSC04960.jpg" + postfix,
//     layout: "portriat",
//     name: "DSC04960.jpg",
//     name2: "DSC04960",
//   },
//   {
//     // urls: require("../../assets/images/ceremony/new/DSC00676.jpg"),
//     urls: prefix + "DSC00676.jpg" + postfix,
//     // urls: "https://github.com/maxgrier/WeddingPhotos/blob/main/src/assets/DSC00676.jpg?raw=true",
//     layout: "portriat",
//     name: "DSC00676.jpg",
//     name2: "DSC00676",
//   },
//   // {
//   //   urls: require("../../assets/images/ceremony/new/DSC04963.jpg"),
//   //   layout: "portriat",
//   //   name: "DSC04963.jpg",
//   //   name2: "DSC04963",
//   // },
// ];
