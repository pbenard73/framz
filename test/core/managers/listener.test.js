import listener from "./../../../src/core/managers/listener"

test("Listner: All features should work", () => {
    let flag = 0

    listener.register("trigger", "other_Trigger")

    expect(JSON.stringify(Object.keys(listener.pool)) === JSON.stringify(["TRIGGER", "OTHER_TRIGGER"])).toBe(true)

    listener.subscribe("ANOther", flagValue => (flag = flagValue))

    expect(Object.keys(listener.pool).length).toBe(3)

    expect(listener.pool["ANOTHER"].length).toBe(1)

    listener.trigger("NOTHING SHOUDL APPEND", null)

    listener.trigger("ANOTHER", 5)

    expect(flag).toBe(5)
})
