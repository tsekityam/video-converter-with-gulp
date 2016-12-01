# Video converter with Gulp
A simple video converter which converts `.mkv` files into `.mp4` using [gulp-fluent-ffmpeg](https://github.com/psirenny/gulp-fluent-ffmpeg)

## Prerequisites
* `node`

* `gulp`

* `ffmpeg`, with the following build configurations:     

  * `--enable-gpl`
  * `--enable-libx264`
  * `--enable-nonfree`
  * `--enable-libfdk-aac`

  (Remake: You can check the configuration by `$ ffmpeg -buildconf`)

## How to use
1. Install required node module

  `$ npm install`

1. Put all the `.mkv` file that you want to convert to `src`

1. Run gulp task to start convertion

  `$ gulp mkv_to_mp4`

The `.mkv` files in `src/` will be converted into `.mp4` files and be placed in `dest/`. File extensions of the files will be changed to `.mp4`.

e.g. The `.mp4` version of file at `src/path/video.mkv` can be found at `dest/path/video.mp4`

## License
The project is released under [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)
