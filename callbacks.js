function do_homework(callback){
    console.log(`Doing home work... Solving tricky problem`);
    console.log(`Finally, solved`);
    callback();
}
function copy_homework(){
    console.log(`Copy homework from friend's notes`);
}
do_homework(copy_homework);