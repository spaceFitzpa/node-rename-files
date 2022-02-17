
const fs = require('fs')

function readFiles(dirname, newDirname) {
    console.log(dirname)

    function jsonReader(filePath, cb) {
        fs.readFile(filePath, (err, fileData) => {
            if (err) {
                return cb && cb(err)
            }
            try {
                const object = JSON.parse(fileData)
                return cb && cb(null, object)
            } catch(err) {
                return cb && cb(err)
            }
        })
    }

    const configPath = '/Users/louie/code/3M/3m-csd-material-visualizer/src/json/config-materials.json'
    jsonReader(configPath, (err, materials) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(materials[0].slug) // => "Infinity Loop Drive"
        
        materials.forEach((material) => {
            console.log(typeof material.slug)
            console.log(typeof material.order_url)
            try{
                if(material.slug.includes("_")) {
                    material.slug = material.slug.replace(/_+/g, "-")
                }
            } catch(err) {
                console.error('material.slug type expected string but got', typeof material.slug)
            }
            try{
                if(material.order_url.includes("_")) {
                    material.order_url = material.order_url.replace(/_+/g, "-")
                }
            } catch(err) {
                console.error('material.order_url type expected string but got', typeof material.order_url)
            }

        })


        fs.writeFile(configPath, JSON.stringify(materials, null, 2), (err) => {
            if (err) console.log('Error writing file:', err)
        })
    })
}

// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "window", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "window")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "cut_graphic", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "cut_graphic")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "floor", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "floor")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "furniture", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "furniture")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "glass", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "glass")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "wall", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "wall")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "wall_2", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/hotel/' + "wall_2")

// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "window", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "window")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "cut_graphic", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "cut_graphic")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "floor", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "floor")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "furniture", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "furniture")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "glass", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "glass")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "wall", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "wall")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "ceiling", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/office/' + "ceiling")

// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "window", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "window")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "cut_graphic", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "cut_graphic")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "floor", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "floor")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "furniture", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "furniture")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "glass", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "glass")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "wall", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "wall")
// readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "ceiling", '/Users/louie/code/3M/3m-csd-material-visualizer/assets/images/retail/' + "ceiling")


readFiles('/Users/louie/code/3M/3m-csd-material-visualizer/src/json/' + "config-materials.json", '/Users/louie/code/3M/3m-csd-material-visualizer/src/json/' + "config-materials.json")