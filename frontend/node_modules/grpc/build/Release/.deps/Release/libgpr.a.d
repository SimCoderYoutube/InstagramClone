cmd_Release/libgpr.a := ln -f "Release/obj.target/libgpr.a" "Release/libgpr.a" 2>/dev/null || (rm -rf "Release/libgpr.a" && cp -af "Release/obj.target/libgpr.a" "Release/libgpr.a")
