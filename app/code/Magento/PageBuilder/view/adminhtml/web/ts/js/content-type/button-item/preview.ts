/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import $t from "mage/translate";
import BasePreview from "../preview";

export default class Preview extends BasePreview {
    private buttonPlaceholder: string = $t("Edit Button Text");

    /**
     * Focus out of the element
     */
    private onFocusOut(): void {
        this.parent.parent.preview.isLiveEditing(null);
    }
}