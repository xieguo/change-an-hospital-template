<?php

header('content-type:application/json;charset=utf-8');

$citys = [
    [
        "value"   => "all",
        "text"    => "不限",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "79",
        "text"    => "广州",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "81",
        "text"    => "深圳",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "102",
        "text"    => "珠海",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "80",
        "text"    => "佛山",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "117",
        "text"    => "东莞",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "82",
        "text"    => "汕头",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "104",
        "text"    => "江门",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "119",
        "text"    => "中山",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "107",
        "text"    => "茂名",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "115",
        "text"    => "阳江",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "108",
        "text"    => "肇庆",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "110",
        "text"    => "惠州",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "105",
        "text"    => "湛江",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "103",
        "text"    => "韶关",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "116",
        "text"    => "清远",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "111",
        "text"    => "梅州",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "113",
        "text"    => "河源",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "121",
        "text"    => "揭阳",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "120",
        "text"    => "潮州",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "112",
        "text"    => "汕尾",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "122",
        "text"    => "云浮",
        "backUrl" => null,
        "code"    => null,
    ],
];

echo json_encode($citys);
