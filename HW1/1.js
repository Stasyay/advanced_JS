"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
  {
    title: "Master of Puppets",
    artist: "Metallica",
    year: "1986"
  },
  {
    title: "Highway to Hell",
    artist: "AC/DC",
    year: "1979"
  },
  {
    title: "Nevermind",
    artist: "Nirvana",
    year: "1991"
  }
]

const musicCollection = {
  albums,
  *[Symbol.iterator]() {
    for (const album of albums) {
      yield album
    }
  }
}

for (const album of albums) {
  console.log(album.title + " - " + album.artist + " (" + album.year + ")");
}