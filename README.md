# node-ffmpeg
## Setup
 - Install FFMPEG sofware in your machine

## How to run
  - index.html in root will play the output of src/prepare-hls.dash
    - It includes mulitple resolutions
  - live/index.html will play the live that is being transmited throuw OBS Software
    - You must run src/index.live to enable live server
    - You must setup/connect OBS to live server:
      - Stream Type : Custom Streaming Server
      - URL : rtmp://localhost/live

## Condiderations
 - DRM widevine (dash/mpd): it doesnt work in ios
 - DRM Fairplay (hls/ts): only works on ios
 - DRM - stream 0 / 1 / 2, and encrypted data
 - If you use DRM and you have changed the DRM key, you must regenerate the whole packaging files. The besy way is to use package on the fly.

