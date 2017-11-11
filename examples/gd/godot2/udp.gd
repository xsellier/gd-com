#udp.gd
extends SceneTree

var connection = PacketPeerUDP.new()
var test = null

func _init():
    print("Start client UDP")
    # Connect
    connection.set_send_address("127.0.0.1", 8081)
    connection.put_var([true,false,1,2,12.3,-15.3,"test", ["test",true,false]])
    while(true):
        if connection.is_listening() && connection.get_available_packet_count() >0:
            test = connection.get_var()
            print(typeof(test))
            print(test)
            quit()
