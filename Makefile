all:
	hugo --theme=rejekts

run:
	hugo server --port 1313 --theme=rejekts --buildFuture

build-preview:
	git submodule update --init --recursive
	hugo --buildFuture --theme=rejekts
