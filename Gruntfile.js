'use strict';

module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    nodemon: {
      dev: {
        script: './src/index.js',
        options: {
          watch: ['src/index.js', 'src/server/**/*.js']
        }
      }
    },
    eslint: {
      options: {
        force: true,
        config: 'eslint.json'
      },
      target: ['./src/**/*.js']
    },
    webpack: {
      dev: {
        entry: './src/front/app/index.js',
        output: {
          path: './src/public/js/dist',
          filename: 'dist.js'
        },
        resolve: {
          extensions: ['', '.js']
        },
        module: {
          loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            }
          ]
        }
      }
    },
    watch: {
      files: ['./src/dist/js/app/**/*.js'],
      tasks: ['webpack:dev']
    }
  });
}
