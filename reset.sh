pm2 delete all
cd ~/thoughtcatchers.org/etc/
pm2 start http-master -x -i 1 -- --config "http-master.conf"
cd ~/thoughtcatchers.org/server/
pm2 start server.js
pm2 start upload-server.js
