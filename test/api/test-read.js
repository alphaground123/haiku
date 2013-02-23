var haiku = require('../../lib')
  , assert = require('assert')
  , path = require('path')

describe('haiku.read(name, callback)', function(){
  before(function(){
    var root = path.resolve(__dirname, '../fixtures/blog')

    haiku.reset()
    haiku.configure({ root: root })
  })

  it('reads individual pages', function(done){
    haiku.read('foo.md', function(err, page){
      if (err) return done(err)

      assert.ok(page)
      assert.ok(haiku.has('/foo.html'))
      assert.equal(page.name, 'foo.md')

      done()
    })
  })

  xit('reads all content', function(done){
    haiku.read(function(err, page){
      if (err) return done(err)

      assert.equal(page, undefined)
      assert.ok(haiku.content)
      // make sure it has all our content
      assert.ok(haiku.has('/'))
      assert.ok(haiku.has('/index.html'))
      assert.ok(haiku.has('/foo.html'))
      assert.ok(haiku.has('/bar.html'))
      assert.ok(haiku.has('/nested/baz.html'))
      assert.ok(haiku.has('/nested/quz.html'))
    })
  })

  xit('emits content when callback is missing', function(done){
    haiku
    .on('content', done)
    .read()
  })
})


// haiku
// .on('content', function(){
//   _listen.apply(module.exports, args)
// })
// .read('content')
//
// haiku.read('content', function(err, content){
//
// })
