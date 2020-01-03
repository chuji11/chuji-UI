<template>
  <div class="data-authority">
    <div class="data-authority-side">
      <!-- <div class="data-authority-side_title">用户<Button>新增</Button></div> -->
      <List border>
        <div class="data-authority-side_title" slot="header">
          用户<Button @click="showAddModal">新增</Button>
        </div>
        <ListItem>
          <span class="phone">1881239302</span>
          <span class="name">雏鸡</span>
        </ListItem>
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
      </List>
    </div>
    <div class="data-authority-content">
      <div class="title">
        数据权限
        <span class="tips">有数据的用户才具有角色权限的浏览权限、操作权限</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataAuthority",

  data() {
    return {
      addModal: false
    };
  },

  methods: {
    showAddModal() {
      this.addModal = true;
    }
  }
};
</script>

<style lang="less" scoped>
.data-authority {
  padding: 2%;
  background: #ffffff;
  overflow: hidden;
  &-side {
    float: left;
  }
  &-content {
    float: left;
  }
}
</style>
