<template>
  <div class="service-setting">
    <Button
      @click="
        () => {
          addModel = true;
        }
      "
      >新增</Button
    >
    <Table
      :stripe="true"
      :columns="columns"
      @on-row-click="showEditModal"
      :data="data"
    ></Table>
    <!-- 新增 -->
    <Modal
      v-model="addModel"
      title="新增"
      @on-ok="handleOk"
      @on-cancel="handleCancel"
    >
      <Form ref="formValidate" :model="addForm" :label-width="80">
        <FormItem label="头像 :" prop="via">
          <div
            class="demo-upload-list"
            v-for="(item, index) in uploadList"
            :key="index"
          >
            <template v-if="item.status === 'finished'">
              <img :src="item.url" />
            </template>
            <template v-else>
              <Progress
                v-if="item.showProgress"
                :percent="item.percentage"
                hide-info
              ></Progress>
            </template>
          </div>
          <Upload
            ref="upload"
            :show-upload-list="false"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            :on-progress="handleProgress"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block;width:58px;"
          >
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
        </FormItem>
        <FormItem label="名称 :" prop="name">
          <Input v-model="addForm.name" placeholder="Enter your name" />
        </FormItem>
      </Form>
      <p class="tips">暖阳下，盈芬芳，谁家的姑娘</p>
    </Modal>

    <!-- 编辑 -->
    <Modal v-model="editModel" title="编辑" @on-ok="handleOk">
      <Form :model="editForm" :label-width="80">
        <FormItem label="所属 :" prop="include">
          <Select v-model="editForm.include">
            <Option
              :value="option.value"
              v-for="option in includeOptions"
              :key="option.value"
              >{{ option.label }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="属性 :" prop="attr"> </FormItem>
        <FormItem label="头像 :" prop="icon"> </FormItem>
        <FormItem label="名称 :" prop="name">
          <Input v-model="editForm.name" placeholder="请输入名称" />
        </FormItem>
        <FormItem label="关联账号 :" prop="account">
          <Input v-model="editForm.account" placeholder="请输入名称" />
          <Button @click="addInput">请添加关联账号</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "Pre",
  data() {
    return {
      uploadList: [],
      addForm: {
        via: "",
        name: "暖阳下"
      },
      editForm: {
        include: ""
      },
      includeOptions: [
        {
          value: "暖阳下",
          label: "暖阳下"
        },
        {
          value: "暖阳",
          label: "暖阳"
        },
        {
          value: "暖阳1",
          label: "暖阳1"
        }
      ],
      addModel: false, // 新增
      editModel: false, // 编辑的modal
      columns: [
        {
          title: "登录次数",
          key: "time"
        },
        {
          type: "html",
          title: "头像",
          key: "icon"
        },
        {
          title: "状态",
          key: "status"
        },
        {
          title: "属性",
          key: "attr"
        },
        {
          title: "所属",
          key: "include"
        },
        {
          title: "名称",
          key: "name"
        },
        {
          title: "关联账号",
          key: "account"
        }
      ],
      data: [
        {
          time: "1",
          icon: "<img src='https://www.veer.com/topic/926/'><img>",
          status: "在线",
          attr: "物业",
          include: "物业-卓越世纪中心",
          name: "客服部",
          account: "18815265107 林妹妹"
        },
        {
          time: "1",
          icon: "<img src='https://www.veer.com/topic/926/'><img>",
          status: "在线",
          attr: "物业",
          include: "物业-卓越世纪中心",
          name: "客服部",
          account: "18815265107 林妹妹"
        },
        {
          time: "1",
          icon: "<img src='https://www.veer.com/topic/926/'><img>",
          status: "在线",
          attr: "物业",
          include: "物业-卓越世纪中心",
          name: "客服部",
          account: "18815265107 林妹妹"
        }
      ]
    };
  },

  methods: {
    handleOk() {
      this.addModel = false;
    },
    handleCancel() {
      this.addModel = false;
    },
    handleProgress(event, file, fileList) {
      this.uploadList = fileList;
    },
    showEditModal(item, index) {
      this.editModel = true;
      console.log(item);
    },
    addInput() {}
  }
};
</script>

<style lang="less" scoped>
.service-setting {
  font-size: 14px;
  color: #333333;
  .tips {
    font-size: 10px;
    color: #666666;
  }
  /deep/ .ivu-modal-content {
    /deep/ .ivu-modal-footer {
      background: #f1f1f1;
    }
  }
}
</style>
