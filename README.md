# Cursor Color Current

se o vídeo /bg-gradient.mp4 (que está na pasta public) como fundo em tela cheia (fixed, inset-0, w-full h-full, object-cover, -z-10) da página. Em vez de deixar o vídeo rodando sozinho com autoplay, quero que você controle o progresso dele (currentTime) de acordo com o movimento do mouse do usuário na tela (video scrubbing). Calcule a posição normalizada do cursor (eixo X e Y combinados) e atualize o tempo do vídeo de forma bem suave usando interpolação (lerp / requestAnimationFrame), para que as cores pareçam dançar e deslizar organicamente conforme o mouse se move. Garanta que o vídeo tenha muted e playsInline para funcionar em todos os navegadores, e adicione um fallback de fundo na cor #F1EDE6 enquanto o vídeo carrega

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c35e5a61-8124-49ae-8839-a257690c86c9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
