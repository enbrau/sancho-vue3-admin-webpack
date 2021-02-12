module.exports = 
{
  "sid": "TEST-USER-0001",
  "username": "user1",
  "nickname": "User1",
  "password": null,
  "params": {
    "ORG_ID": "TEST-DEPT-0001",
    "EMP_ID": "0001",
    "SEX": "M",
    "IP": "127.0.0.1",
    "EMAIL": "user1@test.com",
    "LAST_VISITED": 1609902630000,
    "MOBILE": "13800000001"
  },
  "perms": [
    "SUPER_ADMIN"
  ],
  "roles": [
    {
      "roleId": "TEST-ROLE-0001",
      "roleName": "超级管理员",
      "remark": "绕过权限框架，拥有一切管理权限",
      "menus": [],
      "perms": [
        "SUPER_ADMIN"
      ]
    }
  ],
  "source": "LDAP"
}
