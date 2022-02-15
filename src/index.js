const fs = require('fs')
const path = require('path')

function readFiles(dirname, newDirname) {
    console.log(dirname)
    fs.readdir(dirname, function(err, filenames) {
        if(err) {
            throw err
        }
        
        filenames.forEach(function(filename) {
            if(filename.includes("wall2") || filename.includes("glassFrost") || filename.includes("glassgradation") || filename.includes("glassrushed") || filename.includes(" ")) {
                console.log("🚀 ~ filename", filename)
                console.log("dirname ", dirname)
                const oldPath = dirname + "/" + filename
                let newFilename = ""
                if(filename.includes("wall2")) {
                    console.log("wall2");
                    newFilename = filename.replace("wall2", "wall")
                } else if(filename.includes("glassFrost")) {
                    console.log("glassFrost");
                    newFilename = filename.replace("glassFrost", "glass_Frost")
                } else if(filename.includes("glassgradation")) {
                    console.log("glassgradation");
                    newFilename = filename.replace("glassgradation", "glass_gradation")
                } else if(filename.includes("glassrushed")) {
                    console.log("glassrushed");
                    newFilename = filename.replace("glassrushed", "glass_rushed")
                } 
                
                if(filename.includes(" ")) {
                    console.log("extra space");
                    newFilename = filename.replace(/\s/g, "_");
                }
                console.log("🚀 newFilename", newFilename)
                
                
                
                const newPath = newDirname + "/" + newFilename
                console.log("🚀 oldPath", oldPath)
                console.log("🚀 newPath", newPath)
                fs.rename(oldPath, newPath, function(err) {
                    console.log( err);
                })
            } else {
                console.log('else');
                return
            }
        })
    })
}

readFiles(__dirname + "/files", __dirname + "/files")