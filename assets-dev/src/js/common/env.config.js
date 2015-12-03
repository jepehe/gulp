//172.26.152.176
let config =  {
    "ENV": {
        "DEV":"DEV",
        "TEST":"TEST",
        "PRO":"PRO"
    },
    "DEV":{
        "API":{
            "CBB":"http://172.26.153.45/cbbweb",
            "LANYOU":"http://172.26.153.45/lanyou",
            "LANYOU_ORIGIN": "http://e4s.stg.dongfeng-nissan.com.cn"
        },
        "CONTEXT_PATH":"http://127.0.0.1:3000",
        "ASSERT_PATH":"http://127.0.0.1:3333"
    },
    "TEST":{
        "API":{
            "CBB":"http://14.23.175.36/cbbweb",
            "LANYOU":"http://14.23.175.36/lanyou",
            "LANYOU_ORIGIN": "http://e4s.stg.dongfeng-nissan.com.cn"
        },
        "CONTEXT_PATH":"http://14.23.175.40:88/",
        "ASSERT_PATH":"http://14.23.175.40:88/"
    },
    "PRO":{
        "API":{
            "CBB":"http://fun.chebaba.com/api",
            "LANYOU":"http://mfun.chebaba.com/lanyou",
            "LANYOU_ORIGIN": "http://www.chebaba.com"
        },
        "CONTEXT_PATH":"http://mfun.chebaba.com",
        "ASSERT_PATH":"http://mfun.chebaba.com"
    }
}
