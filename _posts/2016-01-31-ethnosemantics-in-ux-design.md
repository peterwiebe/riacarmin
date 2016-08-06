---
layout: post
title:  Ethnosemantics in UX Design
date:   2015-05-16 21:47:40
category: research
permalink: /:categories/:title/
excerpt: I was inspired by the holistic approach of ethnosemantics to researching the use of language among cultural groups. I have adapted some of its methods for modern user research and wanted to share my ideas about it.
medium: 'https://blog.prototypr.io/ethnosemantics-in-ux-design-1e0539f9b5e#.vvouzoswi'
---
## Why do we care about Ethnosemantics?

>Ethnosemantics is the study of how people relate concepts to each other. It is thus a scientific discipline that investigates the foundations of knowledge and understanding.

_—Dr. Leon James, University of Hawaii_

You will be surprised (_at least, I was_) to know that the majority of modern user research methods was developed by anthropologists in the early 20th century. Ethnosemantics, or ethnolinguistics, offers a comprehensive set of techniques to research users’ understanding of your product’s domain. Ultimately, you want to use the findings when shaping the information architecture.

Information architecture is the structure of all the data you have: navigation, labels and descriptions, search algorithms, metadata—you name it. **Ethnosemantic research can make the information architecture of your site or application closely mimic how your users understand that information in the first place.**

## What problem are we solving?

-  You are designing or building an app for a group of people you don’t identify yourself with (_be honest, it is most likely true_), and
-  You want to refine discovery within your application.

## How can ethnosemantics help design better interfaces?

The first discovery stage is _interviewing_ your users. Interviewing is a structured technique to collect qualitative feedback. Interviewing is not just talking to your users; it is asking right questions and listening.

Interviewing is not specific to learning taxonomy, but something that could significantly improve your user experience in general. This empathetic step will help you understand people you are building the product for on a deeper level. The purpose of these interviews is to get a large amount of unstructured data. You can extract specific user terminology later on.

One interview might take **half-an-hour** to an **hour**. When scheduling interviews, **ask to meet in the setting where the product will be used**. I cannot emphasize enough, how important it is to conduct research in a right environment.

Most likely, you won’t be writing notes the entire conversation. I highly recommend a tool like [Evernote](https://evernote.com/). You can **record the audio**, but at the same time, you can simply jot down the time on the recorder when something interesting happens, and can come back to it later and listen again.

## 1. Discover
The first discovery stage is mostly _interviewing_ your users (not talking to). It is not specific to learning the language, but something that could greatly improve your user experience in general. This empathetic step will help you understand people you are building the product for on a different level. Not just numbers and statistics, but who they _really_ are. This is a half-an-hour technique inspired by anthropologic methods. You should give it a try.

1. Start with a **Grand Tour**. It is a good way to find interesting themes. Ask questions like _“Could you describe what a day of a single dad looks like?”_, _“Could you describe the hospital you are working at?”_. The goal is to get a general vocabulary set for a place or action.
2. When you hear an interesting word or interesting action the user describes try a **Mini Tour**. It is targeted on a specific term, usually an action and uses questions like “Could you describe [action]?”
3. When you are interested in a very specific task your user has (like _“find a babysitter”_, _“file a report”_, _“connect with grandparents”_), try **Story Questions**. This tactic explores actual and often recent event with a question like _“What was the last time you [task]?”_
4. Use **Native Language** questions when it is crucial to find that right word for your interface. You need to check how the term is used within a user group, or if the person is just using it for the interview. Try repeating the term you’ve heard in your own sentence. Alternatively, ask if that is how the informant uses it with his or her peers.


When going through your notes and recordings, look for all the terms specific to the domain of your product or terms related to the tasks users would be performing within your app. Then divide the terminology into _verbs_, _nouns_, and _phrases_.

<div class="figure__container">
<figure class="figure__2 figure__centered">
  <img src="{{ '/assets/ethnosemantics-in-ux-design/speak-the-language-acorns.jpg' | prepend: site.baseurl }}" alt="acorns app">
  <figcaption>Acorns</figcaption>
</figure>
</div>

Let’s take Acorns app as an example. It allows users to invest their change from purchases (_Disclaimer: I don’t know what research the creators of Acorn conducted or what they’ve based their design decision on. I am just using their app as an example for potential research_). The designers used terms like “government bonds”, “large cap”, “small cap”, “diversified portfolio”. The app is targeting people who have little investment experience and wouldn’t mind starting with something small like change. The user research could define what language these people use when it comes to finances use or what domain knowledge they have.

## 2. Structure
The purpose of identifying the taxonomic structure is to understand how your users relate concepts to each other. Taxonomic structures are especially important when designing navigation, indexes, or search algorithms. Take a look at these examples of taxonomies in practice.

<div class="figure__container">
<figure class="figure__3">
  <img src="{{ '/assets/ethnosemantics-in-ux-design/speak-the-language-uo.jpg' | prepend: site.baseurl }}" alt="semantic relationships">
  <figcaption>Urban Outfitters</figcaption>
</figure>

<figure class="figure__3">
  <img src="{{ '/assets/ethnosemantics-in-ux-design/speak-the-language-spotify.jpg' | prepend: site.baseurl }}" alt="semantic relationships">
  <figcaption>Spotify</figcaption>
</figure>
<figure class="figure__3">
  <img src="{{ '/assets/ethnosemantics-in-ux-design/speak-the-language-yelp.jpg' | prepend: site.baseurl }}" alt="semantic relationships">
  <figcaption>Yelp</figcaption>
</figure>

</div>

These are three very different apps using taxonomies for their navigation. Well-designed navigation helps users find the right bit of information fast and with fewer steps. The relationship between the terms could be **hierarchical** (“dresses” and “casual”), **associative** (music that associates with “work-out”), **means-end** (“delivery” is a way to “get food”), or other. The appropriate structure depends on the goals of the design.

This is the area where you can improve and innovate discoverability. Working with the data you got from your users can help you find better label terms (“bottoms” vs. “pants”) or relationships (“BB cream” is not only a subset of “makeup”, but also “skincare”). Taxonomic structure largely depends on semantic relationships between terms, and there are many different ways to structure them. Here are two different approaches:

<figure>
  <img src="{{ '/assets/ethnosemantics-in-ux-design/speak-the-language-1.png' | prepend: site.baseurl }}" alt="semantic relationships">
  <figcaption>Taxonomic structures used in athropology (Spradley &amp; McCurdy)</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/ethnosemantics-in-ux-design/speak-the-language-2.png' | prepend: site.baseurl }}" alt="semantic relationships">
  <figcaption>Taxonomic structures in thesauri</figcaption>
</figure>

 The first method is used in anthropology to study “folk terms”. The second one is used in information science to create controlled vocabularies and indexes. Use these approaches to analyze raw data you got from the interviews.

## Final Thoughts

Your product has a voice, whether or not it is intentionally designed. It speaks to the user through buttons, pop-ups, error messages, and everything that has words in it. Design products that speak the same language with the user.
