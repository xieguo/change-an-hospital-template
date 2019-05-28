<?php

header('content-type:application/json;charset=utf-8');

$hospitals = [
    [
        "value"   => "8e48f4bf-bc26-40bb-a7c2-e7e566a48233000",
        "text"    => "西安医学院第二附属医院[三级甲等]",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "f981627f-aa7e-40a7-9999-895377aa2031000",
        "text"    => "空军军医大学第二附属医院唐都医院[三级甲等]",
        "backUrl" => null,
        "code"    => null,
    ],
    [
        "value"   => "2a04d236-c2df-4914-a10f-35d81db31f1e000",
        "text"    => "陕西省中医医院[三级甲等]",
        "backUrl" => null,
        "code"    => null,
    ],
];

echo json_encode($hospitals);
