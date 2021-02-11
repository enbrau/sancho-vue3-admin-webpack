export default {
  language: {
    name: '中文(简体)'
  },
  common: {
    login: '登入',
    sid: '用户编号',
    username: '用户名',
    nickname: '姓名',
    password: '密码',
    confirm: '确认',
    submit: '提交',
    cancel: '取消',
    execute: '执行',
    reset: '重置',
    quit: '退出',
    name: '名称',
    search: '搜索',
    import: '导入',
    export: '导出',
    add: '新增',
    operations: '操作',
    edit: '编辑',
    delete: '删除',
    clear: '清除',
    select: '选择',
    refresh: '刷新',
    save: '保存',
    tips: '提示',
    alert: '预警',
    desc: '说明',
    remark: '备注',
    status: '状态',
    type: '类型',
    address: '地址',
    mobile: '手机',
    email: '电邮',
    tel: '电话',
    fax: '传真',
    website: '网站',
    zipcode: '邮编',
    no_data: '没有数据',
    true: '是',
    false: '否',
    sort: '排序',
    hidden: '可见',
    history: '历史',
    impersonate: '扮演'
  },
  menu: {
    Dashboard: '首页',
    Components: '组件库',
    components: {
      QrCode: '二维码',
      Icons: '图标',
      Coder: '代码编辑器'
    },
    Demo: '应用开发示例',
    demo: {
      CURD: '基础增删改查'
    },
    Guide: '开发指南',
    guide: {

    },
    DevTools: '开发者工具',
    devtools: {
      JWTViewer: 'JWT 查看器',
      TSConvertor: '繁简体转换',
      Encryptor: '加解密工具'
    },
    Documents: '文档中心',
    documents: {
      List: '文档检索'
    },
    System: '系统管理',
    system: {
      Users: '用户管理',
      Roles: '角色管理',
      Orgs: '机构管理',
      Resources: '资源管理',
      Dict: '字典管理',
      Params: '系统参数管理',
      Caches: '缓存管理',
      Crons: '计划任务管理',
      IpList: 'IP黑白名单',
      Operations: '操作日志',
      Logs: '系统日志',
      Alerts: '系统预警'
    }
  },
  system: {
    source: '来源',
    datetime: '时间',
    separator: '至',
    startTime: '开始时间',
    endTime: '结束时间',
    User: '用户',
    user: {
      empId: '员工号',
      isManager: '主管'
    },
    Role: '角色',
    role: {
      basic_info: '基本信息',
      basic_info_hint: '设置角色的名称、编码以及说明。其中编码可以包含小写字母、数字以及下划线，并且不可重复',
      menu_hint: '赋予角色菜单访问权限',
      permission_hint: '赋予角色特殊权限',
      user_hint: '赋予用户当前角色'
    },
    Org: '机构',
    org: {
      orgName: '名称',
      orgId: '编码',
      orgShortName: '简称'
    },
    Menu: '菜单',
    menu: {
      info: '菜单详情',
      title: '菜单名称',
      icon: '菜单图标',
      path: '菜单路径',
      permission: '权限',
      parentMenu: '父菜单',
      addChildMenu: '添加子菜单'
    },
    Permission: '权限',
    permission: {
      code: '编码',
      name: '名称'
    },
    Dict: '字典',
    dict: {
      name: '码值',
      count: '数量',
      label: '显示值',
      codeTypeName: '类型名称',
      codeType: '类型',
      pCodeType: '父类型',
      code: '代码',
      codeValue: '代码值',
      pCode: '父代码'
    },
    Cache: '缓存',
    cache: {
      name: '缓存名称',
      key: '缓存键',
      val: '缓存值',
      size: '缓存数量',
      evict: '清除',
      refresh_time: '刷新时间'
    },
    schedule: {
      task: '计划任务',
      runner: '执行器',
      cron: '执行时间',
      last: '上次执行',
      time: '执行耗时',
      result: '执行结果',
      alert: '执行报告'
    },
    ipList: {
      black: '黑名单',
      white: '白名单'
    },
    operations: {
      text: '标题/内容/IP',
      datetime: '操作时间',
      username: '操作人员',
      title: '触发事件',
      content: '事件内容'
    }
  },
  tips: {
    is_required: '必须输入',
    is_email: '必须是合法的邮箱地址',
    is_mobile: '必须是合法的11位手机号',
    sid_exists: '用户SID已经存在！',
    username_exists: '用户名已经存在！',
    copy_success: '复制成功！',
    copy_failure: '复制失败！',
    confirm_delete: '确定要删除 {name} 吗？',
    confirm_delete_title: '提示',
    confirm_evict_cache: '确定要删除 {name} 下的全部缓存？',
    confirm_evict_cache_by_key: '确定要删除缓存 {name} 吗？',
    submit_success: '{name} 信息保存成功！',
    submit_cancel: '{name} 信息已取消保存！',
    delete_success: '{name} 信息删除成功！',
    delete_cancel: '{name} 信息已取消删除！',
    save_ip_list_success: 'IP 黑白名单数据保存成功！',
    save_ip_list_failure: 'IP 黑白名单数据保存失败！'
  }
}
