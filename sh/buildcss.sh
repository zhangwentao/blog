LESS_PATH=../_stasrc/less/
CSS_FILE=../static/css/main.css
echo '' > $CSS_FILE
lessc -x ${LESS_PATH}reset.less > $CSS_FILE
lessc -x ${LESS_PATH}main.less >> $CSS_FILE
lessc -x ${LESS_PATH}syntax.less >> $CSS_FILE
