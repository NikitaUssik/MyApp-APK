module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            App: './App', // Здесь вы создаёте алиас 'App', который ссылается на './App'
          },
        },
      ],
    ],
  };
  