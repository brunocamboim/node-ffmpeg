import ffmpeg from 'fluent-ffmpeg';

ffmpeg('/Users/brunocamboim/Documents/Estudos/node-ffmpeg/contents/node.mp4')
  .outputOptions([
    '-hls_time 2', // tempo do segmento
    '-hls_playlist_type vod',
    '-hls_base_url http://localhost:8080/',
    '-hls_segment_filename ./output/stream_%v/data%02d.ts'
  ])
  .output('/Users/brunocamboim/Documents/Estudos/node-ffmpeg/src/hls-one-resolution/output/output.m3u8')
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Processing finished !');
  })
  .run();