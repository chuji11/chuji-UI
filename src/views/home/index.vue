<template>
  <div class="layout" style="height:100%;">
    <Layout>
      <Sider
        :style="{
          position: 'fixed',
          height: '100vh',
          left: 0,
          overflow: 'auto',
          width: '264px',
          maxWidth: '264px'
        }"
      >
        <Header style="padding:0px 0px; text-align:center">
          <!-- <img src="../../../../img/logo_white.svg" alt style="color:#fff" /> -->
        </Header>
        <Menu active-name="1-2" theme="dark" width="264" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <!-- <img src="../../../../img/专属客服icon1.svg" alt /> 专属客服 -->
            </template>
            <MenuItem name="1-1" to="/home/chat">服务窗口</MenuItem>
            <MenuItem name="1-2" to="/home/duany">知识库</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <!-- <img src="../../../../img/system.svg" alt /> 系统管理 -->
            </template>
            <MenuItem name="2-1" to="/home/pre">专属客服设置</MenuItem>
            <MenuItem name="2-2" to="/home/role">角色权限</MenuItem>
            <MenuItem name="2-3" to="/home/setting">数据权限</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
    </Layout>
    <Layout style="height:100%;">
      <Header
        :style="{
          background: '#fff',
          boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',
          display: 'flex',
          justifyContent: 'space-between'
        }"
      >
        <Breadcrumb :style="{ marginLeft: '264px', display: 'inline-block' }">
          <BreadcrumbItem>首页</BreadcrumbItem>
          <BreadcrumbItem>专属客服</BreadcrumbItem>
          <BreadcrumbItem>服务窗口</BreadcrumbItem>
        </Breadcrumb>
        <div>
          <Dropdown trigger="click" style="margin-right: 76px;">
            <span style="fontr-size:16px;">
              前海壹号
              <Icon type="ios-arrow-down"></Icon>
            </span>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <span>
            <span style="font-size:16px;">张西西</span>
            <!-- <img src="../../../../img/缩小图片图标.svg" alt /> -->
          </span>
        </div>
      </Header>
      <Content
        style="margin:16px 16px 16px 264px; height:92.6%; overflow: hidden"
      >
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  neme: "Home",
  methods: {}
};
</script>

<style lang="less" scoped></style>
