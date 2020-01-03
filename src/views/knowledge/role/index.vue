<template>
  <div class="authority-warp">
    <Tabs type="card">
      <TabPane label="数据权限">
        <DataAuthority></DataAuthority>
      </TabPane>
      <TabPane label="账号角色">标签二的内容</TabPane>
      <TabPane label="角色权限">标签二的内容</TabPane>
      <TabPane label="权限树">标签三的内容</TabPane>
    </Tabs>
  </div>
</template>

<script>
import DataAuthority from "./DataAuthority.vue";
export default {
  name: "Role",

  components: {
    DataAuthority
  }
};
</script>

<style scoped>
.authority-warp {
  padding: 0 10px;
}
</style>
