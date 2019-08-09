import http from '../utils/http.js';
// 秒杀  需要每天换新的接口
// 00:00
export const home_api00=(page=1,activity_id=6283164,pageSize=15)=>http("get","/seckill.php?user_client=&action=seckill_product_list",{page:page,activity_id:activity_id,page_size:pageSize})
// 11:00 
export const home_api=(page=1,activity_id=6283165,pageSize=15)=>http("get","/seckill.php?user_client=&action=seckill_product_list",{page:page,activity_id:activity_id,page_size:pageSize})
// 16:00
export const home_api16=(page=1,activity_id=6283166,pageSize=15)=>http("get","/seckill.php?user_client=&action=seckill_product_list",{page:page,activity_id:activity_id,page_size:pageSize})
// 明天00:00
export const home_api10=(page=1,activity_id=6283180,pageSize=15)=>http("get","/seckill.php?user_client=&action=seckill_product_list",{page:page,activity_id:activity_id,page_size:pageSize})
// 明天11:00
export const home_api1111=(page=1,activity_id=6283181,pageSize=15)=>http("get","/seckill.php?user_client=&action=seckill_product_list",{page:page,activity_id:activity_id,page_size:pageSize})

// home列表      // 拼团接口无法用，改用它
export const home_list=(prem_id=20190801192050544366146870630779856)=>http("get","/h5ajax.php?action=home&img_size=h",{prem_id:prem_id})

// 品牌今日上新秒杀
export const pinmiao1=(activity_id=6283606,shop_id=7344,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
export const pinmiao2=(activity_id=6283606,shop_id=8840,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
export const pinmiao3=(activity_id=6283606,shop_id=13536,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
export const pinmiao4=(activity_id=6283606,shop_id=16475,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
export const pinmiao5=(activity_id=6283606,shop_id=20601,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
export const pinmiao6=(activity_id=6283606,shop_id=20722,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
// 品牌明日预告秒杀
export const pinmiao7=(activity_id=6283609,shop_id=7710,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
export const pinmiao8=(activity_id=6283609,shop_id=8258,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
export const pinmiao9=(activity_id=6283609,shop_id=8503,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
export const pinmiao10=(activity_id=6283609,shop_id=8859,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
export const pinmiao11=(activity_id=6283609,shop_id=10817,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})
export const pinmiao12=(activity_id=6283609,shop_id=16997,page=1,page_size=10)=>http("get","/brand_seckill.php?user_client=&show_type=3&action=brand_seckill_list",{activity_id:activity_id,shop_id:shop_id,page:page,page_size:page_size})

// 搜索
export const sousuo=()=>http("get","/h5ajax.php?action=hotword")
// 搜索接口
export const seach_api=(cityId,kw)=>http("get","./api/searchList",{cityId:cityId,kw:kw})
