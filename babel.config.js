module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "import",
            {
                libraryName: "antd",
                libraryDirectory: "lib",
                style: true,
            },
        ],
        [
            "import",
            {
                libraryName: "@ant-design/icons",
                libraryDirectory: "lib/icons",
                camel2DashComponentName: false,
            },
            "@ant-design/icons",
        ],
        [
            "import",
            {
                libraryName: "simple-framework",
                libraryDirectory: "lib/components",
                style: true,
            },
            "simple-framework",
        ],
    ]
};