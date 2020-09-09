const fs = require("fs");
const path = require("path");
const util = require('util');

const mainAssetsDirectory = "../assets";
const publicAssetsDirectory = "../../public/assets";

// #1, retrieve the files
function getFiles (directory) {
    // Instead of fs.readdir, which is asynchronous, use the synchronous variant
    let allItems = fs.readdirSync(directory);

    let fullPaths = allItems.map(function(item) {
        // path.join is a function that promises to add the right amount of slashes between each of the parts you give it
        // If you do path.join('a///', '/b', 'c'), it will neatly make a/b/c
        return path.join(directory, item);
    });

    let filesOnly = fullPaths.filter(function(fullPath) {
        return fs.statSync(fullPath).isFile();
    });

    let filesUnix = filesOnly.map(function(file) {
        return file.replace(/\\/g, "/");
    })

    return filesUnix;
}

// #2. dig in those folders for your data, such as the scenarios and global stats
function getImages (filePaths) {
    let images = {};

    filePaths.forEach(path => {
        images[path.split('/').pop()] = `require('${path}')`;
    });

    return images;
}

// #3. save the data as JS files
function writeToJSFile (filename, object) {
    // eslint-disable-next-line no-undef
    fs.writeFileSync("./" + filename + ".js", "const " + filename + " = " + util.inspect(object), 'utf8', function(err) {
        if (err) {
            console.log("An error occured while writing JS Object to File.");
            return console.log(err);
        }

        console.log("JS file " + filename + ".js" + " has been saved.");
    });
}

// Analyze results
console.log([...getFiles(mainAssetsDirectory), ...getFiles(publicAssetsDirectory)]);
filePaths = [...getFiles(mainAssetsDirectory), ...getFiles(publicAssetsDirectory)];
console.log(getImages(filePaths));
const images = getImages(filePaths);

// Save data
writeToJSFile("images", images);