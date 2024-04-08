# Pool- und Wellness MANUFAKTUR Gräf

Welcome!

## Development

Install:

```bash
guix shell node pnpm graphicsmagick imagemagick ruby@2 bundler make gcc-toolchain@12 libxml2 libxslt pkg-config libsass python
# bundle config build.nokogiri --use-system-libraries
BUNDLE_PATH=.bundler bundle install
pnpm install
```

Build:

```bash
BUNDLE_PATH=.bundler bundle exec jekyll build -d .site
```

Watch:

```bash
BUNDLE_PATH=.bundler bundle exec jekyll serve -d .site
```


## Deployment

```bash
bash deploy.sh
```

For manual image compilation, run something like `mogrify -resize 2560 *.jpg` in the target folder.