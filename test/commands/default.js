// var should = require('should')
//   , path = require('path')
//   , haiku = require('../../lib/haiku/index.js')
//   , bin = path.join(haiku.directories, 'bin', 'haiku')
//   , exec = require('child_process').exec
//   , utile = require('utile')
//   , _ = require('underscore');
// ;
//
// describe('haiku # command', function(){
//   var command
//   ;
//
//   describe('# with no command or options', function(){
//     before(function(done){
//       exec(bin, function(error, stdout, stderr){
//         command = { error: error
//         , stdout: stdout
//         , stderr: stderr
//         };
//
//         done();
//       });
//     });
//
//     it('should not crash', function(){
//       should.not.exist(command.error);
//     });
//
//     it('should not spill anything to stderr', function(){
//       command.stderr.should.be.empty;
//     });
//
//     it('should display the help', function(){
//       var commands = utile.requireDirLazy(haiku.directories.commands)
//       ;
//
//       command.stdout.should.not.be.empty;
//       command.stdout.should.include('Usage: haiku [options] [command]')
//       command.stdout.should.include('build');
//       command.stdout.should.include('deploy');
//       command.stdout.should.include('server');
//     });
//   }); // describe('# with no command or options', ...
//
//   describe('--help', function(){
//     var command
//     ;
//
//     before(function(done){
//       exec(bin + ' --help', function(error, stdout, stderr){
//         command = { error: error
//         , stdout: stdout
//         , stderr: stderr
//         };
//
//         done();
//       });
//     });
//
//     it('should not crash', function(){
//       should.not.exist(command.error);
//     });
//
//     it('should not spill anything to stderr', function(){
//       command.stderr.should.be.empty;
//     });
//
//     it('should show the default help', function(){
//       command.stdout.should.not.be.empty;
//       command.stdout.should.include('Usage: haiku [options] [command]')
//       command.stdout.should.include('build');
//       command.stdout.should.include('deploy');
//       command.stdout.should.include('server');
//     });
//   }); // describe('--help', ...
// }); // describe('→ haiku', ...