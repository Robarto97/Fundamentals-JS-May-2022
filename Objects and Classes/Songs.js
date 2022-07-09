function songs(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      (this.name = name), (this.time = time);
    }
  }
  let songList = [];
  let n = arr.shift();
  let typeTarget = arr.pop();

  for (let i = 0; i < n; i++) {
    let line = arr[i].split("_");
    let typeList = line[0];
    let name = line[1];
    let time = line[2];
    let mySong = new Song(typeList, name, time);
    songList.push(mySong);
  }
  
  if (typeTarget === "all") {
    for (let song of songList) {
      console.log(song.name);
    }
  }
  for (let song of songList) {
    if (song.typeList === typeTarget) {
      console.log(song.name);
    }
  }
}

songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "all",
]);
