
Services running from [PM2](https://github.com/Unitech/pm2)

pm2 start server
pm2 stop server

pm2 start http-master -x -i 1 -- --config "http-master.conf"

pm2 start all
pm2 stop all

pm2 list
pm2 monit

it *should* now be configured to autorun on boot

# Proxy
proxy is [http-master](https://github.com/virtkick/http-master)

install -g http-master

it can do https

config is in etc/http-master.conf

# Authentication
using basic auth via [http-auth](https://github.com/gevorg/http-auth)
