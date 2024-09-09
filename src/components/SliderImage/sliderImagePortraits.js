import First from "../../assets/images/portraits/DSC00045.jpg";
import Second from "../../assets/images/portraits/DSC00126.jpg";
import Third from "../../assets/images/portraits//new/DSC00013.jpg";
// import Third from "../../assets/DSC00717.jpg";


const getFileNames = async () => {
  try {
    const data = await fetch(
      "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Ceremony",
      { headers: { Accept: "application/vnd.github+full" } }
    );
    console.log(`Success! Status: ${data.status}. Rate limit remaining: ${data.headers["x-ratelimit-remaining"]}`)
    const dataJson = await data.json();
    let d = await formatData(dataJson);
    return d;
  } catch (error) {
    console.log("error: ", error);
  }
};
getFileNames()


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
  // console.log("formatted data ", formattedData);
  return formattedData;
};


// let sliderImagePortraits = await getFileNames();
// export default sliderImagePortraits;

let sliderImagePortraits = [
  {
    "name": "DSC00010.jpg",
    "path": "Portraits/DSC00010.jpg",
    "sha": "50c65f820296d5705a8c71e253744ad454013326",
    "size": 6435895,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00010.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00010.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/50c65f820296d5705a8c71e253744ad454013326",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00010.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00010.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/50c65f820296d5705a8c71e253744ad454013326",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00010.jpg"
    }
  },
  {
    "name": "DSC00013.jpg",
    "path": "Portraits/DSC00013.jpg",
    "sha": "b2cb0359cd5c26ca67d7593c5b0d2a5caf747724",
    "size": 6789109,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00013.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00013.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b2cb0359cd5c26ca67d7593c5b0d2a5caf747724",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00013.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00013.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b2cb0359cd5c26ca67d7593c5b0d2a5caf747724",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00013.jpg"
    }
  },
  {
    "name": "DSC00015.jpg",
    "path": "Portraits/DSC00015.jpg",
    "sha": "3ad1085d7094a04c673644d410b5583e0903b117",
    "size": 6630981,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00015.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00015.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3ad1085d7094a04c673644d410b5583e0903b117",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00015.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00015.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3ad1085d7094a04c673644d410b5583e0903b117",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00015.jpg"
    }
  },
  {
    "name": "DSC00045.jpg",
    "path": "Portraits/DSC00045.jpg",
    "sha": "a93fd656d9e97ab36b4adf9b305f06b42900379c",
    "size": 7079228,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00045.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00045.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a93fd656d9e97ab36b4adf9b305f06b42900379c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00045.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00045.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a93fd656d9e97ab36b4adf9b305f06b42900379c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00045.jpg"
    }
  },
  {
    "name": "DSC00056.jpg",
    "path": "Portraits/DSC00056.jpg",
    "sha": "7aef78bb630aa0917c2e42e9509c7a8d916ce44f",
    "size": 5255032,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00056.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00056.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7aef78bb630aa0917c2e42e9509c7a8d916ce44f",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00056.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00056.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7aef78bb630aa0917c2e42e9509c7a8d916ce44f",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00056.jpg"
    }
  },
  {
    "name": "DSC00057.jpg",
    "path": "Portraits/DSC00057.jpg",
    "sha": "efbce961575bc68f6dbbab40f1b20a9fd6552c2a",
    "size": 7294581,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00057.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00057.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/efbce961575bc68f6dbbab40f1b20a9fd6552c2a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00057.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00057.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/efbce961575bc68f6dbbab40f1b20a9fd6552c2a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00057.jpg"
    }
  },
  {
    "name": "DSC00060.jpg",
    "path": "Portraits/DSC00060.jpg",
    "sha": "3bca3b00102e7178d69776d18c53e633d6cbe447",
    "size": 4862010,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00060.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00060.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3bca3b00102e7178d69776d18c53e633d6cbe447",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00060.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00060.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3bca3b00102e7178d69776d18c53e633d6cbe447",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00060.jpg"
    }
  },
  {
    "name": "DSC00087.jpg",
    "path": "Portraits/DSC00087.jpg",
    "sha": "1c48aa8a81f54de275fce5f424fb9d4385810b7c",
    "size": 5462033,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00087.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00087.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1c48aa8a81f54de275fce5f424fb9d4385810b7c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00087.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00087.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1c48aa8a81f54de275fce5f424fb9d4385810b7c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00087.jpg"
    }
  },
  {
    "name": "DSC00096.jpg",
    "path": "Portraits/DSC00096.jpg",
    "sha": "de83905fa3e21026dcb99c2a5cefab51e56ffd87",
    "size": 5620522,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00096.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00096.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/de83905fa3e21026dcb99c2a5cefab51e56ffd87",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00096.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00096.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/de83905fa3e21026dcb99c2a5cefab51e56ffd87",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00096.jpg"
    }
  },
  {
    "name": "DSC00102.jpg",
    "path": "Portraits/DSC00102.jpg",
    "sha": "49d39bd8be023521698ac083b029dd3d3498b0b7",
    "size": 5927966,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00102.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00102.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/49d39bd8be023521698ac083b029dd3d3498b0b7",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00102.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00102.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/49d39bd8be023521698ac083b029dd3d3498b0b7",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00102.jpg"
    }
  },
  {
    "name": "DSC00104.jpg",
    "path": "Portraits/DSC00104.jpg",
    "sha": "3d2bc04304bd1e40b00f4449b1fba66c09798a0c",
    "size": 6078129,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00104.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00104.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3d2bc04304bd1e40b00f4449b1fba66c09798a0c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00104.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00104.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3d2bc04304bd1e40b00f4449b1fba66c09798a0c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00104.jpg"
    }
  },
  {
    "name": "DSC00112.jpg",
    "path": "Portraits/DSC00112.jpg",
    "sha": "d2aabc4eb820178e4052cf403e24eaae977c798e",
    "size": 6276397,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00112.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00112.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d2aabc4eb820178e4052cf403e24eaae977c798e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00112.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00112.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d2aabc4eb820178e4052cf403e24eaae977c798e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00112.jpg"
    }
  },
  {
    "name": "DSC00121.jpg",
    "path": "Portraits/DSC00121.jpg",
    "sha": "d0f2ce2ade9f091ebc2716dd5a464f87c6cac445",
    "size": 6772255,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00121.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00121.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d0f2ce2ade9f091ebc2716dd5a464f87c6cac445",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00121.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00121.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d0f2ce2ade9f091ebc2716dd5a464f87c6cac445",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00121.jpg"
    }
  },
  {
    "name": "DSC00123.jpg",
    "path": "Portraits/DSC00123.jpg",
    "sha": "43d46eaeae488a4c62736faf48f1d7e5846b6408",
    "size": 6882627,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00123.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00123.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/43d46eaeae488a4c62736faf48f1d7e5846b6408",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00123.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00123.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/43d46eaeae488a4c62736faf48f1d7e5846b6408",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00123.jpg"
    }
  },
  {
    "name": "DSC00126.jpg",
    "path": "Portraits/DSC00126.jpg",
    "sha": "319835252fe62309abc48257157e3ad68e08678a",
    "size": 5468598,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00126.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00126.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/319835252fe62309abc48257157e3ad68e08678a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00126.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00126.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/319835252fe62309abc48257157e3ad68e08678a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00126.jpg"
    }
  },
  {
    "name": "DSC00129.jpg",
    "path": "Portraits/DSC00129.jpg",
    "sha": "2ffbf78d8e652697a8f4f133fea3155123032f9f",
    "size": 6368235,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00129.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00129.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2ffbf78d8e652697a8f4f133fea3155123032f9f",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00129.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00129.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2ffbf78d8e652697a8f4f133fea3155123032f9f",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00129.jpg"
    }
  },
  {
    "name": "DSC00130.jpg",
    "path": "Portraits/DSC00130.jpg",
    "sha": "e6d92918681e217e8dd0e296ebbbb1a633677fc9",
    "size": 5877276,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00130.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00130.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e6d92918681e217e8dd0e296ebbbb1a633677fc9",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00130.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00130.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e6d92918681e217e8dd0e296ebbbb1a633677fc9",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00130.jpg"
    }
  },
  {
    "name": "DSC00132.jpg",
    "path": "Portraits/DSC00132.jpg",
    "sha": "b0dbebd2b59f838bc3906e2b8ef7b2b92e87bcf4",
    "size": 5288671,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00132.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00132.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b0dbebd2b59f838bc3906e2b8ef7b2b92e87bcf4",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00132.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00132.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b0dbebd2b59f838bc3906e2b8ef7b2b92e87bcf4",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00132.jpg"
    }
  },
  {
    "name": "DSC00133.jpg",
    "path": "Portraits/DSC00133.jpg",
    "sha": "0539977f9593a337caf0673faaf4d1a02fe83fbd",
    "size": 5670620,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00133.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00133.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0539977f9593a337caf0673faaf4d1a02fe83fbd",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00133.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00133.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0539977f9593a337caf0673faaf4d1a02fe83fbd",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00133.jpg"
    }
  },
  {
    "name": "DSC00140.jpg",
    "path": "Portraits/DSC00140.jpg",
    "sha": "9b9ab9f47aba049ed17c35d0b179aaaa98b15cfd",
    "size": 7238384,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00140.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00140.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9b9ab9f47aba049ed17c35d0b179aaaa98b15cfd",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00140.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00140.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9b9ab9f47aba049ed17c35d0b179aaaa98b15cfd",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00140.jpg"
    }
  },
  {
    "name": "DSC00145.jpg",
    "path": "Portraits/DSC00145.jpg",
    "sha": "6d7ec1188b0a2ba82235031c4385382aaf7380a0",
    "size": 7391511,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00145.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00145.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6d7ec1188b0a2ba82235031c4385382aaf7380a0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00145.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00145.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6d7ec1188b0a2ba82235031c4385382aaf7380a0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00145.jpg"
    }
  },
  {
    "name": "DSC00149.jpg",
    "path": "Portraits/DSC00149.jpg",
    "sha": "34dcba93645a66ce5b5d0e5d5fa575d32151b72c",
    "size": 7331530,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00149.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00149.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/34dcba93645a66ce5b5d0e5d5fa575d32151b72c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00149.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00149.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/34dcba93645a66ce5b5d0e5d5fa575d32151b72c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00149.jpg"
    }
  },
  {
    "name": "DSC00150.jpg",
    "path": "Portraits/DSC00150.jpg",
    "sha": "e4e509d2b1ca14245312016d39a307b10422a590",
    "size": 6557354,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00150.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00150.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e4e509d2b1ca14245312016d39a307b10422a590",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00150.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00150.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e4e509d2b1ca14245312016d39a307b10422a590",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00150.jpg"
    }
  },
  {
    "name": "DSC00159.jpg",
    "path": "Portraits/DSC00159.jpg",
    "sha": "60c36ffb12087b5784a8adbe288caafde5657946",
    "size": 5701317,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00159.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00159.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/60c36ffb12087b5784a8adbe288caafde5657946",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00159.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00159.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/60c36ffb12087b5784a8adbe288caafde5657946",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00159.jpg"
    }
  },
  {
    "name": "DSC00164.jpg",
    "path": "Portraits/DSC00164.jpg",
    "sha": "3df815001b57ce140d0c300b4000fc17bfb403e8",
    "size": 7460534,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00164.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00164.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3df815001b57ce140d0c300b4000fc17bfb403e8",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00164.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00164.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3df815001b57ce140d0c300b4000fc17bfb403e8",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00164.jpg"
    }
  },
  {
    "name": "DSC00176.jpg",
    "path": "Portraits/DSC00176.jpg",
    "sha": "da8cb5ee34ee4180085804383a37ec260816a945",
    "size": 4459350,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00176.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00176.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/da8cb5ee34ee4180085804383a37ec260816a945",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00176.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00176.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/da8cb5ee34ee4180085804383a37ec260816a945",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00176.jpg"
    }
  },
  {
    "name": "DSC00178.jpg",
    "path": "Portraits/DSC00178.jpg",
    "sha": "bfcc9ee53abda2ec81d3d9979c8035de6bf573d0",
    "size": 4650573,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00178.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00178.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bfcc9ee53abda2ec81d3d9979c8035de6bf573d0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00178.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00178.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bfcc9ee53abda2ec81d3d9979c8035de6bf573d0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00178.jpg"
    }
  },
  {
    "name": "DSC00182.jpg",
    "path": "Portraits/DSC00182.jpg",
    "sha": "36e96e0855445ce2a2005c181c644c49389a0a3b",
    "size": 4331010,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00182.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00182.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/36e96e0855445ce2a2005c181c644c49389a0a3b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00182.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00182.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/36e96e0855445ce2a2005c181c644c49389a0a3b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00182.jpg"
    }
  },
  {
    "name": "DSC00185.jpg",
    "path": "Portraits/DSC00185.jpg",
    "sha": "fa251ec55629b80505274c861f60508f5ee1c468",
    "size": 6126556,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00185.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00185.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/fa251ec55629b80505274c861f60508f5ee1c468",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00185.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00185.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/fa251ec55629b80505274c861f60508f5ee1c468",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00185.jpg"
    }
  },
  {
    "name": "DSC00186.jpg",
    "path": "Portraits/DSC00186.jpg",
    "sha": "1a5fc576bcaf6340d408d1f452ccaee80ff76a44",
    "size": 4168528,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00186.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00186.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1a5fc576bcaf6340d408d1f452ccaee80ff76a44",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00186.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00186.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1a5fc576bcaf6340d408d1f452ccaee80ff76a44",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00186.jpg"
    }
  },
  {
    "name": "DSC00267.jpg",
    "path": "Portraits/DSC00267.jpg",
    "sha": "623b18a41df1c7cf4e0cc9a5acab1389e3818934",
    "size": 6230734,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00267.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00267.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/623b18a41df1c7cf4e0cc9a5acab1389e3818934",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00267.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00267.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/623b18a41df1c7cf4e0cc9a5acab1389e3818934",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00267.jpg"
    }
  },
  {
    "name": "DSC00322.jpg",
    "path": "Portraits/DSC00322.jpg",
    "sha": "fdda1ed5cfd22abf0a92985729df26e17ca6ea9c",
    "size": 6246446,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00322.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00322.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/fdda1ed5cfd22abf0a92985729df26e17ca6ea9c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00322.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00322.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/fdda1ed5cfd22abf0a92985729df26e17ca6ea9c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00322.jpg"
    }
  },
  {
    "name": "DSC00324.jpg",
    "path": "Portraits/DSC00324.jpg",
    "sha": "e205720e051316fa9f45e795b1a57be2c55984c0",
    "size": 7742784,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00324.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00324.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e205720e051316fa9f45e795b1a57be2c55984c0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00324.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00324.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e205720e051316fa9f45e795b1a57be2c55984c0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00324.jpg"
    }
  },
  {
    "name": "DSC00327.jpg",
    "path": "Portraits/DSC00327.jpg",
    "sha": "ef7a18ad0a0ab9f2afe3ed0634f19a69bddca57b",
    "size": 6079903,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00327.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00327.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ef7a18ad0a0ab9f2afe3ed0634f19a69bddca57b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00327.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00327.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ef7a18ad0a0ab9f2afe3ed0634f19a69bddca57b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00327.jpg"
    }
  },
  {
    "name": "DSC00491.jpg",
    "path": "Portraits/DSC00491.jpg",
    "sha": "c891d785cc2d483f2e824f067a6e6da084a96699",
    "size": 5340065,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00491.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00491.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c891d785cc2d483f2e824f067a6e6da084a96699",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00491.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00491.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c891d785cc2d483f2e824f067a6e6da084a96699",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00491.jpg"
    }
  },
  {
    "name": "DSC00492.jpg",
    "path": "Portraits/DSC00492.jpg",
    "sha": "92f38a567c2b0de1b31495fff464c7232bb8a575",
    "size": 5293155,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00492.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00492.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/92f38a567c2b0de1b31495fff464c7232bb8a575",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00492.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00492.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/92f38a567c2b0de1b31495fff464c7232bb8a575",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00492.jpg"
    }
  },
  {
    "name": "DSC00494.jpg",
    "path": "Portraits/DSC00494.jpg",
    "sha": "3bdffc91d0856e9d8aa4a50a686c1d04730b179a",
    "size": 5202651,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00494.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00494.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3bdffc91d0856e9d8aa4a50a686c1d04730b179a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00494.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00494.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3bdffc91d0856e9d8aa4a50a686c1d04730b179a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00494.jpg"
    }
  },
  {
    "name": "DSC00495.jpg",
    "path": "Portraits/DSC00495.jpg",
    "sha": "4cd79d49d2a17f33b0f41ca216e73642bff8ebba",
    "size": 6166627,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00495.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00495.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4cd79d49d2a17f33b0f41ca216e73642bff8ebba",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00495.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00495.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4cd79d49d2a17f33b0f41ca216e73642bff8ebba",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00495.jpg"
    }
  },
  {
    "name": "DSC00497.jpg",
    "path": "Portraits/DSC00497.jpg",
    "sha": "f0cec2965ee660817d1369df4da942d384327585",
    "size": 7206847,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00497.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00497.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f0cec2965ee660817d1369df4da942d384327585",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00497.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00497.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f0cec2965ee660817d1369df4da942d384327585",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00497.jpg"
    }
  },
  {
    "name": "DSC00499.jpg",
    "path": "Portraits/DSC00499.jpg",
    "sha": "39a7a85ac10b46b86b3b6bfd59eb401dd8006e86",
    "size": 6991872,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00499.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00499.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/39a7a85ac10b46b86b3b6bfd59eb401dd8006e86",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00499.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00499.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/39a7a85ac10b46b86b3b6bfd59eb401dd8006e86",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00499.jpg"
    }
  },
  {
    "name": "DSC00501.jpg",
    "path": "Portraits/DSC00501.jpg",
    "sha": "cf20bcd71e4afd4825caef310ec22d2ae4f6e980",
    "size": 5507246,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00501.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00501.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/cf20bcd71e4afd4825caef310ec22d2ae4f6e980",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00501.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00501.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/cf20bcd71e4afd4825caef310ec22d2ae4f6e980",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00501.jpg"
    }
  },
  {
    "name": "DSC00504.jpg",
    "path": "Portraits/DSC00504.jpg",
    "sha": "46ce990e827097c694b998cbadd3cd2369702e0c",
    "size": 5559976,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00504.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00504.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/46ce990e827097c694b998cbadd3cd2369702e0c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00504.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00504.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/46ce990e827097c694b998cbadd3cd2369702e0c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00504.jpg"
    }
  },
  {
    "name": "DSC00508.jpg",
    "path": "Portraits/DSC00508.jpg",
    "sha": "d0bcd38f049b4e3e3a9ee3b937761b1dbc5e3e1b",
    "size": 5532389,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00508.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00508.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d0bcd38f049b4e3e3a9ee3b937761b1dbc5e3e1b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00508.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00508.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d0bcd38f049b4e3e3a9ee3b937761b1dbc5e3e1b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00508.jpg"
    }
  },
  {
    "name": "DSC00510.jpg",
    "path": "Portraits/DSC00510.jpg",
    "sha": "07c26fab4aa060f10b00cf494d754b4a059e0a4d",
    "size": 6663567,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00510.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00510.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/07c26fab4aa060f10b00cf494d754b4a059e0a4d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00510.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00510.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/07c26fab4aa060f10b00cf494d754b4a059e0a4d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00510.jpg"
    }
  },
  {
    "name": "DSC00512.jpg",
    "path": "Portraits/DSC00512.jpg",
    "sha": "d4b542bad27cf132c4dc371d06aea81f60ea0b24",
    "size": 5787019,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00512.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00512.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d4b542bad27cf132c4dc371d06aea81f60ea0b24",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00512.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00512.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d4b542bad27cf132c4dc371d06aea81f60ea0b24",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00512.jpg"
    }
  },
  {
    "name": "DSC00551.jpg",
    "path": "Portraits/DSC00551.jpg",
    "sha": "2e67ce21af62d04827682654bee35ab676565f0a",
    "size": 6239711,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00551.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00551.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2e67ce21af62d04827682654bee35ab676565f0a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00551.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00551.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2e67ce21af62d04827682654bee35ab676565f0a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00551.jpg"
    }
  },
  {
    "name": "DSC00559.jpg",
    "path": "Portraits/DSC00559.jpg",
    "sha": "7dc9ffd7288ca1f87521541263dc6aa8efb23e8d",
    "size": 5654171,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00559.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00559.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7dc9ffd7288ca1f87521541263dc6aa8efb23e8d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00559.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00559.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7dc9ffd7288ca1f87521541263dc6aa8efb23e8d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00559.jpg"
    }
  },
  {
    "name": "DSC00563.jpg",
    "path": "Portraits/DSC00563.jpg",
    "sha": "0bba354f2539b4621ea0c0afb3071ade1cf0edad",
    "size": 6593604,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00563.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00563.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0bba354f2539b4621ea0c0afb3071ade1cf0edad",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00563.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00563.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0bba354f2539b4621ea0c0afb3071ade1cf0edad",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00563.jpg"
    }
  },
  {
    "name": "DSC00565.jpg",
    "path": "Portraits/DSC00565.jpg",
    "sha": "b096d3f1c3e8c06218fd2e491364a93376740351",
    "size": 6000148,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00565.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00565.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b096d3f1c3e8c06218fd2e491364a93376740351",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00565.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00565.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b096d3f1c3e8c06218fd2e491364a93376740351",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00565.jpg"
    }
  },
  {
    "name": "DSC00569.jpg",
    "path": "Portraits/DSC00569.jpg",
    "sha": "211666666c3a0136c8661355899d1f86a4c7a399",
    "size": 4365374,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00569.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00569.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/211666666c3a0136c8661355899d1f86a4c7a399",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00569.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00569.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/211666666c3a0136c8661355899d1f86a4c7a399",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00569.jpg"
    }
  },
  {
    "name": "DSC00572.jpg",
    "path": "Portraits/DSC00572.jpg",
    "sha": "59d8d7088ba415cdb2bf5996630ae8c617dcd4fb",
    "size": 5908257,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00572.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00572.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/59d8d7088ba415cdb2bf5996630ae8c617dcd4fb",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00572.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00572.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/59d8d7088ba415cdb2bf5996630ae8c617dcd4fb",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00572.jpg"
    }
  },
  {
    "name": "DSC00574.jpg",
    "path": "Portraits/DSC00574.jpg",
    "sha": "f451252edf8a68866f34b837d7103b157762fa7d",
    "size": 5771856,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00574.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00574.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f451252edf8a68866f34b837d7103b157762fa7d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00574.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00574.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f451252edf8a68866f34b837d7103b157762fa7d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00574.jpg"
    }
  },
  {
    "name": "DSC00667.jpg",
    "path": "Portraits/DSC00667.jpg",
    "sha": "2b4cee2de8eb423691fccbb4f750583f83fe1651",
    "size": 6188298,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00667.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00667.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2b4cee2de8eb423691fccbb4f750583f83fe1651",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00667.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00667.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2b4cee2de8eb423691fccbb4f750583f83fe1651",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00667.jpg"
    }
  },
  {
    "name": "DSC00675.jpg",
    "path": "Portraits/DSC00675.jpg",
    "sha": "0edcc9d1b176e44543ae6a436a819832a5d15bc8",
    "size": 5790086,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00675.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00675.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0edcc9d1b176e44543ae6a436a819832a5d15bc8",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00675.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00675.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0edcc9d1b176e44543ae6a436a819832a5d15bc8",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00675.jpg"
    }
  },
  {
    "name": "DSC00676.jpg",
    "path": "Portraits/DSC00676.jpg",
    "sha": "f6864ea50b0ebbb23c85e7645a672a6e68ffa27e",
    "size": 6409929,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00676.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00676.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f6864ea50b0ebbb23c85e7645a672a6e68ffa27e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00676.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00676.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f6864ea50b0ebbb23c85e7645a672a6e68ffa27e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00676.jpg"
    }
  },
  {
    "name": "DSC00682.jpg",
    "path": "Portraits/DSC00682.jpg",
    "sha": "8ca0675e78685a059464f66f3338f1eb0dfd4cd2",
    "size": 6612907,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00682.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00682.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8ca0675e78685a059464f66f3338f1eb0dfd4cd2",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00682.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00682.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8ca0675e78685a059464f66f3338f1eb0dfd4cd2",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00682.jpg"
    }
  },
  {
    "name": "DSC00710.jpg",
    "path": "Portraits/DSC00710.jpg",
    "sha": "581395174048352d4f41026a32e36639377e06d1",
    "size": 6324785,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00710.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00710.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/581395174048352d4f41026a32e36639377e06d1",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00710.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00710.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/581395174048352d4f41026a32e36639377e06d1",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00710.jpg"
    }
  },
  {
    "name": "DSC00717.jpg",
    "path": "Portraits/DSC00717.jpg",
    "sha": "8ea67284307c7effa155ae8c847a55bc8a0b05f7",
    "size": 6616324,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00717.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00717.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8ea67284307c7effa155ae8c847a55bc8a0b05f7",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00717.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00717.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8ea67284307c7effa155ae8c847a55bc8a0b05f7",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00717.jpg"
    }
  },
  {
    "name": "DSC00719.jpg",
    "path": "Portraits/DSC00719.jpg",
    "sha": "b4a7ddf94650a03a036b115b094ac546a673041d",
    "size": 6532754,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00719.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00719.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b4a7ddf94650a03a036b115b094ac546a673041d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00719.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00719.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b4a7ddf94650a03a036b115b094ac546a673041d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00719.jpg"
    }
  },
  {
    "name": "DSC00720.jpg",
    "path": "Portraits/DSC00720.jpg",
    "sha": "af4c67ee706aaec4114123cb470ec7ecc91e0572",
    "size": 5170497,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00720.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00720.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/af4c67ee706aaec4114123cb470ec7ecc91e0572",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00720.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00720.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/af4c67ee706aaec4114123cb470ec7ecc91e0572",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00720.jpg"
    }
  },
  {
    "name": "DSC00791.jpg",
    "path": "Portraits/DSC00791.jpg",
    "sha": "f42c3d2e629c9f9f11a633e8a4a79fa879c75b80",
    "size": 6175884,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00791.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00791.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f42c3d2e629c9f9f11a633e8a4a79fa879c75b80",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00791.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00791.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f42c3d2e629c9f9f11a633e8a4a79fa879c75b80",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00791.jpg"
    }
  },
  {
    "name": "DSC00793.jpg",
    "path": "Portraits/DSC00793.jpg",
    "sha": "a73ef282d032a4db3e1482695f3cfd21c9cfef52",
    "size": 5896512,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00793.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00793.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a73ef282d032a4db3e1482695f3cfd21c9cfef52",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00793.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00793.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a73ef282d032a4db3e1482695f3cfd21c9cfef52",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00793.jpg"
    }
  },
  {
    "name": "DSC00794.jpg",
    "path": "Portraits/DSC00794.jpg",
    "sha": "c3050b42c6d2088fa4aac8ff5e20c1aa320df06d",
    "size": 3584059,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00794.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00794.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c3050b42c6d2088fa4aac8ff5e20c1aa320df06d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00794.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00794.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c3050b42c6d2088fa4aac8ff5e20c1aa320df06d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00794.jpg"
    }
  },
  {
    "name": "DSC00795.jpg",
    "path": "Portraits/DSC00795.jpg",
    "sha": "701de5c5b825bdf51b9e738bc40685bf973edaef",
    "size": 5051127,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00795.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00795.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/701de5c5b825bdf51b9e738bc40685bf973edaef",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00795.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00795.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/701de5c5b825bdf51b9e738bc40685bf973edaef",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00795.jpg"
    }
  },
  {
    "name": "DSC00886.jpg",
    "path": "Portraits/DSC00886.jpg",
    "sha": "028db7c751d788b6e5af243df6188bd5692ff34a",
    "size": 5289586,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00886.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00886.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/028db7c751d788b6e5af243df6188bd5692ff34a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00886.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00886.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/028db7c751d788b6e5af243df6188bd5692ff34a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00886.jpg"
    }
  },
  {
    "name": "DSC00887.jpg",
    "path": "Portraits/DSC00887.jpg",
    "sha": "5962dd970125eb02f9dbe2216d20473c80e2ea09",
    "size": 6007870,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00887.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00887.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5962dd970125eb02f9dbe2216d20473c80e2ea09",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00887.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00887.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5962dd970125eb02f9dbe2216d20473c80e2ea09",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00887.jpg"
    }
  },
  {
    "name": "DSC00891.jpg",
    "path": "Portraits/DSC00891.jpg",
    "sha": "f344739907d3d2ef1769290ba45b6a27bf8e6bd4",
    "size": 6076987,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00891.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00891.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f344739907d3d2ef1769290ba45b6a27bf8e6bd4",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00891.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00891.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f344739907d3d2ef1769290ba45b6a27bf8e6bd4",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00891.jpg"
    }
  },
  {
    "name": "DSC00896.jpg",
    "path": "Portraits/DSC00896.jpg",
    "sha": "552270dbbd1c5993d1bda3d07cb9e875718688ad",
    "size": 5950646,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00896.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00896.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/552270dbbd1c5993d1bda3d07cb9e875718688ad",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00896.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00896.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/552270dbbd1c5993d1bda3d07cb9e875718688ad",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00896.jpg"
    }
  },
  {
    "name": "DSC00901.jpg",
    "path": "Portraits/DSC00901.jpg",
    "sha": "1cdf372b89ca4342f503b0a3c1dfba726b4025fc",
    "size": 6331918,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00901.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00901.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1cdf372b89ca4342f503b0a3c1dfba726b4025fc",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00901.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00901.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1cdf372b89ca4342f503b0a3c1dfba726b4025fc",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00901.jpg"
    }
  },
  {
    "name": "DSC00902.jpg",
    "path": "Portraits/DSC00902.jpg",
    "sha": "1e6cf86ee5ba694a1950b5910baabcce366eb93c",
    "size": 9294552,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00902.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00902.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1e6cf86ee5ba694a1950b5910baabcce366eb93c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00902.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00902.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1e6cf86ee5ba694a1950b5910baabcce366eb93c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00902.jpg"
    }
  },
  {
    "name": "DSC00903.jpg",
    "path": "Portraits/DSC00903.jpg",
    "sha": "bbf9c80cedf28ef922adc5b78effcabdd69c3501",
    "size": 5856951,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00903.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00903.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bbf9c80cedf28ef922adc5b78effcabdd69c3501",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00903.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00903.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/bbf9c80cedf28ef922adc5b78effcabdd69c3501",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00903.jpg"
    }
  },
  {
    "name": "DSC00913.jpg",
    "path": "Portraits/DSC00913.jpg",
    "sha": "47e7458a862f595663f16fb658b3392e391b3cd0",
    "size": 6179354,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00913.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00913.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/47e7458a862f595663f16fb658b3392e391b3cd0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00913.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00913.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/47e7458a862f595663f16fb658b3392e391b3cd0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00913.jpg"
    }
  },
  {
    "name": "DSC00918.jpg",
    "path": "Portraits/DSC00918.jpg",
    "sha": "9a7519cc0cf0ef3dc60af367fa64b236419e791b",
    "size": 7015308,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00918.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00918.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9a7519cc0cf0ef3dc60af367fa64b236419e791b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00918.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00918.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9a7519cc0cf0ef3dc60af367fa64b236419e791b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00918.jpg"
    }
  },
  {
    "name": "DSC00935.jpg",
    "path": "Portraits/DSC00935.jpg",
    "sha": "5cb7c86f688abd1e21098ed2d63e4ced4d3cd33e",
    "size": 5796231,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00935.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00935.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5cb7c86f688abd1e21098ed2d63e4ced4d3cd33e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00935.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00935.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5cb7c86f688abd1e21098ed2d63e4ced4d3cd33e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00935.jpg"
    }
  },
  {
    "name": "DSC00982.jpg",
    "path": "Portraits/DSC00982.jpg",
    "sha": "23795d1253c3123c6445688120e20c9fd6a060e9",
    "size": 8230403,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00982.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00982.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/23795d1253c3123c6445688120e20c9fd6a060e9",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00982.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00982.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/23795d1253c3123c6445688120e20c9fd6a060e9",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00982.jpg"
    }
  },
  {
    "name": "DSC00986.jpg",
    "path": "Portraits/DSC00986.jpg",
    "sha": "2b9d916ccb7b89c9c56013787d42ae600749997e",
    "size": 6392270,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00986.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00986.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2b9d916ccb7b89c9c56013787d42ae600749997e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00986.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00986.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2b9d916ccb7b89c9c56013787d42ae600749997e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00986.jpg"
    }
  },
  {
    "name": "DSC00987.jpg",
    "path": "Portraits/DSC00987.jpg",
    "sha": "a38aab8aaa5ed9b185a76438ab4605d7d6196f7c",
    "size": 6023055,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00987.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00987.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a38aab8aaa5ed9b185a76438ab4605d7d6196f7c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00987.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00987.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/a38aab8aaa5ed9b185a76438ab4605d7d6196f7c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00987.jpg"
    }
  },
  {
    "name": "DSC00989.jpg",
    "path": "Portraits/DSC00989.jpg",
    "sha": "4190d469b82a801b8e68d15ab2b951c907c3f9e3",
    "size": 6606863,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00989.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00989.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4190d469b82a801b8e68d15ab2b951c907c3f9e3",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00989.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00989.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4190d469b82a801b8e68d15ab2b951c907c3f9e3",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00989.jpg"
    }
  },
  {
    "name": "DSC00993.jpg",
    "path": "Portraits/DSC00993.jpg",
    "sha": "62eaa1a62914be70d954779092a35c0b2d3d0695",
    "size": 7131622,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00993.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00993.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/62eaa1a62914be70d954779092a35c0b2d3d0695",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00993.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00993.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/62eaa1a62914be70d954779092a35c0b2d3d0695",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00993.jpg"
    }
  },
  {
    "name": "DSC00998.jpg",
    "path": "Portraits/DSC00998.jpg",
    "sha": "c857acd8d6b776d2dad54bd452a1234e3b296abe",
    "size": 7702179,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00998.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00998.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c857acd8d6b776d2dad54bd452a1234e3b296abe",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC00998.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC00998.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c857acd8d6b776d2dad54bd452a1234e3b296abe",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC00998.jpg"
    }
  },
  {
    "name": "DSC01000.jpg",
    "path": "Portraits/DSC01000.jpg",
    "sha": "8736019c1deebaeb1469105d960d00de98778d1b",
    "size": 6027166,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01000.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01000.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8736019c1deebaeb1469105d960d00de98778d1b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01000.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01000.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8736019c1deebaeb1469105d960d00de98778d1b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01000.jpg"
    }
  },
  {
    "name": "DSC01002.jpg",
    "path": "Portraits/DSC01002.jpg",
    "sha": "de28aeb51eaff3ce91848bdd69d72d025fd7b362",
    "size": 5719189,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01002.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01002.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/de28aeb51eaff3ce91848bdd69d72d025fd7b362",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01002.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01002.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/de28aeb51eaff3ce91848bdd69d72d025fd7b362",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01002.jpg"
    }
  },
  {
    "name": "DSC01003.jpg",
    "path": "Portraits/DSC01003.jpg",
    "sha": "c05aa6e80b618f8664b2f17747f354125478d83d",
    "size": 5373683,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01003.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01003.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c05aa6e80b618f8664b2f17747f354125478d83d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01003.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01003.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c05aa6e80b618f8664b2f17747f354125478d83d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01003.jpg"
    }
  },
  {
    "name": "DSC01020.jpg",
    "path": "Portraits/DSC01020.jpg",
    "sha": "61ed45252fc65019689a770d2576cd4fb7f12347",
    "size": 6596429,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01020.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01020.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/61ed45252fc65019689a770d2576cd4fb7f12347",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01020.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01020.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/61ed45252fc65019689a770d2576cd4fb7f12347",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01020.jpg"
    }
  },
  {
    "name": "DSC01022.jpg",
    "path": "Portraits/DSC01022.jpg",
    "sha": "d6a31a33e872c1c44592b4385b9f367ca604366c",
    "size": 6446116,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01022.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01022.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d6a31a33e872c1c44592b4385b9f367ca604366c",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01022.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01022.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d6a31a33e872c1c44592b4385b9f367ca604366c",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01022.jpg"
    }
  },
  {
    "name": "DSC01024.jpg",
    "path": "Portraits/DSC01024.jpg",
    "sha": "5a38e0f2e779e13a12dac72f3473a44a6c10b9d1",
    "size": 6669423,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01024.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01024.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5a38e0f2e779e13a12dac72f3473a44a6c10b9d1",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01024.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01024.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5a38e0f2e779e13a12dac72f3473a44a6c10b9d1",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01024.jpg"
    }
  },
  {
    "name": "DSC01027.jpg",
    "path": "Portraits/DSC01027.jpg",
    "sha": "dcf27c01ecf929abda0baf4552778b7680fb23f2",
    "size": 6541487,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01027.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01027.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/dcf27c01ecf929abda0baf4552778b7680fb23f2",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01027.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01027.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/dcf27c01ecf929abda0baf4552778b7680fb23f2",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01027.jpg"
    }
  },
  {
    "name": "DSC01035.jpg",
    "path": "Portraits/DSC01035.jpg",
    "sha": "c4e1891672733d00159f86bc576e221530554746",
    "size": 6229188,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01035.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01035.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c4e1891672733d00159f86bc576e221530554746",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01035.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01035.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c4e1891672733d00159f86bc576e221530554746",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01035.jpg"
    }
  },
  {
    "name": "DSC01039.jpg",
    "path": "Portraits/DSC01039.jpg",
    "sha": "19821973c8327149b81aed1795a93120b1d285de",
    "size": 5410341,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01039.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01039.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/19821973c8327149b81aed1795a93120b1d285de",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01039.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01039.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/19821973c8327149b81aed1795a93120b1d285de",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01039.jpg"
    }
  },
  {
    "name": "DSC01043.jpg",
    "path": "Portraits/DSC01043.jpg",
    "sha": "218888dbc270ccd3c28dd0795c28d7f14d9f80ac",
    "size": 5402500,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01043.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01043.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/218888dbc270ccd3c28dd0795c28d7f14d9f80ac",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01043.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01043.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/218888dbc270ccd3c28dd0795c28d7f14d9f80ac",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01043.jpg"
    }
  },
  {
    "name": "DSC01048.jpg",
    "path": "Portraits/DSC01048.jpg",
    "sha": "08fa5e8f69716dd9033bee12f892f0d4b1e7ead6",
    "size": 5702390,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01048.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01048.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/08fa5e8f69716dd9033bee12f892f0d4b1e7ead6",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01048.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01048.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/08fa5e8f69716dd9033bee12f892f0d4b1e7ead6",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01048.jpg"
    }
  },
  {
    "name": "DSC01056.jpg",
    "path": "Portraits/DSC01056.jpg",
    "sha": "d321b09269c25c10fadd6b00808ea121e7ab3991",
    "size": 5478726,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01056.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01056.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d321b09269c25c10fadd6b00808ea121e7ab3991",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01056.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01056.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d321b09269c25c10fadd6b00808ea121e7ab3991",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01056.jpg"
    }
  },
  {
    "name": "DSC01061.jpg",
    "path": "Portraits/DSC01061.jpg",
    "sha": "43049e5b46d5f02cab03bdd41a786532ccc5d77b",
    "size": 6490927,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01061.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01061.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/43049e5b46d5f02cab03bdd41a786532ccc5d77b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01061.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01061.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/43049e5b46d5f02cab03bdd41a786532ccc5d77b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01061.jpg"
    }
  },
  {
    "name": "DSC01070.jpg",
    "path": "Portraits/DSC01070.jpg",
    "sha": "5e11eca606d4a4cb6d2c962d4fad8e6979d79f8e",
    "size": 7060131,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01070.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01070.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5e11eca606d4a4cb6d2c962d4fad8e6979d79f8e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01070.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01070.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5e11eca606d4a4cb6d2c962d4fad8e6979d79f8e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01070.jpg"
    }
  },
  {
    "name": "DSC01075.jpg",
    "path": "Portraits/DSC01075.jpg",
    "sha": "240eddbeb7dbeb5e3fb20aa62ff132b0cf2cb5ac",
    "size": 5746526,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01075.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01075.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/240eddbeb7dbeb5e3fb20aa62ff132b0cf2cb5ac",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01075.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01075.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/240eddbeb7dbeb5e3fb20aa62ff132b0cf2cb5ac",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01075.jpg"
    }
  },
  {
    "name": "DSC01080.jpg",
    "path": "Portraits/DSC01080.jpg",
    "sha": "481a86eac4c24d478545bbef79080766ee1d5a6b",
    "size": 4997471,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01080.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01080.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/481a86eac4c24d478545bbef79080766ee1d5a6b",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01080.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01080.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/481a86eac4c24d478545bbef79080766ee1d5a6b",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01080.jpg"
    }
  },
  {
    "name": "DSC01084.jpg",
    "path": "Portraits/DSC01084.jpg",
    "sha": "dbbbe8f8a457fd005f48fa9d01a94ddf4e9586f4",
    "size": 4839826,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01084.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01084.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/dbbbe8f8a457fd005f48fa9d01a94ddf4e9586f4",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01084.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01084.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/dbbbe8f8a457fd005f48fa9d01a94ddf4e9586f4",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01084.jpg"
    }
  },
  {
    "name": "DSC01087.jpg",
    "path": "Portraits/DSC01087.jpg",
    "sha": "fd90aefa8668950790a078e3fbbad68d45b843e8",
    "size": 5426169,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01087.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01087.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/fd90aefa8668950790a078e3fbbad68d45b843e8",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01087.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01087.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/fd90aefa8668950790a078e3fbbad68d45b843e8",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01087.jpg"
    }
  },
  {
    "name": "DSC01092.jpg",
    "path": "Portraits/DSC01092.jpg",
    "sha": "5be92bd47db1a6b3b5fda2b9d5f5cb337acbb14f",
    "size": 5704904,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01092.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01092.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5be92bd47db1a6b3b5fda2b9d5f5cb337acbb14f",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01092.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01092.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5be92bd47db1a6b3b5fda2b9d5f5cb337acbb14f",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01092.jpg"
    }
  },
  {
    "name": "DSC01093.jpg",
    "path": "Portraits/DSC01093.jpg",
    "sha": "cda911fd77ac21d8f8ec0346b811c105a6196eb0",
    "size": 5074988,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01093.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01093.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/cda911fd77ac21d8f8ec0346b811c105a6196eb0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01093.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01093.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/cda911fd77ac21d8f8ec0346b811c105a6196eb0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01093.jpg"
    }
  },
  {
    "name": "DSC01108.jpg",
    "path": "Portraits/DSC01108.jpg",
    "sha": "68e1d1c475cc5546ec8917df03f94c144acdcfbc",
    "size": 5686631,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01108.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01108.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/68e1d1c475cc5546ec8917df03f94c144acdcfbc",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01108.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01108.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/68e1d1c475cc5546ec8917df03f94c144acdcfbc",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01108.jpg"
    }
  },
  {
    "name": "DSC01115.jpg",
    "path": "Portraits/DSC01115.jpg",
    "sha": "add0b409790dc29a14d9539c080999ded683dd86",
    "size": 5998905,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01115.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01115.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/add0b409790dc29a14d9539c080999ded683dd86",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01115.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01115.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/add0b409790dc29a14d9539c080999ded683dd86",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01115.jpg"
    }
  },
  {
    "name": "DSC01122.jpg",
    "path": "Portraits/DSC01122.jpg",
    "sha": "f93ce54f4d4d89c6cc425f4da925c710ee2f16da",
    "size": 5543382,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01122.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01122.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f93ce54f4d4d89c6cc425f4da925c710ee2f16da",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01122.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01122.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/f93ce54f4d4d89c6cc425f4da925c710ee2f16da",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01122.jpg"
    }
  },
  {
    "name": "DSC01249.jpg",
    "path": "Portraits/DSC01249.jpg",
    "sha": "6d34d5495ace7eee61679f6d294afd3e6c0baf3d",
    "size": 6260293,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01249.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01249.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6d34d5495ace7eee61679f6d294afd3e6c0baf3d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01249.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01249.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6d34d5495ace7eee61679f6d294afd3e6c0baf3d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01249.jpg"
    }
  },
  {
    "name": "DSC01251.jpg",
    "path": "Portraits/DSC01251.jpg",
    "sha": "5102e406418e7b94b7bf82456716c4f7eb7f4c89",
    "size": 6466605,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01251.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01251.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5102e406418e7b94b7bf82456716c4f7eb7f4c89",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01251.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01251.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5102e406418e7b94b7bf82456716c4f7eb7f4c89",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01251.jpg"
    }
  },
  {
    "name": "DSC01262.jpg",
    "path": "Portraits/DSC01262.jpg",
    "sha": "d489d084dc5bc182c871ea0bd4aaaa7cf526f4d0",
    "size": 6562816,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01262.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01262.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d489d084dc5bc182c871ea0bd4aaaa7cf526f4d0",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01262.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01262.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d489d084dc5bc182c871ea0bd4aaaa7cf526f4d0",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01262.jpg"
    }
  },
  {
    "name": "DSC01263.jpg",
    "path": "Portraits/DSC01263.jpg",
    "sha": "2a2ba49c963fccd49e9eeab0f94b7b96196c662a",
    "size": 6812047,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01263.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01263.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2a2ba49c963fccd49e9eeab0f94b7b96196c662a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01263.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01263.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2a2ba49c963fccd49e9eeab0f94b7b96196c662a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01263.jpg"
    }
  },
  {
    "name": "DSC01278.jpg",
    "path": "Portraits/DSC01278.jpg",
    "sha": "3599d17d2a5646dc4dc6d3c48228d0950eb8cd8a",
    "size": 7002384,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01278.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01278.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3599d17d2a5646dc4dc6d3c48228d0950eb8cd8a",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01278.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01278.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3599d17d2a5646dc4dc6d3c48228d0950eb8cd8a",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01278.jpg"
    }
  },
  {
    "name": "DSC01284.jpg",
    "path": "Portraits/DSC01284.jpg",
    "sha": "0945810d54f7d48c696d7181bcfe22256be8faaf",
    "size": 8963905,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01284.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01284.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0945810d54f7d48c696d7181bcfe22256be8faaf",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01284.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01284.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/0945810d54f7d48c696d7181bcfe22256be8faaf",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01284.jpg"
    }
  },
  {
    "name": "DSC01288.jpg",
    "path": "Portraits/DSC01288.jpg",
    "sha": "7486bc31c3dd4dbcefdec2ee8edb1dc5bfde2b45",
    "size": 7067794,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01288.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01288.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7486bc31c3dd4dbcefdec2ee8edb1dc5bfde2b45",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01288.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01288.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7486bc31c3dd4dbcefdec2ee8edb1dc5bfde2b45",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01288.jpg"
    }
  },
  {
    "name": "DSC01291.jpg",
    "path": "Portraits/DSC01291.jpg",
    "sha": "7284ad04bbbc3a1c39ddfba0e8dffc2c9b07ada7",
    "size": 7151026,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01291.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01291.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7284ad04bbbc3a1c39ddfba0e8dffc2c9b07ada7",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01291.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01291.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/7284ad04bbbc3a1c39ddfba0e8dffc2c9b07ada7",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01291.jpg"
    }
  },
  {
    "name": "DSC01296.jpg",
    "path": "Portraits/DSC01296.jpg",
    "sha": "e547eb5a62318f398c91ded08a84d9e203eb64ed",
    "size": 8246005,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01296.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01296.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e547eb5a62318f398c91ded08a84d9e203eb64ed",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01296.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01296.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e547eb5a62318f398c91ded08a84d9e203eb64ed",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01296.jpg"
    }
  },
  {
    "name": "DSC01299.jpg",
    "path": "Portraits/DSC01299.jpg",
    "sha": "8fb87c9516dff08c7b223922e1445634854ed971",
    "size": 10242829,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01299.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01299.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8fb87c9516dff08c7b223922e1445634854ed971",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01299.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01299.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/8fb87c9516dff08c7b223922e1445634854ed971",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01299.jpg"
    }
  },
  {
    "name": "DSC01303.jpg",
    "path": "Portraits/DSC01303.jpg",
    "sha": "4fd63d5303fb0274b47bfb66671848f8fa35c9da",
    "size": 6971678,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01303.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01303.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4fd63d5303fb0274b47bfb66671848f8fa35c9da",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01303.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01303.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/4fd63d5303fb0274b47bfb66671848f8fa35c9da",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01303.jpg"
    }
  },
  {
    "name": "DSC01307.jpg",
    "path": "Portraits/DSC01307.jpg",
    "sha": "2fe37792fea2de8884d4f2b82b03cc8af369f36d",
    "size": 6754387,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01307.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01307.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2fe37792fea2de8884d4f2b82b03cc8af369f36d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01307.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01307.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2fe37792fea2de8884d4f2b82b03cc8af369f36d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01307.jpg"
    }
  },
  {
    "name": "DSC01310.jpg",
    "path": "Portraits/DSC01310.jpg",
    "sha": "5c5007f4edc8a8af10ecdef283724d08ea87d50e",
    "size": 7155369,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01310.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01310.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5c5007f4edc8a8af10ecdef283724d08ea87d50e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01310.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01310.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/5c5007f4edc8a8af10ecdef283724d08ea87d50e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01310.jpg"
    }
  },
  {
    "name": "DSC01317.jpg",
    "path": "Portraits/DSC01317.jpg",
    "sha": "c4b39e1561cf1e345dbecc8b09552f8135aec576",
    "size": 7173324,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01317.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01317.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c4b39e1561cf1e345dbecc8b09552f8135aec576",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01317.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01317.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c4b39e1561cf1e345dbecc8b09552f8135aec576",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01317.jpg"
    }
  },
  {
    "name": "DSC01321.jpg",
    "path": "Portraits/DSC01321.jpg",
    "sha": "d915f5a06234cff2fc6bced9adeb85a3b9dc0895",
    "size": 6427406,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01321.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01321.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d915f5a06234cff2fc6bced9adeb85a3b9dc0895",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01321.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01321.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/d915f5a06234cff2fc6bced9adeb85a3b9dc0895",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01321.jpg"
    }
  },
  {
    "name": "DSC01324.jpg",
    "path": "Portraits/DSC01324.jpg",
    "sha": "6d08d6774b5dcbde2a1951f7d5802cd8e0f1dac9",
    "size": 7019047,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01324.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01324.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6d08d6774b5dcbde2a1951f7d5802cd8e0f1dac9",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01324.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01324.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6d08d6774b5dcbde2a1951f7d5802cd8e0f1dac9",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01324.jpg"
    }
  },
  {
    "name": "DSC01329.jpg",
    "path": "Portraits/DSC01329.jpg",
    "sha": "30ac17fa965b5360ec1c472bff47475e76250824",
    "size": 6842310,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01329.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01329.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/30ac17fa965b5360ec1c472bff47475e76250824",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01329.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01329.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/30ac17fa965b5360ec1c472bff47475e76250824",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01329.jpg"
    }
  },
  {
    "name": "DSC01333.jpg",
    "path": "Portraits/DSC01333.jpg",
    "sha": "aa2e66c3f7c6d4acc59dc5647f75d6c0bf70a529",
    "size": 7920165,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01333.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01333.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/aa2e66c3f7c6d4acc59dc5647f75d6c0bf70a529",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01333.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01333.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/aa2e66c3f7c6d4acc59dc5647f75d6c0bf70a529",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01333.jpg"
    }
  },
  {
    "name": "DSC01379.jpg",
    "path": "Portraits/DSC01379.jpg",
    "sha": "e948d857308647416fe85a1907549eef07ccc87e",
    "size": 9946319,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01379.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01379.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e948d857308647416fe85a1907549eef07ccc87e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01379.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01379.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e948d857308647416fe85a1907549eef07ccc87e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01379.jpg"
    }
  },
  {
    "name": "DSC01382.jpg",
    "path": "Portraits/DSC01382.jpg",
    "sha": "6d4c999c572a8fa855f93aee97fa64640464b76e",
    "size": 9418675,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01382.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01382.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6d4c999c572a8fa855f93aee97fa64640464b76e",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01382.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01382.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6d4c999c572a8fa855f93aee97fa64640464b76e",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01382.jpg"
    }
  },
  {
    "name": "DSC01389.jpg",
    "path": "Portraits/DSC01389.jpg",
    "sha": "b6f88f45c6e9bfde25b8b7870ee7cc971dc42466",
    "size": 7965677,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01389.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01389.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b6f88f45c6e9bfde25b8b7870ee7cc971dc42466",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC01389.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC01389.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b6f88f45c6e9bfde25b8b7870ee7cc971dc42466",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC01389.jpg"
    }
  },
  {
    "name": "DSC09929.jpg",
    "path": "Portraits/DSC09929.jpg",
    "sha": "6beb6a290b3d26566cd9278a6dfe92d07ad951a6",
    "size": 8467395,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09929.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09929.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6beb6a290b3d26566cd9278a6dfe92d07ad951a6",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09929.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09929.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/6beb6a290b3d26566cd9278a6dfe92d07ad951a6",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09929.jpg"
    }
  },
  {
    "name": "DSC09934.jpg",
    "path": "Portraits/DSC09934.jpg",
    "sha": "3b43f568be24010dbc2b52d732f31586a71e2d23",
    "size": 7752728,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09934.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09934.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3b43f568be24010dbc2b52d732f31586a71e2d23",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09934.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09934.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/3b43f568be24010dbc2b52d732f31586a71e2d23",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09934.jpg"
    }
  },
  {
    "name": "DSC09937.jpg",
    "path": "Portraits/DSC09937.jpg",
    "sha": "ccba87982ab98316c6ec6d66c10ab9bd680bc7f9",
    "size": 8126941,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09937.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09937.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ccba87982ab98316c6ec6d66c10ab9bd680bc7f9",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09937.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09937.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ccba87982ab98316c6ec6d66c10ab9bd680bc7f9",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09937.jpg"
    }
  },
  {
    "name": "DSC09938.jpg",
    "path": "Portraits/DSC09938.jpg",
    "sha": "9ad987ad7f5ecbee24f1b30d616ce8aa113a5c65",
    "size": 7809338,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09938.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09938.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9ad987ad7f5ecbee24f1b30d616ce8aa113a5c65",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09938.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09938.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9ad987ad7f5ecbee24f1b30d616ce8aa113a5c65",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09938.jpg"
    }
  },
  {
    "name": "DSC09948.jpg",
    "path": "Portraits/DSC09948.jpg",
    "sha": "b7c34580c0c7ef7956a1989d34739ce9e9eadeaf",
    "size": 5891500,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09948.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09948.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b7c34580c0c7ef7956a1989d34739ce9e9eadeaf",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09948.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09948.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/b7c34580c0c7ef7956a1989d34739ce9e9eadeaf",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09948.jpg"
    }
  },
  {
    "name": "DSC09952.jpg",
    "path": "Portraits/DSC09952.jpg",
    "sha": "9cad43c69463c687b43d8a0a6a96f62f988626fc",
    "size": 5965000,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09952.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09952.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9cad43c69463c687b43d8a0a6a96f62f988626fc",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09952.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09952.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/9cad43c69463c687b43d8a0a6a96f62f988626fc",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09952.jpg"
    }
  },
  {
    "name": "DSC09959.jpg",
    "path": "Portraits/DSC09959.jpg",
    "sha": "e71c60591ad0a47ae6025cdc0a962e46dc7673ee",
    "size": 6516758,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09959.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09959.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e71c60591ad0a47ae6025cdc0a962e46dc7673ee",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09959.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09959.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/e71c60591ad0a47ae6025cdc0a962e46dc7673ee",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09959.jpg"
    }
  },
  {
    "name": "DSC09973.jpg",
    "path": "Portraits/DSC09973.jpg",
    "sha": "59befd23d32db068c77cc3f5c7ce2f19801aec49",
    "size": 6361394,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09973.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09973.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/59befd23d32db068c77cc3f5c7ce2f19801aec49",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09973.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09973.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/59befd23d32db068c77cc3f5c7ce2f19801aec49",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09973.jpg"
    }
  },
  {
    "name": "DSC09975.jpg",
    "path": "Portraits/DSC09975.jpg",
    "sha": "ca56a4ee4289f6b41c78ac62802a33bf96be4f1d",
    "size": 6047977,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09975.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09975.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ca56a4ee4289f6b41c78ac62802a33bf96be4f1d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09975.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09975.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/ca56a4ee4289f6b41c78ac62802a33bf96be4f1d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09975.jpg"
    }
  },
  {
    "name": "DSC09978.jpg",
    "path": "Portraits/DSC09978.jpg",
    "sha": "2a7b7f1f443676e56dadfda09b27301021694f39",
    "size": 6768265,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09978.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09978.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2a7b7f1f443676e56dadfda09b27301021694f39",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09978.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09978.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2a7b7f1f443676e56dadfda09b27301021694f39",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09978.jpg"
    }
  },
  {
    "name": "DSC09981.jpg",
    "path": "Portraits/DSC09981.jpg",
    "sha": "1a0cd905e34f7d6ba9961a8f44e2873f26d6749d",
    "size": 6172547,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09981.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09981.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1a0cd905e34f7d6ba9961a8f44e2873f26d6749d",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09981.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09981.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/1a0cd905e34f7d6ba9961a8f44e2873f26d6749d",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09981.jpg"
    }
  },
  {
    "name": "DSC09985.jpg",
    "path": "Portraits/DSC09985.jpg",
    "sha": "c99086347a1efe361d5b80dfd5e6ce4746abacc1",
    "size": 6409860,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09985.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09985.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c99086347a1efe361d5b80dfd5e6ce4746abacc1",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09985.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09985.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/c99086347a1efe361d5b80dfd5e6ce4746abacc1",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09985.jpg"
    }
  },
  {
    "name": "DSC09987.jpg",
    "path": "Portraits/DSC09987.jpg",
    "sha": "fac4deb21f5525c7a233cc46395d755cbffce10f",
    "size": 5926561,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09987.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09987.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/fac4deb21f5525c7a233cc46395d755cbffce10f",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09987.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09987.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/fac4deb21f5525c7a233cc46395d755cbffce10f",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09987.jpg"
    }
  },
  {
    "name": "DSC09988.jpg",
    "path": "Portraits/DSC09988.jpg",
    "sha": "397caa18713735c3b803d3b313867ec237f7ad67",
    "size": 5265846,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09988.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09988.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/397caa18713735c3b803d3b313867ec237f7ad67",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09988.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09988.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/397caa18713735c3b803d3b313867ec237f7ad67",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09988.jpg"
    }
  },
  {
    "name": "DSC09993.jpg",
    "path": "Portraits/DSC09993.jpg",
    "sha": "980359182c50f84fec7c88dd45a4de25588ba7ae",
    "size": 6635796,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09993.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09993.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/980359182c50f84fec7c88dd45a4de25588ba7ae",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09993.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09993.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/980359182c50f84fec7c88dd45a4de25588ba7ae",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09993.jpg"
    }
  },
  {
    "name": "DSC09996.jpg",
    "path": "Portraits/DSC09996.jpg",
    "sha": "2a2c43f53c46d880998a6283aad87819cc209b18",
    "size": 6282570,
    "url": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09996.jpg?ref=main",
    "html_url": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09996.jpg",
    "git_url": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2a2c43f53c46d880998a6283aad87819cc209b18",
    "download_url": "https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Portraits/DSC09996.jpg",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Portraits/DSC09996.jpg?ref=main",
      "git": "https://api.github.com/repos/maxgrier/PhotoRepo/git/blobs/2a2c43f53c46d880998a6283aad87819cc209b18",
      "html": "https://github.com/maxgrier/PhotoRepo/blob/main/Portraits/DSC09996.jpg"
    }
  }
]

