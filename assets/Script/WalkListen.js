cc.Class({
  extends: cc.Component,

  properties: {
    // foo: {
    //    default: null,
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
  },
  dataList: null,
  // use this for initialization
  onLoad: function() {
    cc.director.getCollisionManager().enabled = true;
    // cc.director.getCollisionManager().enabledDebugDraw = true;
    // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    this.touchingNumber = 0;
  },

  onCollisionEnter: function(other) {
    this.node.color = cc.Color.GREEN;
    this.touchingNumber++;
    this.dataList = JSON.parse(cc.sys.localStorage.getItem("FarmData")); //缓存机制
    this.touchingNumber--;
    if (this.touchingNumber === 0) {
      this.node.color = cc.Color.WHITE;
    }
    console.log("boom!!!");
  },

  onCollisionStay: function(other) {
    // console.log('on collision stay');
  },

  onCollisionExit: function() {
    //碰撞后的状态显示
  }

  // called every frame, uncomment this function to activate update callback
  // update: function (dt) {

  // },
});
