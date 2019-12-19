const path = require('path');
// Pode ser que o windows não entenda a /, o path vai traduzir isso.

module.exports = {
// Utilizado para gerar o código babel, entry e output
    entry: path.resolve(__dirname, 'src', 'index.js'),
    // Cada vez que é adicionado a vírgula, seria como se fosse uma barra.
    output: {
    //Onde vai ser jogado o Bundle.
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
// Responsável por atualizar o código automaticamente.
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
// Regra pra pegar apenas arquivo js.
    module: {
        rules: [
          {
            test: /\.js$/,
            // Barra antes do ponto significa exato ponto, caso n tiver vai considerar o ponto como qlq coisa.
            // $ significa que o nome deve terminar com aquilo.

            // Vai excluir o node_modules porque já tá gerando o arquivo babel.
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
          },
          {
            test: /\.css$/,
            use: [
              // Style arquivo css. vai transferir pro html dentro de uma tag style.
              { loader: 'style-loader'},
              // Css loader pode ter outros imports, tipo background url imagem
              { loader: 'css-loader'}
            ]
          },
          {
            // O I diz que é case insensitive, o ? diz que é opcional.
            test: /.*\.(gif|png|jpe?g)$/i,
            use: {
              loader: 'file-loader'
            }
          }
        ]
    }
};