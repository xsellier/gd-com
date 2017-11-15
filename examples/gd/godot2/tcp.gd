#tcp.gd
extends SceneTree

var connection = null
var peerstream = null
var test = null

func _init():
	print("Start client TCP")
	# Connect
	connection = StreamPeerTCP.new()
	connection.connect("127.0.0.1", 8080)
	peerstream = PacketPeerStream.new()
	peerstream.set_stream_peer(connection)
	peerstream.put_var({
		'test': 'test',
		'vector2': Vector2(2.2, 3.3),
		'matrix': Matrix32(Vector2(2.2, 3.3), Vector2(2.2, 3.3), Vector2(2.2, 3.3))
	})

	while(true):
		if connection.is_connected() && connection.get_available_bytes() >0:
			print('GOT VALUE')
			test = connection.get_var()
			print(typeof(test))
			print(test)
			break

	quit()
