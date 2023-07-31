import { spawn } from 'node:child_process';

const ffmpegProcess = spawn('ffmpeg', [
  '-i', '../contents/node.mp4',
  '-vf', 'scale=1280:720',
  '-c:v', 'libx264',
  '-c:a', 'aac',
  '-b:a', '128k',
  './output/output_720p.mp4'
]);

ffmpegProcess.stdout.on('data', msg => console.log(msg));

ffmpegProcess.on('error', (error) => {
  console.log(error);
});

ffmpegProcess.on('close', (event) => {
  console.log(event);
});
