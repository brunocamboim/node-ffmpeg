import ffmpeg from 'fluent-ffmpeg';

ffmpeg('/Users/brunocamboim/Documents/Estudos/node-ffmpeg/contents/node.mp4')
  .input('/Users/brunocamboim/Documents/Estudos/node-ffmpeg/contents/obi.png')
  .complexFilter([
    'overlay'
  ])
  .output('/Users/brunocamboim/Documents/Estudos/node-ffmpeg/src/watermark/output/output.mp4')
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Processing finished !');
  })
  .run();