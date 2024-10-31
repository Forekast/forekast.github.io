$(document).ready(function () {
  var allImages = "./img/";

//   contentGen(allImages);

//   contentGen("./img/design/");
let portfolioSection = new Array();
    $(".nav-link").each(function(i){
        let result = $(this);
        if (result.attr("href") != "#skills") {
        let thisFolder = result.attr('href').substring(1);
          console.log(allImages + thisFolder);
          contentGen(allImages + thisFolder);
        }
    });

});


function downloadResume() {
  window.open("docs/2019.09_MakMendelson_Resume.pdf#zoom=100", "_blank");
}

// Run functions from inside this, when needing the use the directory
async function contentGen(newRoot) {
  let folders = new Array();
  let images = new Array();

  $.ajax({
    url: newRoot,
    success: function (data) {
      // console.log(data);
      let input = $(data).find("a");
    //   console.log(input);
      images = getImages(input);
      folders = getFolders(input);
    },
  }).done(function () {
    const contents = {
      folders: folders,
      files: images,
    };
    // console.log(contents);
    // console.log(contents.folders[0]);
    // contentGen(contents.folders[0]);
  });
}

function getImages(dirResults) {
  let listofImages = new Array();

  dirResults.attr("href", function (i, val) {
    if (val.match(/\.(jpe?g|png|gif)$/)) {
      //console.log($(this).attr("title"));
      listofImages.push($(this).attr("title"));
    }
  });
  console.log("List of Images:\n\r" + listofImages);
  return listofImages;
}

function getFolders(dirResults) {
  let listofFolders = new Array();

  dirResults.attr("href", function (i, val) {
    if (val.match(/(?:\/|^)[^.\/]+$/)) {
      if ($(this).attr("title") != undefined && $(this).attr("title") != "..") {
        // console.log("FOLDER:" + $(this).attr('href'));
        listofFolders.push($(this).attr("href"));
      }
    }
  });
  console.log("List of Folders:\n\r" + listofFolders);
  return listofFolders;
}

// (/\.(jpe?g|png|gif)$/)
// (/(?:\/|^)[^.\/]+$/)

// (/^(.+)\/([^\/]+)$/)

// $(data)
//   .find("a")
//   .attr("href", function (i, val) {
//     // console.log(this);
//     if (val.match(/\.(jpe?g|png|gif)$/)) {
//       //   console.log($(this).attr("title"));
//       images.push($(this).attr("title"));
//     } else if (val.match(/(?:\/|^)[^.\/]+$/)) {
//       if ($(this).attr("title") != undefined) {
//         // console.log($(this).attr('href'));
//         folders.push($(this).attr("href"));
//       }
//     }
//   });
