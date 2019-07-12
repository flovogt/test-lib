const current_version = process.env.npm_release_version;
console.log("Current Version: "+ current_version);

if(current_version){
    console.log("PKG Version old: "+ process.env.npm_package_version);
    process.env.npm_package_version = current_version;
    console.log("PKG Version new: "+ process.env.npm_package_version);

}