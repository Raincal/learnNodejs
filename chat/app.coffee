express = require 'express'
path = require 'path'
io = require 'socket.io'
router = express.Router()

app = express()
server = require('http').Server(app)
app.use express.static(path.join(__dirname,'public'))
app.set 'views', path.join(__dirname, 'views')
app.set 'view engine', 'ejs'

socketIO = io(server)
roomInfo = {}

socketIO.on 'connection', (socket) ->
  url = socket.request.headers.referer
  splited = url.split '/'
  roomID = splited[splited.length - 1]
  user = ''

  socket.on 'join', (username) ->
    user = username
#    将用户昵称加入房间名单中
    roomInfo[roomID] = [] if !roomInfo[roomID]
    roomInfo[roomID].push user

#    加入房间
    socket.join roomID

#    通知房间内人员
    socketIO.to roomID
      .emit 'sys', user + '加入了房间', roomInfo[roomID]
    console.log user + '加入了房间' + roomID

  socket.on 'leave', ->
    socket.emit 'disconnect'

  socket.on 'disconnect', ->
#    从房间名单中移除
    index = roomInfo[roomID].indexOf user
    roomInfo[roomID].splice index, 1 if index != -1
#    退出房间
    socket.leave roomID
    socketIO.to roomID
      .emit 'sys', user + '退出了房间', roomInfo[roomID]
    console.log user + '退出了房间' + roomID

  socket.on 'message', (msg) ->
    if roomInfo[roomID].indexOf(user) == -1
      return false
    socketIO.to roomID
      .emit 'msg', user, msg

router.get '/room/:roomID', (req, res) ->
  roomID = req.params.roomID

  res.render 'room', {
    roomID: roomID
    users: roomInfo[roomID]
  }

app.use '/', router

server.listen 3000, ->
  console.log 'server listening on port 3000'