$(document).ready(function () {
    
    var allImages = "./img/";
    var foldernames = [];
    var filenames = [];
    
    // Grab images and folder structure
    $.ajax({
        url : allImages,
        success : function (data) {
            
            // console.log(data);

            $(data).find('a').attr('href', function (i, val) {
                // console.log(this);
                if(val.match(/\.(jpe?g|png|gif)$/)) {
                    filenames.push($(this).attr('title'));
                } else if ( val.match( (/(?:\/|^)[^.\/]+$/) )) {
                    if ($(this).attr('title') != undefined){
                        foldernames.push($(this).attr('title'));
                    }
                }
            })

        }
    })

    console.log("Folder Names: ");
    for (let i = 0; i < foldernames.length; i++){
        console.log(foldernames[i]);
    }
    console.log( "File Names: " + filenames);


    // console.log("Document Ready");
});

function downloadResume() {
  window.open("docs/2019.09_MakMendelson_Resume.pdf#zoom=200", "_blank");
}



function getDIR(root) {
    
}





// (/\.(jpe?g|png|gif)$/)
// (/(?:\/|^)[^.\/]+$/)

// (/^(.+)\/([^\/]+)$/)