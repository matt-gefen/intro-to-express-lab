const songs = [
  {title: 'Content', lyric: 'But look I made you some content!', playing: true, _id: 12345},
  {title: 'Comedy', lyric: 'If you start to smell burnt toast you\'re having a stroke or overcooking your toast.',playing: false, _id: 67891},
  {title: 'Welcome to the Internet', lyric:'Welcome to the internet! Hold on to your socks!' ,playing: false, _id: 56789},
]

const find = (conditions, callback) => {

  try {
    if(!(conditions instanceof Object)) {
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, songs)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export {
  find
}