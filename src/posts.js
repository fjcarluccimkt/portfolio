// Cada post: slug (URL), date (ISO), emoji, tag y campos por idioma.
// El "body" usa Markdown simple: ## y ### para títulos, **negrita**,
// - para listas, [texto](url) para links, y líneas en blanco separan párrafos.
// Para publicar un post nuevo, copiá un objeto de este array y editalo.

export const POSTS = [
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
