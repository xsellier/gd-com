#tcp.gd
extends SceneTree

var connection = null
var peerstream = null
var test = null

func _init():
	print("Start client TCP")
	# Connect
	connection = StreamPeerTCP.new()
	connection.connect_to_host("127.0.0.1", 8080)
	peerstream = PacketPeerStream.new()
	peerstream.set_stream_peer(connection)
	peerstream.put_var([12,13,14,15])

	while(true):
	    if connection.is_connected_to_host() && connection.get_available_bytes() >0:
            test = connection.get_var()
            print(typeof(test))
            print(test)
            quit()
