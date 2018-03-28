/*eslint-disable */
define(["mage/translate", "uiEvents", "uiLayout", "uiRegistry"], function (_translate, _uiEvents, _uiLayout, _uiRegistry) {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */
  var Uploader =
  /*#__PURE__*/
  function () {
    /**
     * Hardcoded configuration for uploader instances; to be removed in MAGETWO-89470
     * @returns {Object}
     */
    Uploader.getDefaultConfig = function getDefaultConfig() {
      return {
        allowedExtensions: "jpg jpeg gif png",
        component: "Magento_PageBuilder/js/form/element/image-uploader",
        componentType: "imageUploader",
        dataScope: "image",
        formElement: "imageUploader",
        initialMediaGalleryOpenSubpath: "wysiwyg",
        maxFileSize: "4194304",
        mediaGallery: {
          initialOpenSubpath: "wysiwyg",
          openDialogTitle: (0, _translate)("Insert Images..."),
          openDialogUrl: "/admin/cms/wysiwyg_images/index/",
          storeId: "1"
        },
        template: "Magento_PageBuilder/form/element/stage/preview/uploader/image",
        uploaderConfig: {
          url: "/admin/pagebuilder/contenttype/image_upload/"
        },
        validation: {
          "required-entry": true
        }
      };
    };
    /**
     * Id of uploader instance
     */


    /**
     * @param {String} id
     * @param {String} name - Name to use for lookup reference in registry
     * @param {Object} config
     */
    function Uploader(id, name, config) {
      if (config === void 0) {
        config = Uploader.getDefaultConfig();
      }

      this.id = void 0;
      this.name = void 0;
      this.config = void 0;
      config.id = this.id = id;
      config.name = this.name = name;
      this.config = config; // Render uploader

      this.render();
    }
    /**
     * Get registry callback reference to uploader UI component
     *
     * @returns {Function}
     */


    var _proto = Uploader.prototype;

    _proto.getUiComponent = function getUiComponent() {
      return _uiRegistry.async(this.name);
    };
    /**
     * Register callback when file is uploaded through this instance
     *
     * @param {Function} callback - callback function containing array of file objects as argument
     */


    _proto.onUploaded = function onUploaded(callback) {
      _uiEvents.on("image:uploaded:" + this.id, callback);
    };
    /**
     * Instantiate uploader through layout UI component renderer
     */


    _proto.render = function render() {
      (0, _uiLayout)([this.config]);
    };

    return Uploader;
  }();

  return Uploader;
});
//# sourceMappingURL=uploader.js.map