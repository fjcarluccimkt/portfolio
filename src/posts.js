// Cada post: slug (URL), date (ISO), emoji, tag y campos por idioma.
// El "body" usa Markdown simple: ## y ### para títulos, **negrita**,
// - para listas, [texto](url) para links, y líneas en blanco separan párrafos.
// Para publicar un post nuevo, copiá un objeto de este array y editalo.

export const POSTS = [
  {
    slug: "ahorrar-tokens-claude",
    date: "2026-06-20",
    emoji: "🪙",
    accent: "#7A2CA4",
    es: {
      tag: "IA · Productividad",
      title: "Cómo ahorrar tokens en Claude (y por qué tus conversaciones largas rinden peor)",
      excerpt:
        "Claude no recuerda tu conversación: la relee entera cada vez que le escribes. Por eso, cuanto más larga, más consume y peor responde. Te cuento el método de sprints que uso para trabajar mejor con cualquier IA.",
      readingTime: "4 min",
      body: `Hay una idea instalada desde que ChatGPT explotó en 2022: usar siempre la misma conversación para que la IA "mantenga el contexto". Sonaba lógico. Pero con los modelos actuales —Claude especialmente— se convirtió en un arma de doble filo.

## Cómo funciona la memoria de un modelo

Un modelo de lenguaje no recuerda nada entre mensajes. Cada vez que le escribes, relee la conversación completa desde el principio para poder responder. No consulta un resumen ni recupera lo importante: procesa todo el hilo, de nuevo, entero.

Eso tiene una consecuencia directa: cuanto más larga es la conversación, más "tokens" (las unidades con las que el modelo mide el texto) consume en cada respuesta. Y no es solo una cuestión de gasto. Cuando el hilo se satura, la calidad cae: el modelo empieza a perder el foco, mezcla instrucciones viejas con nuevas y responde peor.

## La solución: trabajar por sprints

En lugar de arrastrar una única mega-conversación durante días, trato cada sesión como un sprint corto y enfocado:

- Cuando siento que el hilo ya cumplió su objetivo, le pido un **resumen** de lo trabajado y las decisiones tomadas.
- Abro una **conversación nueva**.
- Pego ese resumen como contexto inicial.
- Sigo desde ahí, con el hilo limpio y el modelo rindiendo al máximo otra vez.

El resultado es doble: gastas menos tokens y, sobre todo, el modelo vuelve a responder con precisión porque no está cargando el peso muerto de todo lo anterior.

## El truco: que Claude te avise solo

Lo mejor es que no tienes que estar pendiente de cuándo cortar. Puedes configurarlo una sola vez en tus preferencias de usuario con una instrucción del tipo:

> "Cuando notes que el contexto de la conversación se está volviendo muy extenso y puede afectar la calidad de tus respuestas, avísame con la frase: 'Es hora de abrir un nuevo chat'."

A partir de ahí, el propio modelo te avisa cuándo conviene hacer el corte. Lo configuras una vez y te olvidas.

## Por qué me parece más que un ahorro

Al principio lo veía solo como eficiencia de tokens. Pero cambiar a sprints cortos cambió también cómo pienso los prompts: al arrancar cada hilo con un contexto comprimido, me obligo a destilar qué importa de verdad antes de escribir. Trabajas más ordenado, no solo más barato.

Y aunque el ejemplo es Claude, la lógica aplica a cualquier LLM: conversaciones cortas, contexto fresco, foco. Guárdalo, que lo vas a usar seguro.`,
    },
    en: {
      tag: "AI · Productivity",
      title: "How to save tokens in Claude (and why your long conversations perform worse)",
      excerpt:
        "Claude doesn't remember your conversation: it re-reads the whole thing every time you write. That's why the longer it gets, the more it costs and the worse it answers. Here's the sprint method I use to work better with any AI.",
      readingTime: "4 min",
      body: `There's an idea that's been around since ChatGPT blew up in 2022: always use the same conversation so the AI "keeps the context". It sounded logical. But with today's models —Claude especially— it became a double-edged sword.

## How a model's memory actually works

A language model remembers nothing between messages. Every time you write, it re-reads the entire conversation from the start in order to answer. It doesn't consult a summary or retrieve the key parts: it processes the whole thread, again, in full.

That has a direct consequence: the longer the conversation, the more "tokens" (the units the model measures text in) it consumes on every reply. And it's not just about cost. When the thread gets saturated, quality drops: the model starts losing focus, mixes old instructions with new ones, and answers worse.

## The fix: work in sprints

Instead of dragging a single mega-conversation across days, I treat each session as a short, focused sprint:

- When I feel the thread has done its job, I ask for a **summary** of the work and the decisions made.
- I open a **new conversation**.
- I paste that summary as the starting context.
- I continue from there, with a clean thread and the model performing at its best again.

The payoff is twofold: you spend fewer tokens and, above all, the model answers precisely again because it's no longer carrying the dead weight of everything before.

## The trick: let Claude flag it for you

The best part is you don't have to keep track of when to cut. You can set it up once in your user preferences with an instruction like:

> "When you notice the conversation's context is getting too long and may affect the quality of your answers, let me know with the phrase: 'Time to open a new chat.'"

From then on, the model itself tells you when it's worth breaking. Configure it once and forget about it.

## Why I see it as more than savings

At first I saw it purely as token efficiency. But switching to short sprints also changed how I think about prompts: starting each thread with a compressed context forces me to distill what really matters before writing. You work more clearly, not just more cheaply.

And while the example is Claude, the logic applies to any LLM: short conversations, fresh context, focus. Save this one — you'll use it.`,
    },
  },
  {
    slug: "pomelli-ia-marketing-pymes",
    date: "2026-02-18",
    emoji: "🍊",
    accent: "#F5A623",
    es: {
      tag: "IA · Marketing",
      title: "Google lanza Pomelli: IA que entiende tu marca",
      excerpt:
        "El nuevo experimento de Google Labs lee la identidad de una marca —colores, tono, estilo— y genera campañas coherentes en minutos. Por qué me parece una buena noticia para quienes trabajamos en marketing digital.",
      readingTime: "4 min",
      body: `Google Labs presentó **Pomelli**, una herramienta que hace algo que hasta ahora costaba horas: entender la identidad visual y verbal de una marca y generar piezas de campaña que la respetan.

## Qué hace, en concreto

Le das la URL de tu sitio o un puñado de referencias y Pomelli extrae lo que llama el "ADN de marca": la paleta de colores, la tipografía, el tono de voz y el estilo de las imágenes. A partir de ahí propone piezas —posts, banners, variaciones de copy— que no parecen sacadas de una plantilla genérica, sino de tu propia marca.

La diferencia con generar una imagen suelta en cualquier herramienta de IA es justamente esa: **coherencia**. No es "hacé un banner bonito", es "hacé un banner que se vea como los míos".

## Por qué me parece relevante

Trabajando con pymes, el cuello de botella nunca es la falta de ideas. Es el tiempo. Una inmobiliaria de barrio o una marca de moda chica no tiene un equipo de diseño esperando; tiene una persona haciendo diez cosas a la vez.

Una herramienta que respeta la identidad y acelera la bajada a piezas concretas no reemplaza el criterio: lo libera. El trabajo estratégico —qué decir, a quién, en qué momento— sigue siendo humano. Lo que se automatiza es la parte mecánica de producir diez variantes de lo mismo.

## La otra cara

No todo es entusiasmo. Cuando una herramienta facilita generar "en la voz de la marca", el riesgo es que todas las marcas empiecen a sonar parecido, porque todas usan el mismo motor. La ventaja competitiva deja de ser producir rápido —eso lo hace cualquiera— y pasa a ser tener algo genuino que decir.

Ahí es donde la estrategia de contenido recupera todo su valor. La IA te da velocidad; el criterio de qué vale la pena publicar sigue siendo tuyo.

## Lo que me llevo

Pomelli me interesa menos como novedad y más como señal de hacia dónde va el marketing: la producción se vuelve barata y la estrategia se vuelve el diferencial. Para quien ya trabaja pensando primero y produciendo después, es una buena noticia.`,
    },
    en: {
      tag: "AI · Marketing",
      title: "Google launches Pomelli: AI that understands your brand",
      excerpt:
        "Google Labs' new experiment reads a brand's identity —colors, tone, style— and generates coherent campaigns in minutes. Why I think it's good news for those of us in digital marketing.",
      readingTime: "4 min",
      body: `Google Labs unveiled **Pomelli**, a tool that does something that used to take hours: understand a brand's visual and verbal identity and generate campaign pieces that respect it.

## What it actually does

You give it your site's URL or a handful of references, and Pomelli extracts what it calls the brand's "DNA": the color palette, typography, tone of voice and image style. From there it proposes pieces —posts, banners, copy variations— that don't look pulled from a generic template, but from your own brand.

The difference from generating a one-off image in any AI tool is exactly that: **coherence**. It's not "make a nice banner", it's "make a banner that looks like mine".

## Why it matters to me

Working with small businesses, the bottleneck is never a lack of ideas. It's time. A neighborhood real estate agency or a small fashion brand doesn't have a design team on standby; it has one person doing ten things at once.

A tool that respects the identity and speeds up the jump to concrete pieces doesn't replace judgment: it frees it. The strategic work —what to say, to whom, when— stays human. What gets automated is the mechanical part of producing ten variants of the same thing.

## The flip side

It's not all excitement. When a tool makes it easy to generate "in the brand's voice", the risk is that every brand starts sounding alike, because they all use the same engine. The competitive edge stops being producing fast —anyone can— and becomes having something genuine to say.

That's where content strategy regains its full value. AI gives you speed; the judgment of what's worth publishing is still yours.

## My takeaway

Pomelli interests me less as a novelty and more as a signal of where marketing is heading: production gets cheap and strategy becomes the differentiator. For anyone already working by thinking first and producing second, it's good news.`,
    },
  },
];
