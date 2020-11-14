cmd_Release/libares.a := ln -f "Release/obj.target/libares.a" "Release/libares.a" 2>/dev/null || (rm -rf "Release/libares.a" && cp -af "Release/obj.target/libares.a" "Release/libares.a")
