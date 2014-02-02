
const prr = require('prr')
    , fs = require('graceful-fs')
    , path = require('path')
    , mime = require('mime')
    , fm = require('front-matter')

module.exports = read
module.exports.ctor = Page

// Async read and instantiate a page from a file
function read(src, basedir, callback){
  var page = new Page(src, basedir)

  page.read(callback)
}

/*

Attributes:

* src: the original file path
* meta: the extracted front-matter
* content: unrendered file contents with the front-matter removed
* content-type: the content-type of the page, can be defined in the meta
* url: the url of the page
* out: full destination path, determined by resovling the build-dir and the url
* etag: unique id for the entity for proper http caching
* last-modified: last-modified obvs.

*/

function Page(src, basedir){
  var page = this

  prr(page, { src: src, basedir: basedir }, { enumerable: true })

  Object.defineProperties(page, { url: { get: url }
  , name: { get: name }
  , mime: { get: contentType }
  })
}

Page.prototype.read = function(callback){
  var page = this

  return fs.readFile(page.src, 'utf8', onReadFile)

  function onReadFile(err, data){
    if (err) return callback(err)

    var extraction = fm(data)

    page.meta = extraction.attributes
    page.content = extraction.body

    callback(null, page)
  }
}

Page.prototype.is = function(type){
  return mime.lookup(this.src) === type
}

//////// getters

function contentType(){
  var page = this
    , override = page.meta['content-type']
    , converted = override || mime.lookup('.html')

  return page.is('text/x-markdown') ? converted : mime.lookup(page.src)
}

function name(){
  var page = this
    , src = page.src
    , basedir = page.basedir

  return src.replace(basedir, '')
}

function url(){
  var page = this
    , name = page.name
    , extension = path.extname(page.src)
    , translated = '.' + mime.extension(page.mime)

  return name.replace(extension, translated)
}