let sliderImagePortraits2 = await formatData(sliderImagePortraits)
export default sliderImagePortraits2;
// 
// export default [
//   {
//     title: "First Slide",
//     description: "This is the first slider Image of our carousel",
//     urls: First,
//     layout: 'portriat',
//     name: "DSC00045.jpg",
//     name2: "DSC00045",
//   },
//   {
//     title: "Second Slide",
//     description: "This is the second slider Image of our carousel",
//     urls: Second,
//     layout: 'portriat',
//     name: "DSC00126.jpg",
//     name2: "DSC00126",
//   },
//   {
//     title: "Third Slide",
//     description: "This is the second slider Image of our carousel",
//     urls: Third,
//     layout: 'portriat',
//     name: "DSC00013.jpg",
//     name2: "DSC00013",
//   },
//   {
//     title: "",
//     description: "",
//     urls: require("../../assets/images/portraits/new/DSC00056.jpg"),
//     layout: 'portriat',
//     name: "DSC00056.jpg",
//     name2: "DSC00056",
//   },
//   {
//     title: "",
//     description: "",
//     urls: require("../../assets/images/portraits/new/DSC00060.jpg"),
//     layout: 'portriat',
//     name: "DSC00060.jpg",
//     name2: "DSC00060",
//   },
//   {
//     title: "",
//     description: "",
//     urls: require("../../assets/images/portraits/new/DSC00140.jpg"),
//     layout: 'portriat',
//     name: "DSC00140.jpg",
//     name2: "DSC00140",
//   },
//   {
//     title: "",
//     description: "",
//     urls: require("../../assets/images/portraits/new/DSC00145.jpg"),
//     layout: 'portriat',
//     name: "DSC00145.jpg",
//     name2: "DSC00145",
//   },
//   {
//     title: "",
//     description: "",
//     urls: require("../../assets/images/portraits/new/DSC00149.jpg"),
//     layout: 'portriat',
//     name: "DSC00149.jpg",
//     name2: "DSC00149",
//   },
//   {
//     title: "",
//     description: "",
//     urls: require("../../assets/images/portraits/new/DSC00156.jpg"),
//     layout: 'portriat',
//     name: "DSC00156.jpg",
//     name2: "DSC00156",
//   },
//   {
//     title: "",
//     description: "",
//     urls: require("../../assets/images/portraits/new/DSC00158.jpg"),
//     layout: 'portriat',
//     name: "DSC00158.jpg",
//     name2: "DSC00158",
//   },
//   {
//     title: "",
//     description: "",
//     urls: require("../../assets/images/portraits/new/DSC00159.jpg"),
//     layout: 'portriat',
//     name: "DSC00159.jpg",
//     name2: "DSC00159",
//   },



  // {
  //   title: "",
  //   description: "",
  //   urls: Second,
  //   layout: 'portriat',
  //   name: "DSC00056.jpg",
  //   name2: "DSC00056",
  // },
  // {
  //   title: "Third Slide",
  //   description: "This is the Third slider Image of our carousel",
  //   urls: Third,
  //   name: "DSC00717.jpg",
  //   name2: "DSC00717",
  // },
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
// ];