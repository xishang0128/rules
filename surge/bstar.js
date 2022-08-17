let body = $request.body;

body body.replace[/&sim_code=\d+/] = "&sim_code=52507";
body body.replace[/&locale=zh_CN/] = "&locale=zh_SG";
body body.replace[/&s_locale=zh-Hans_[A-Z]{2}/] = "&s_locale=zh-Hans_SG";

console.log(body)

$done({body});
