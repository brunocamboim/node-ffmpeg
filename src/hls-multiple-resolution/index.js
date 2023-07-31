import ffmpeg from 'fluent-ffmpeg';

ffmpeg('/Users/brunocamboim/Documents/Estudos/node-ffmpeg/contents/node.mp4')
  .outputOptions([
    '-codec: copy',
    '-hls_time 2',
    '-hls_playlist_type vod',
    '-hls_base_url http://localhost:8080/',
    '-hls_segment_filename ./output/stream_%v/data%02d.ts',
    '-master_pl_name ./output/master1.m3u8'
    // '-var_stream_map "v:0,a:0 v:1,a:1 v:2,a:2" ./output/stream_%v.m3u8'
  ])
  .output('/Users/brunocamboim/Documents/Estudos/node-ffmpeg/src/hls-multiple-resolution/output/output.m3u8')
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Processing finished !');
  })
  .run();