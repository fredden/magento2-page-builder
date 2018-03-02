/*eslint-disable */
define(["../../utils/delayed-promise", "../block/factory", "../config", "../event-bus", "./block"], function (_delayedPromise, _factory, _config, _eventBus, _block) {
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Buttons =
  /*#__PURE__*/
  function (_Block) {
    _inheritsLoose(Buttons, _Block);

    function Buttons() {
      return _Block.apply(this, arguments) || this;
    }

    var _proto = Buttons.prototype;

    _proto.bindEvents = function bindEvents() {
      var _this = this;

      _Block.prototype.bindEvents.call(this);

      _eventBus.on("buttons:block:mount", function (event, params) {
        if (params.id === _this.id) {
          _this.addButton();
        }
      });
    };
    /**
     * Add button-item to buttons children array
     */


    _proto.addButton = function addButton() {
      var _this2 = this;

      var createBlockPromise = (0, _factory)(_config.getInitConfig("content_types")["button-item"], this.parent, this.stage, {});
      createBlockPromise.then(function (button) {
        _this2.addChild(button);

        return button;
      }).then((0, _delayedPromise)(300)).then(function (button) {
        button.edit.open();
      }).catch(function (error) {
        console.error(error);
      });
    };

    return Buttons;
  }(_block);

  return Buttons;
});
//# sourceMappingURL=buttons.js.map