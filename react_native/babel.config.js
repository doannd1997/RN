module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": "./res",
            "rootPathPrefix": "~r/"
          },
          {
            "rootPathSuffix": "./src",
            "rootPathPrefix": "~s/"
          },
        ]
      }
    ]
  ]
};
