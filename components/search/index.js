/**
 * 自定义组件,注意：在组件wxss中不应使用ID选择器、属性选择器和标签名选择器。
 */
Component({
  // relations需组件双方定义方能起效
  // relations: {
  //   'relation-comp-path': {
  //     type: 'child', // 关联的目标节点应为子节点,or 'parent' 'ancestor' 'descendant'
  //     linked: function(target){}, // 每次有子组件插入时执行，target是该节点实例对象，触发在该节点attached生命周期
  //     linkChanged: function(target){}, // 每次有子组件被移动后执行，target是该节点实例对象，触发在该节点moved生命周期
  //     unlinked: function(target){}, // 每次有子组件被移时后执行，target是该节点实例对象，触发在该节点detached生命周期
  //   }
  // },
  options: {
    multipleSlots: true // 启用多slot支持
  },
  // 定义生命周期
  lifetimes: {
    created: function () { },
    attached: function () { },
    ready: function () { },
    moved: function () { },
    detached: function () { },
    error: function () { },
  },
  // 监听组件所在页面的生命周期
  pageLifetimes: {
    show: function () { },
    hide: function () { },
    resize: function () { },
  },
  // 定义组件属性
  properties: {
    // compName: {
    //   type: String,
    //   value: 'cust-comp',
    // },
  },
  // // 组件内部数据
  data: {
    lastName: '',
    firstName: '',
    name: '',
    someData: {
      age: 0,
      gender: 1,
    },
  },
  //  数据监听器 ***如果在数据监听器函数中使用 setData 设置本身监听的数据字段，可能会导致死循环，需要特别留意。
  abservers: {
    'lastName, firstName': function (lastName, firstName) {
      this.setData({
        name: lastName + firstName
      });
    },
    'someData.age': function (age) {
      // setData设置this.data.someData.age和this.data.someData都会触发
      age === this.data.someData.age
    },
    // 通配符监听
    'someData.**': function(someData){},
  },
  // // 定义组件方法
  methods: {}
});