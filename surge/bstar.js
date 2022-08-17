let body = $request.body;

body[/&sim_code=\d+/] = body.replace"&sim_code=52507";
body[/&locale=zh_CN/] = body.replace"&locale=zh_SG";
body[/&s_locale=zh-Hans_[A-Z]{2}/] = body.replace"&s_locale=zh-Hans_SG";

console.log(body)

$done({body});
