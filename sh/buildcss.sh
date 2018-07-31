LESS_PATH=../_stasrc/less/
CSS_FILE=/Users/wentao/Desktop/dist/blog.wentao.me/static/css/main.css
#echo '' > $CSS_FILE
lessc  -x ${LESS_PATH}main.less >> $CSS_FILE
