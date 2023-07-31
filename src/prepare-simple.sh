ffmpeg \
  -i ./contents/flutter.mp4 \
  -vf "scale=1280:720" \
  -c:v libx264 \
  -c:a aac \
  -b:a 128k \
  ./output/output_720p.mp4
