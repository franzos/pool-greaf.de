function BUILD_PROJECT {
  mkdir -p ./assets/css

  node_modules/.bin/gulp

  mkdir -p ./assets/images/cover
  cp ./src/images/cover/* ./assets/images/cover/
  cd ./assets/images/cover/
  mogrify -resize 2560x1000^ -gravity Center -crop 2560x1000+0+0 +repage -quality 80 *.jpg
  cd ../../../

  mkdir ./assets/images/general
  cp ./src/images/general/* ./assets/images/general/
  cd ./assets/images/general/
  mogrify -resize 1000x1000^ -gravity Center -crop 1000x1000+0+0 +repage -quality 80 *.jpg
  cd ../../../
}

BUILD_PROJECT