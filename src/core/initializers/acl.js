import aclManager from "./../managers/acl"
import required from "./../helpers/required"

export default {
    setAclHierarchy: function (hierarchy = required("hierarchy")) {
        aclManager.setHierarchy(hierarchy)

        return this
    },
    addAclRole: function (roleName = required("roleName"), parent = null) {
        aclManager.addRole(roleName, parent)

        return this
    },
    init: function () {
        aclManager.prepareHierarchy()
    },
}
