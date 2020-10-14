import socketManager from "./../../../src/core/managers/socket"

test("Get Room Type should return adequat values", () => {
    expect(socketManager.getRoomType('room')).toBe('room')
    expect(socketManager.getRoomType()).toBe(null)

    const room = socketManager.getRoomType(['aclRoom', 'rOle'])
    expect(room).toBe('aclRoom')
    expect(socketManager.roomAcls[room]).toBe('ROLE')
})
