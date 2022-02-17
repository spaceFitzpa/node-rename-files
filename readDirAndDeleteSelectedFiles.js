const fs = require('fs')

function readFiles(dirname, newDirname) {
    console.log(dirname)

    fs.readdir(dirname, function(err, filenames) {
        if(err) {
            console.log("Error reading file from disk:", err)
            throw err
        }

        filenames.forEach(function(filename) {
            if(filename.includes("-2.png")) {
                console.log('duplicate found, ', filename)
                console.log("filename Type: ", typeof filename)
                // delete extra file
                fs.unlink(dirname + '/' + filename, function (err) {
                    if (err) throw err;
                    // if no error, file has been deleted successfully
                    console.log('File deleted!');
                });

            } else {
                // console.log('nothing changes needed');
                return
            }
        })
    })
}

readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "window", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "window")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "cut_graphic", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "cut_graphic")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "floor", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "floor")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "furniture", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "furniture")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "glass", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "glass")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "wall", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "wall")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "wall_2", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "wall_2")

readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "window", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "window")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "cut_graphic", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "cut_graphic")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "floor", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "floor")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "furniture", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "furniture")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "glass", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "glass")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "wall", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "wall")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "ceiling", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "ceiling")

readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "window", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "window")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "cut_graphic", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "cut_graphic")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "floor", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "floor")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "furniture", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "furniture")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "glass", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "glass")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "wall", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "wall")
readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "ceiling", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "ceiling")