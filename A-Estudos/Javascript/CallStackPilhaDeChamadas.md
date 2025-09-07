📚 Aula: Call Stack, Event Loop, Task Queue e Microtasks no JavaScript
1. Primeiro, lembre-se: O que é o JavaScript?

O JavaScript é single-threaded.
Ou seja, ele só tem um fio de execução: ele só consegue rodar uma coisa por vez.

Mas... se ele só roda uma coisa por vez, como que ele consegue lidar com timers (setTimeout), requisições HTTP (fetch) e eventos do DOM sem travar a tela inteira?

👉 É aí que entram os conceitos de Call Stack, Event Loop, Task Queue e Microtasks.

2. Call Stack (Pilha de Chamadas)

A Call Stack é onde o JS guarda a lista de funções que estão sendo executadas no momento.

📌 Regras da Call Stack:

Ela funciona como uma pilha (LIFO: Last In, First Out).

Sempre que uma função é chamada, ela é empilhada.

Quando termina, ela é desempilhada.

🔎 Exemplo:

function a() {
  console.log("A");
  b();
}
function b() {
  console.log("B");
  c();
}
function c() {
  console.log("C");
}

a();


📖 O que acontece:

Chama a() → entra na stack.

a() chama b() → entra na stack.

b() chama c() → entra na stack.

c() termina → sai da stack.

b() termina → sai da stack.

a() termina → sai da stack.

Stack em ordem:

[ a ] → [ a, b ] → [ a, b, c ] → [ a, b ] → [ a ] → []


👉 Erro famoso: se você tiver recursão infinita, a stack enche e dá o erro "Maximum call stack size exceeded".

3. Web APIs (o “mundo externo” do JS)

Como o JS é single-threaded, ele não faz tudo sozinho.
Quem ajuda são as Web APIs do navegador (ou APIs do Node.js no back-end).

Exemplo de coisas que vão para Web APIs:

setTimeout

fetch

Eventos de DOM (click, scroll, etc.)

Promise

Quando você chama uma dessas funções:

O JS manda para a Web API.

A Web API processa de forma assíncrona.

Quando terminar, ela coloca o resultado na fila certa para o Event Loop buscar.

4. Task Queue (Fila de Macrotasks)

A Task Queue (ou Callback Queue) é onde caem as Macrotasks.

📌 Macrotasks incluem:

setTimeout

setInterval

Eventos de DOM (click, input, etc.)

setImmediate (em Node.js)

Quando o Event Loop vê que a Call Stack está vazia, ele pega a próxima macrotask da fila e executa.

5. Microtasks Queue

Agora vem a parte que muita gente confunde: a fila de Microtasks.

📌 Microtasks incluem:

Promise.then / Promise.catch / Promise.finally

queueMicrotask()

process.nextTick (em Node.js)

Diferença principal:

Microtasks têm prioridade maior que as Macrotasks.

Depois que uma função da Call Stack termina, antes de pegar uma nova Macrotask, o Event Loop executa todas as Microtasks pendentes.

6. Event Loop (o maestro 🎶)

O Event Loop é o cara que faz a orquestra funcionar.

Ele funciona assim:

Verifica se a Call Stack está vazia.

Se estiver, pega todas as Microtasks da fila e executa.

Quando não houver mais Microtasks, ele pega 1 Macrotask da Task Queue e executa.

Volta ao passo 1.

📖 Em resumo:

Call Stack → executa o que está rodando agora.

Microtasks → prioridade máxima (executadas antes das próximas Macrotasks).

Macrotasks → executadas uma por vez, entre ciclos do Event Loop.

7. Exemplo prático para fixar
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");


👉 Ordem de execução:

"1" (entra na stack e roda).

"4" (ainda na stack principal).

Promise (then) é uma Microtask → fica na fila de microtasks.

setTimeout é uma Macrotask → fica na Task Queue.

Event Loop:

Call Stack terminou (1 e 4 já rodaram).

Executa Microtasks → "3".

Depois pega a Macrotask → "2".

📌 Saída:

1
4
3
2

8. Por que isso importa na prática?

Para entender por que Promises rodam antes de setTimeout.

Para evitar travamentos de interface (se você lotar a stack).

Para otimizar performance de eventos (usar microtasks quando precisa rodar algo logo após uma execução).

Para debugar códigos assíncronos complexos.

9. Analogia simples 🎭

Call Stack → O palco onde os atores estão atuando.

Web APIs → Bastidores, onde outros trabalhadores estão preparando coisas.

Task Queue (Macrotasks) → Fila de atores esperando para entrar em cena.

Microtasks → Figurantes com passe VIP que entram antes de todo mundo.

Event Loop → O diretor que controla quem entra no palco.