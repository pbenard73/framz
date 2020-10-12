import App from "./../src/app"

test("App Router", () => {
    App.get("/", () => {})
        .post("/", () => {})
        .put("/", () => {})
        .delete("/", () => {})
        .use("/", () => {})
        .addRouter({})
        .addPublic({})

    expect(App.routers.length).toBe(5)
    expect(App.uses.length).toBe(1)
    expect(App.publicFolders.length).toBe(1)
})
