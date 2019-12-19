module.exports = {
    presets: [
    //-- Responsável por entender todo código react.
    
        "@babel/preset-env",
        // Partes que o navegador não entende. Import/export..
        "@babel/preset-react"
        // Coisas que o navegador não entende do react, exemplo o JSX.
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
};