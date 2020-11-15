cmd_Release/libgrpc.a := ln -f "Release/obj.target/libgrpc.a" "Release/libgrpc.a" 2>/dev/null || (rm -rf "Release/libgrpc.a" && cp -af "Release/obj.target/libgrpc.a" "Release/libgrpc.a")
