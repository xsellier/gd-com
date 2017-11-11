#udp.gd
extends SceneTree

var connection = PacketPeerUDP.new()
var test = null

func _init():
    print("Start client UDP")
    # Connect
    connection.set_dest_address("127.0.0.1", 9999)
    connection.put_var('test')
    while(true):
        if connection.is_listening() && connection.get_available_packet_count() >0:
            test = connection.get_var()
            print(typeof(test))
            print(str(test))
            quit()
