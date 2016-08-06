---
layout: post
title:  'Advanced CSS: Sass Maps to UI Components'
date:   2015-05-16 21:47:40
category: front end
permalink: /:categories/:title/
hero-image: /assets/sass-maps/og-image.png
excerpt: 'Maps are a hugely under-appreciated feature of Sass. Using Sass Maps can automate generating UI elements and improve the design consistency across your application. You will love using Sass maps when you need a set of modifier classes for UI elements.'
medium:
---

_Sass is a CSS [preprocessor](https://en.wikipedia.org/wiki/Preprocessor). It is great and widely used. If you are not familiar with it yet check out [these tutorials](http://thesassway.com/beginner)._

------------------------

Maps are a hugely under-appreciated feature of Sass. Using Sass Maps can automate generating UI elements and improve the design consistency across your application. You will love using Sass maps when you need a set of modifier classes for UI elements.

>Modifier class is a class that modifies the style of a block based on context. Block is a generic parent class that can be used on its own.

[BEM (Block Element Modifier) 101](https://css-tricks.com/bem-101/)

I have summarized a few code snippets and patterns that I use all the time. Although, of course, you should be able to apply the concept to other UI elements of your design.

## Sass Map Syntax

```
$map: (
  key-1: value-1,
  key-2: value-2,
  key-3: value-3
);
```

You can retrieve values from a map with `map-get($map, key)`.

## Setup

You probably have a Sass file where you declare all your variables (something like __variables.scss_ or __base.scss_). If you don’t, you should consider creating one. That’s where you want to set up your Sass Maps as well.

After many trials and errors, I figured that the best way to set up a Sass map is first to declare all the variables, and then create a map with those variables. That way you can still use just plain variables in your code (_e.g., $color-robin_), instead of getting a value from the map with map-get (_e.g., map-get($ui-colors, primary)_ ).

```SASS
// UI Colors
$color-robin    : #8FCCCC;
$color-vista    : #79D1AD;
$color-mandy    : #e67478;
$color-apricot  : #ed8864;
$color-eastside : #9279c3;

// UI Colors Map
$ui-colors: (
 default        : $color-robin ,
 success        : $color-vista,
 error          : $color-mandy,
 warning        : $color-apricot,
 info           : $color-eastside
);
```

I usually have 4 color maps:

- Theme colors (your brand colors)
- UI colors (colors for errors, flashes, success buttons),
- Grays (colors for typography, shadows, backgrounds),
- Brand colors (when you need social media branded elements like Facebook, Twitter, etc.)

**What variables organize in a map?** The variable you will be running through a mixin to generate modifier classes. Except for obvious choice—**colors**—try using maps for **typography**, **icons** or **images**. In the next example, I show how to generate different button classes using a UI Colors map.

## Buttons

I am using [_each_ directive]('http://sass-lang.com/documentation/file.SASS_REFERENCE.html#control_directives__expressions') to loop through the map of UI colors and create modifier classes for the generic button class. Now we have classes for the most common button styling like ‘error’ or ‘success’.

![Buttons](/assets/sass-maps/buttons.png)

```
.button {
// general styling for all buttons
// …

// Generates modifier classes for .button@each $theme, $color in 
 &--#{$theme} {
   background-color: $color;
   color: transparentize($white, .2);
 }
 &--#{$theme}:hover,
 &--#{$theme}:focus {
   background-color: shade($color, 20%);
   color: $white;
 }
}

// Usage:
// .button .button--default
// .button .button--success
// .button .button--error
// .button .button--warning
// .button .button--info
```

The benefit of this approach is keeping the code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). Also, if you ever make changes to the color scheme or add new colors, all the UI elements will automatically update.

You can imagine how you can use a similar pattern for callouts, flags, links, and any other elements that use modifier classes

## Social Media Icons

I am using a similar pattern as in a previous example, but this time, I am adding social media icons. This snippet of code creates a module style class _social-media-icon_ and modifiers for different brands.

![Social Media Icons](/assets/sass-maps/icons.png)

```
// Colors
$color-facebook  : #3B5998;
$color-twitter   : #55ACEE;
$color-pinterest : #CC2127;
$color-youtube   : #E52D27;

$social-media-icons: (
 facebook        : $icon-facebook,
 twitter         : $icon-twitter,
 pinteres        : $icon-pinterest,
 youtube         : $icon-youtube
)

// Icons
$icon-facebook   : url(‘assets/facebook.png’);
$icon-twitter    : url(‘assets/twitter.png’);
$icon-pinterest  : url(‘assets/pinterest.png’);
$icon-youtube    : url(‘assets/youtube.png’);

$social-media-colors: (
 facebook        : $color-facebook,
 twitter         : $color-twitter,
 pinteres        : $color-pinterest,
 youtube         : $color-youtube
)

.social-media-icon {
   border-radius: 50%;
   padding: .5rem;
   text-align: center;
   background-size: cover;
   background-repeat: no-repeat;
   @each $theme, $color in $social-media-colors {
     &--#{$theme} {
       background-color: $color;
     }
   }
   @each $theme, $icon in $social-media-icons {
     &--#{$theme} {
       background-attachment: $icon;
     }
   }
}

// Usage:
// .social-media-icon .social-media-icon--facebook
// .social-media-icon .social-media-icon--twitter
// .social-media-icon .social-media-icon--pinterest
// .social-media-icon .social-media-icon--youtube
```

## Final Thoughts

It looks like a lot of code for just a few UI elements, but when your codebase scales and you keep adding more and more elements that use the same maps, this set up will save time and ensure design consistency.

- Maps are good for organizing colors, typography, icons or images.
- Using defined Sass maps forces you into using consistent design patterns in the same context (e.g. all your error elements are the same color of red).
- You can use one snippet of code to create multiple modifier classes, which saves time and keeps the code DRY.