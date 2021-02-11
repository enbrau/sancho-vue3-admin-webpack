export default {
  language: {
    name: '中文(繁體)'
  },
  common: {
    login: '登入',
    sid: '用戶編號',
    username: '用戶名',
    nickname: '姓名',
    password: '密碼',
    confirm: '確認',
    submit: '提交',
    cancel: '取消',
    execute: '執行',
    reset: '重置',
    quit: '退出',
    name: '名稱',
    search: '搜索',
    import: '導入',
    export: '導出',
    add: '新增',
    operations: '操作',
    edit: '編輯',
    delete: '刪除',
    clear: '清除',
    select: '選擇',
    refresh: '刷新',
    save: '保存',
    tips: '提示',
    alert: '預警',
    desc: '說明',
    remark: '備註',
    status: '狀態',
    type: '類型',
    address: '地址',
    mobile: '手機',
    email: '電郵',
    tel: '電話',
    fax: '傳真',
    website: '網站',
    zipcode: '郵編',
    no_data: '沒有數據',
    true: '是',
    false: '否',
    sort: '排序',
    hidden: '可見',
    history: '歷史',
    impersonate: '扮演'
  },
  menu: {
    Dashboard: '首頁',
    Components: '組件庫',
    components: {
      QrCode: '二維碼',
      Icons: '圖標',
      Coder: '代碼編輯器'
    },
    Demo: '應用開發示例',
    demo: {
      CURD: '基礎增刪改查'
    },
    Guide: '開發指南',
    guide: {

    },
    DevTools: '開發者工具',
    devtools: {
      JWTViewer: 'JWT 查看器',
      TSConvertor: '繁簡體轉換',
      Encryptor: '加解密工具'
    },
    Documents: '文檔中心',
    documents: {
      List: '文檔檢索'
    },
    System: '系統管理',
    system: {
      Users: '用戶管理',
      Roles: '角色管理',
      Orgs: '機構管理',
      Resources: '資源管理',
      Dict: '字典管理',
      Params: '系統參數管理',
      Caches: '緩存管理',
      Crons: '計劃任務管理',
      IpList: 'IP黑白名單',
      Operations: '操作日誌',
      Logs: '系統日誌',
      Alerts: '系統預警'
    }
  },
  system: {
    source: '來源',
    datetime: '時間',
    separator: '至',
    startTime: '開始時間',
    endTime: '結束時間',
    User: '用戶',
    user: {
      empId: '員工號',
      isManager: '主管'
    },
    Role: '角色',
    role: {
      basic_info: '基本信息',
      basic_info_hint: '設置角色的名稱、編碼以及說明。其中編碼可以包含小寫字母、數字以及下劃線，並且不可重復',
      menu_hint: '賦予角色菜單訪問權限',
      permission_hint: '賦予角色特殊權限',
      user_hint: '賦予用戶當前角色'
    },
    Org: '機構',
    org: {
      orgName: '名稱',
      orgId: '編碼',
      orgShortName: '簡稱'
    },
    Menu: '菜單',
    menu: {
      info: '菜單詳情',
      title: '菜單名稱',
      icon: '菜單圖標',
      path: '菜單路徑',
      permission: '權限',
      parentMenu: '父菜單',
      addChildMenu: '添加子菜單'
    },
    Permission: '權限',
    permission: {
      code: '編碼',
      name: '名稱'
    },
    Dict: '字典',
    dict: {
      name: '碼值',
      count: '數量',
      label: '顯示值',
      codeTypeName: '類型名稱',
      codeType: '類型',
      pCodeType: '父類型',
      code: '代碼',
      codeValue: '代碼值',
      pCode: '父代碼'
    },
    Cache: '緩存',
    cache: {
      name: '緩存名稱',
      key: '緩存鍵',
      val: '緩存值',
      size: '緩存數量',
      evict: '清除',
      refresh_time: '刷新時間'
    },
    schedule: {
      task: '計劃任務',
      runner: '執行器',
      cron: '執行時間',
      last: '上次執行',
      time: '執行耗時',
      result: '執行結果',
      alert: '執行報告'
    },
    ipList: {
      black: '黑名單',
      white: '白名單'
    },
    operations: {
      text: '標題/內容/IP',
      datetime: '操作時間',
      username: '操作人員',
      title: '觸發事件',
      content: '事件內容'
    }
  },
  tips: {
    is_required: '必須輸入',
    is_email: '必須是合法的郵箱地址',
    is_mobile: '必須是合法的11位手機號',
    sid_exists: '用戶SID已經存在！',
    username_exists: '用戶名已經存在！',
    copy_success: '復制成功！',
    copy_failure: '復制失敗！',
    confirm_delete: '確定要刪除 {name} 嗎？',
    confirm_delete_title: '提示',
    confirm_evict_cache: '確定要刪除 {name} 下的全部緩存？',
    confirm_evict_cache_by_key: '確定要刪除緩存 {name} 嗎？',
    submit_success: '{name} 信息保存成功！',
    submit_cancel: '{name} 信息已取消保存！',
    delete_success: '{name} 信息刪除成功！',
    delete_cancel: '{name} 信息已取消刪除！',
    save_ip_list_success: 'IP 黑白名單數據保存成功！',
    save_ip_list_failure: 'IP 黑白名單數據保存失敗！'
  }
}
