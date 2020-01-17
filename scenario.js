let scenario = [
    [
        {
            type: "grass",
            blocks: false
        },
        {
            type: "pine-tree",
            blocks: true
        },
        {
            type: "grass",
            blocks: false
        }
    ],[
        {
            type: "grass"
        },
        {
            type: "grass"
        },
        {
            type: "grass"
        }
    ],[
        {
            type: "pine-tree"
        },
        {
            type: "pine-tree"
        },
        {
            type: "grass"
        }
    ]
]

scenario.forEach((scenarioColumn, row) => {
    scenarioColumn.forEach((tile, column) => console.log(`column: ${column}, row: ${row}: ${tile.type} and it will block you ${tile.blocks}`))
})