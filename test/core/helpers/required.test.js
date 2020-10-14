import required from "./../../../src/core/helpers/required"

test("Required call should return an error", () => {
    const error = required("my error label")
    const isError = [null, undefined].indexOf(error) === -1 && error.constructor.name.toLowerCase() === "error"

    expect(isError).toBe(true)
    expect(error.message).toBe("Parameter 'my error label' is required")
})
