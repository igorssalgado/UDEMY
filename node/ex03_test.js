const s1 = require('./ex03_singleton');
const s2 = require('./ex03_singleton');

const s  = () => s1.exibirProximo();
const ss  = () => s2.exibirProximo();
ss();
s();
ss();
s();

