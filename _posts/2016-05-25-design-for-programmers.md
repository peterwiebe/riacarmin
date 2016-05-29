---
layout: post
title: Design for Programmers
permalink: /:categories/design-for-programmers/
category: design
excerpt: Design is a learnable skill. I've summed up a few rules and techniques you can use to build user-friendly and nicer looking interfaces.
---

### Design is a skill

Design is not as elusive as people think it is. It is a learnable skill. Design has rules that anyone can apply to their work. If you are an engineer working on an application or a business guy putting together a slide deck, there are a few tricks you can learn.

There are three components to designing anything:

- Esthetics
- Empathy
- Means of production

_Disclaimer: I am a product designer, so I will use product design as a reference point, but you can use the same principles for anything else._

Esthetics is fueled by traditional rules of visual design. The core components of visual language are grid systems, typography, color theory, and motion. Esthetics is not just a "making things pop", but a visual language. It is a skill to communicate through visuals.

Empathy is understanding of who you are designing for. In product design, it's called User Research or UX. It doesn't matter how well you are communicating if you don't know who you are talking to or what they want to talk about. Design is never in a vacuum. It has a purpose and problem at the core.

Finally, you need to know design tools to design. Design tools span from doodling on a napkin to Processing and D3.js. I can imagine the first thing that comes to your mind is Photoshop, maybe Illustrator. Coding is just as valid. In fact, many product designers switch to code or use hybrid—GUI/code—tools like Framer.js.

That's it. Learn how to use a visual language, figure out who you want to design for and what problem you are solving, and finally, learn a few tools.

Let's go over the basics of the visual language, a.k.a esthetics.

### Rule 1. Grids

Everything needs to be aligned. The first thing that would drastically change how you design is alignment. It means that all elements on your website, application, or slide deck sit on a grid.

#### Typographic Grid

The traditional typographic grid consists of columns, gutter, modules, negative space, margins, and baseline. Some common print layouts are a manuscript, columns and blocks. The typographic grid can be as simple or as advanced as you want it to be because there is very little technical limitations.

#### Web Grid

Web grid tries to be just as good as typographic but is limited by web browser capabilities. It is inspired by typography, but much less sophisticated. You can easily drop in a CSS grid into your project. There is an abundance of grid frameworks out there. My personal favourite is Neat.io

Any grid framework will provide you with a column system. The most common systems are 12, 16, and 24 columns in a container. Very easy.

#### Vertical rhythm

Now the tricky part, vertical rhythm. Vertical rhythm or baseline grid is a horizontal grid of your layout. There is no easy way to implement a baseline grid on the web. I like implementing it with a simple Sass map and then checking it with Basehold.it.

#### Hierarchy

Hierarchy conveys what is the most important on the page, and the flow of content. Headers are usually bigger than the paragraph text, and it draws people's attention to headers first, and also allows them to skim the content.

Another way of drawing attention to an element, apart from blowing it up, is using negative space. Negative or white space is the padding around the element that gives it more weight.

There are some typical web layouts:
- landing page = half-and-half
- blog = manuscript
- dashboard / app = blocks

### Rule 2. Color

The first thing I want to say about color is that it is highly subjective. There are definitely rules behind color schemes, but our perception of color highly depends on our cultural background and experiences. The bottom line, you can apply the rules of color scheme creation, but don’t expect it to have 100% success rate. I will first show you some trends in colors and then we will switch to a color wheel and I’ll show you how it works.
Like any creative field, color schemes are affected my trends. Just like in fashion. Often color trends migrate from art to graphic and industrial design and then to web design. Here are a few dominant color trends.

#### Google Material / vibrant colors

https://youtu.be/xYkz0Ueg0L4

#### Pastels

crisp imagery (high speed)

#### Greyscale + accent color

When in doubt always use a grey scale with an accent color. Purple is definitely on the rise
purple (!!)

Before we jump into working with a color wheel, there is one very important quality of color to know. Our perception of color differs based on size and position of the element.

#### Color inspiration

color inspiration ← reserved, unlike traditional graphic design; usability

- Check out Awwwards for some distilled color inspiration for UI (keep project orientation in mind)
- Pantone color of the year, color books, Pantone nerd blogs (tinypmsmatch.tumblr.com/)
- take a picture and analyse with Adobe Color (http://www.poppin.com/)

Shades / Monochromatic
https://color.adobe.com/library/BCB6CE5F-1BD9-4E22-831B-00F4E60859F9/theme/9c06eb3f-7665-4b8f-a5c6-6bc985388e7c/

Analogous
https://color.adobe.com/library/BCB6CE5F-1BD9-4E22-831B-00F4E60859F9/theme/89152ad6-3e3d-4bae-8026-4572b70f721a/

Complementary (Slack/Marsala)
http://www.pantone.com/why-marsala
https://color.adobe.com/library/BCB6CE5F-1BD9-4E22-831B-00F4E60859F9/theme/636be1db-5acc-4f5b-ab85-93db530db626/

Triad
http://touch-it.com.ua/images/products/PS039NLG_16w.jpg
https://color.adobe.com/library/BCB6CE5F-1BD9-4E22-831B-00F4E60859F9/theme/b8b6f3c1-fd64-4a07-881e-85e2eb0caaae/

Gradients

### Rule 3. Typography