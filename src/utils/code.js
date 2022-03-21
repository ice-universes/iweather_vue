/*************************
 *       各种状态码       *
 *************************/

// 和风天气
export const qweather = {
  204: '所在地区暂无天气数据',
  404: '查询的数据或地区不存在',
  400: '参数错误',
  401: '认证错误, 请检查 key',
  403: '无权访问',
  429: '超过限定的 QPM',
  500: '接口异常',
};

// openWeather
export const openWeather = {
  400: '无效参数',
  401: '无效 key',
};

// 腾讯地图
export const qqMap = {
  110: '请求来源未被授权',
  111: '签名验证失败',
  112: 'IP 未被授权',
  113: '此功能未被授权',
  120: '此 key 每秒请求量已达到上限',
  121: '此 key 每日调用量已达到上限',
  160: 'sig 参数不支持此请求类型',
  161: 'sig 参数不支持和非 object 的 POST JSON 一起使用',
  190: '无效的 key',
  199: '此 key 未开启 webservice 功能',
  301: '缺少必要字段 key',
  311: 'key 格式错误',
  300: '缺少必要字段',
  306: '缺少参数',
  310: '参数格式错误',
  320: '参数数据类型错误',
  330: '参数长度错误',
  351: '存在不共存的参数',
  324: 'get 和 post 中的同一参数值不相同',
  326: '起终点距离过近',
  327: '附近无公交站',
  328: '无可达公交路线',
  329: '无可达火车路线',
  331: '查询条件过长',
  332: '途径点个数超过限制',
  333: '存在无法吸附的坐标点',
  335: '不支持该城市的公交查询',
  341: '缺少关键词',
  344: '附近无火车站(公交)',
  347: '查询无结果',
  348: '参数错误',
  364: '是否扩大搜索参数只能为 0 或 1',
  365: '纬度不能超过 ±90',
  366: '经度不能超过 ±180',
  373: '起终点距离超长',
  374: '起终点坐标错误',
  375: '局域网 IP 无法定位',
  377: '提供的起终点无法规划出导航线路',
  378: '提供的起终点无法规划出步行线路',
  379: '提供的起终点无法规划出公交线路',
  380: '坐标类型必须在有坐标的情况下使用',
  382: 'IP 无法定位',
  384: '提供的起终点无法规划出骑行线路',
  387: '没有对应的 POI',
  393: '没有符合条件的数据',
  394: '错误的查询条件',
  395: '传入参数不合法',
  396: '最多支持 200 个坐标点',
  397: '一对多最多支持200个坐标点',
  399: '查询关键字错误',
  400: '参数无法解码',
  402: '提交的数据格式错误',
  403: '不被支持的接口转发',
  404: '错误的请求路径',
  405: '请求方法错误, 请更正为: GET',
  406: '请求方法错误, 请更正为: POST',
  407: '不被支持的请求方法',
  408: '自定义 Referer 错误',
  500: '后端超时',
  510: '后端服务无法连接',
  520: '后端服务请求失败',
  530: '后端服务返回数据解析失败',
  531: '后端服务报错',
  600: '其他',
};
