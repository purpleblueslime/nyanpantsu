![pantsu img](https://files.catbox.moe/aok43e.png)

# nyanpantsu
**nyanpantsu**: a sleek, clean, and user-friendly platform designed for reading *~Japanese manga~ hentai* online. built using **next.js**, **scss**, and **mongo**, with hosting on **vercel**.

## story behind nyanpantsu
**nyanpantsu** is a website made to read **ero, *エロ*, hentai mangas (Japanese novels)** I've made using **next.js**, **scss**, **mongo**, **vercel** to host it and using **discord** to host images (using a **bot** to upload images to **Discord** as a message in a channel and then copying the image link and using it on the website).  
a **sleek**, **clean** and **easy to use UI**.  
It was my first experience with **web scraping**, I was using **web scraping** to crawl **nhentai** website to find and upload **hentais** to **mongo**.  
In **Aug 2022** **nhentai** hid their **API** behind **Cloudflare** making it impossible to scrape,  
No new **hentais** were added to **nyanpantsu** till **April 2023**. I created a **discord server** about **nyanpantsu** and hired some **data mods** to find and upload **hentais** to **nyanpantsu**, and I came up with a complete new **UI** and **UX** for the website and made the website back from the ground up using my 1-year experience of **next.js** and **scss**.  
Everything was going fine until... **Jan 2024**.  
**discord** made a **HUGE** change and all the images hosted on **discord** went dark. You can read more about it here.  
But that didn't stop me. In **June 2024** I again picked up the flame and came across an amazing website **catbox.moe** that allowed uploading **NSFW images** and **nyanpantsu** was finally revived for the 2nd time.  
But because of those 5 months **nyanpantsu** was broken, it lost a lot of **users** and **mods**, well the struggle continues till today.  
In its peak **nyanpantsu** was a home to **10k+ hentais** and **5k+ avg monthly views** and now a small collection of **hentai** is left with just a few daily views and **0 active data mods**.

# use(s)
**lang(s):** node, scss\
**framework:** nextjs\
**database:** mongo\
**host:** vercel 

# run yourself 
requires a fairly new v of **node** and **git**!

fork and **pull**.
```sh
-> git add origin https://github.com/purpleblueslime/nyanpantsu.git 
-> git pull origin
```

install **deps/dev deps** from [**`package.json`**](./package.json)

## `dev`
```sh
-> next dev
```
view at port **3k**.

## `build`
```sh
-> next build
```
